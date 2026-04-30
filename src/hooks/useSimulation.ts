import { useState, useEffect, useRef, useCallback } from 'react';
import { SimulationState, SimulationConfig, Command } from '../types';
import { wsService } from '../api/WebSocketService';

const getEnv = (key: string) => (window as any).ENV?.[key] || import.meta.env[key];
const API_URL = getEnv('VITE_API_URL');

export const useSimulation = () => {
  const [state, setState] = useState<SimulationState | null>(null);
  const [config, setConfig] = useState<SimulationConfig | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(300);
  const [showSettings, setShowSettings] = useState(true);
  const gridCache = useRef<string[][] | null>(null);

  // Initial config fetch
  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const response = await fetch(`${API_URL}/config`);
        const data = await response.json();
        setConfig(data);
      } catch (error) {
        console.error('Failed to fetch simulation config:', error);
      }
    };

    fetchConfig();
  }, []);

  // WebSocket Connection & Message Handling
  useEffect(() => {
    const wsUrl = getEnv('VITE_WS_URL');
    wsService.connect(wsUrl);

    const unsubscribe = wsService.subscribe((data: any) => {
      if (data.type === 'config_updated') {
        setConfig(data.config);
        return;
      }

      if (data.tick !== undefined) {
        if (data.grid) {
          gridCache.current = data.grid;
        }
        
        setState(prevState => ({
          ...data,
          grid: data.grid || gridCache.current || prevState?.grid
        }));
        
        if (data.running === false) {
          setIsPlaying(false);
        }
      }
    });

    return () => {
      unsubscribe();
      wsService.disconnect();
    };
  }, []);

  const sendCommand = useCallback((command: Command) => {
    wsService.sendCommand(command);
  }, []);

  const handlePlay = useCallback(() => {
    setIsPlaying(true);
    setShowSettings(false);
    sendCommand({ type: 'play' });
  }, [sendCommand]);

  const handlePause = useCallback(() => {
    setIsPlaying(false);
    sendCommand({ type: 'pause' });
  }, [sendCommand]);

  const handleStep = useCallback(() => {
    setIsPlaying(false);
    setShowSettings(false);
    sendCommand({ type: 'step' });
  }, [sendCommand]);

  const handleReset = useCallback(() => {
    setIsPlaying(false);
    setShowSettings(true);
    sendCommand({ type: 'reset' });
  }, [sendCommand]);

  const handleSpeedChange = useCallback((newSpeed: number) => {
    setSpeed(newSpeed);
    sendCommand({ type: 'set_speed', value: newSpeed });
  }, [sendCommand]);

  const handleConfigChange = useCallback((newConfig: Partial<SimulationConfig>) => {
    if (!config) return;
    const updated = { ...config, ...newConfig };
    setConfig(updated);
    sendCommand({ type: 'update_config', config: updated });
  }, [config, sendCommand]);

  return {
    state,
    config,
    isPlaying,
    speed,
    showSettings,
    actions: {
      play: handlePlay,
      pause: handlePause,
      step: handleStep,
      reset: handleReset,
      setSpeed: handleSpeedChange,
      updateConfig: handleConfigChange,
      setShowSettings
    }
  };
};
