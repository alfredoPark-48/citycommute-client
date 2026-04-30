import React from 'react';
import { SimulationGrid } from './components/Simulation/SimulationGrid';
import { Dashboard } from './components/Dashboard/Dashboard';
import { Controls, SettingsPanel } from './components/Controls/Controls';
import { Legend } from './components/Layout/Legend';
import { useSimulation } from './hooks/useSimulation';
import './styles/global.css';

const App: React.FC = () => {
  const { 
    state, 
    config, 
    isPlaying, 
    speed, 
    showSettings, 
    actions 
  } = useSimulation();

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
          onPlay={actions.play}
          onPause={actions.pause}
          onStep={actions.step}
          onReset={actions.reset}
          speed={speed}
          onSpeedChange={actions.setSpeed}
        />

        {config && (
          <SettingsPanel 
            config={config} 
            onConfigChange={actions.updateConfig}
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
