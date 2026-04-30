import React, { useEffect, useState, useRef } from 'react';
import { SimulationGrid } from './components/Simulation/SimulationGrid';
import { Dashboard } from './components/Dashboard/Dashboard';
import { Controls, SettingsPanel } from './components/Controls/Controls';
import { Legend } from './components/Layout/Legend';
import { wsService } from './api/WebSocketService';
import { SimulationState, SimulationConfig } from './types';
import './styles/global.css';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000';

const App: React.FC = () => {
  const [state, setState] = useState<SimulationState | null>(null);
  const [config, setConfig] = useState<SimulationConfig | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [speed, setSpeed] = useState(300);
  const [showSettings, setShowSettings] = useState(true);
  const gridCache = useRef<string[][] | null>(null);

  useEffect(() => {
    // Initial config fetch
    fetch(`${API_URL}/config`)
      .then(r => r.json())
      .then(setConfig)
      .catch(console.error);

    const wsUrl = import.meta.env.VITE_WS_URL || `ws://${window.location.hostname}:8000/ws`;
    
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
        
        if (data.running === false && isPlaying) {
          setIsPlaying(false);
        }
      }
    });

    return () => {
      unsubscribe();
      wsService.disconnect();
    };
  }, []);

  const handlePlay = () => {
    setIsPlaying(true);
    setShowSettings(false);
    wsService.sendCommand({ type: 'play' });
  };

  const handlePause = () => {
    setIsPlaying(false);
    wsService.sendCommand({ type: 'pause' });
  };

  const handleStep = () => {
    setIsPlaying(false);
    setShowSettings(false);
    wsService.sendCommand({ type: 'step' });
  };

  const handleReset = () => {
    setIsPlaying(false);
    setShowSettings(true);
    wsService.sendCommand({ type: 'reset' });
  };

  const handleSpeedChange = (newSpeed: number) => {
    setSpeed(newSpeed);
    wsService.sendCommand({ type: 'set_speed', value: newSpeed });
  };

  const handleConfigChange = (newConfig: Partial<SimulationConfig>) => {
    if (!config) return;
    const updated = { ...config, ...newConfig };
    setConfig(updated);
    wsService.sendCommand({ type: 'update_config', config: updated });
  };

  if (!state) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-accent-blue font-bold text-xl animate-pulse">
          Connecting to CityVerse...
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[1300px] mx-auto px-6 py-8">
      <header className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-accent-blue via-accent-green to-accent-red bg-clip-text text-transparent mb-3 drop-shadow-sm">
          🏙️ CityCommute: Work Commute Simulation
        </h1>
        <p className="text-slate-400 font-medium tracking-wide">
          Analyzing Urban Mobility and Workforce Flow
        </p>
      </header>

      <main className="space-y-8">
        <Controls 
          isPlaying={isPlaying}
          onPlay={handlePlay}
          onPause={handlePause}
          onStep={handleStep}
          onReset={handleReset}
          speed={speed}
          onSpeedChange={handleSpeedChange}
        />

        {config && (
          <SettingsPanel 
            config={config} 
            onConfigChange={handleConfigChange}
            isVisible={showSettings}
          />
        )}

        {state.stats && <Dashboard stats={state.stats} />}

        <div className="relative">
          <SimulationGrid 
            grid={state.grid || []} 
            agents={state.agents} 
            lights={state.traffic_lights} 
          />
        </div>

        <Legend />
      </main>
    </div>
  );
};

export default App;
