import { toast } from 'sonner';
import { Command, SimulationState, ApiResponse } from '../types';

export type MessageHandler = (data: SimulationState) => void;

class WebSocketService {
  private socket: WebSocket | null = null;
  private messageHandlers: Set<MessageHandler> = new Set();
  private reconnectTimeout: number | null = null;

  connect(url: string) {
    if (this.socket) this.socket.close();

    this.socket = new WebSocket(url);

    this.socket.onopen = () => {
      console.log('WS Connected');
      toast.success('Connected to CityVerse', {
        description: 'Real-time simulation link established.',
      });
      if (this.reconnectTimeout) {
        clearTimeout(this.reconnectTimeout);
        this.reconnectTimeout = null;
      }
    };

    this.socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      
      // Check if it's an ApiResponse (notification)
      if (typeof data.success === 'boolean' && data.message) {
        const response = data as ApiResponse;
        if (response.success) {
          toast.success(response.message, {
            description: `Event Code: ${response.code}`,
          });
        } else {
          toast.error(response.message, {
            description: `Error Code: ${response.code}`,
          });
        }
        return;
      }

      // Otherwise it's a state update
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
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(JSON.stringify(command));
    } else {
      toast.error('Command Failed', {
        description: 'WebSocket is not connected.',
      });
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
