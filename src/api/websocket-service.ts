import { toast } from 'sonner';
import { Command, SimulationState, ApiResponse } from '../types';

export type MessageHandler = (data: SimulationState) => void;

class WebSocketService {
  private socket: WebSocket | null = null;
  private messageHandlers: Set<MessageHandler> = new Set();
  private reconnectTimeout: number | null = null;
  private commandQueue: string[] = [];

  connect(url: string) {
    if (this.socket) this.socket.close();

    this.socket = new WebSocket(url);

    this.socket.onopen = () => {
      console.log('WS Connected');
      toast.success('Connected to CityVerse', {
        description: 'Real-time simulation link established.',
      });
      
      // Flush queue
      while (this.commandQueue.length > 0) {
        const cmd = this.commandQueue.shift();
        if (cmd) this.socket?.send(cmd);
      }

      if (this.reconnectTimeout) {
        clearTimeout(this.reconnectTimeout);
        this.reconnectTimeout = null;
      }
    };

    this.socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      
      if (typeof data.success === 'boolean' && data.message) {
        const response = data as ApiResponse;
        if (response.success) {
          toast.success(response.message, { duration: 3000 });
        } else {
          toast.error(response.message, {
            description: `Error Code: ${response.code}`,
            duration: 6000,
          });
        }
        return;
      }

      this.messageHandlers.forEach(handler => handler(data));
    };

    this.socket.onclose = () => {
      console.warn('WS Closed. Reconnecting...');
      toast.warning('Connection Lost', {
        description: 'Attempting to re-establish spatial link...',
      });
      this.reconnectTimeout = window.setTimeout(() => this.connect(url), 2000);
    };

    this.socket.onerror = (err) => {
      console.error('WS Error:', err);
      toast.error('WebSocket Protocol Error', {
        description: 'Check backend availability and network status.',
      });
    };
  }

  subscribe(handler: MessageHandler) {
    this.messageHandlers.add(handler);
    return () => this.messageHandlers.delete(handler);
  }

  sendCommand(command: Command) {
    const message = JSON.stringify(command);
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(message);
    } else {
      // Queue command if not connected
      this.commandQueue.push(message);
      if (!this.socket || this.socket.readyState === WebSocket.CLOSED) {
        console.log("Command queued: WebSocket not ready.");
      }
    }
  }

  disconnect() {
    if (this.socket) {
      this.socket.close();
      this.socket = null;
    }
  }
}

export const wsService = new WebSocketService();
