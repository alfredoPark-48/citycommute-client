import React from 'react';
import { Toaster } from 'sonner';
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
      <div className="min-h-screen flex items-center justify-center bg-background text-white">
        <div className="flex flex-col items-center gap-4">
          <div className="text-accent-blue font-bold text-2xl animate-pulse flex items-center gap-3">
            <span className="animate-spin text-3xl">🏙️</span>
            Connecting to CityVerse...
          </div>
          <div className="text-slate-500 text-sm font-mono">INITIALIZING_SPATIAL_ENGINE</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-slate-200 selection:bg-accent-blue/30">
      <Toaster 
        position="bottom-right" 
        expand={false} 
        richColors 
        closeButton
        theme="dark"
        toastOptions={{
          style: {
            background: 'rgba(15, 23, 42, 0.8)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: '#f8fafc',
            borderRadius: '12px',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          },
        }}
      />
      
      <div className="max-w-[1400px] mx-auto px-6 py-8">
        <header className="text-center mb-12">
          <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-accent-blue/10 border border-accent-blue/20 text-accent-blue text-xs font-bold tracking-widest uppercase">
            Simulation Dashboard v1.0
          </div>
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter bg-gradient-to-r from-white via-slate-400 to-slate-600 bg-clip-text text-transparent mb-4 drop-shadow-xl">
            CityCommute
          </h1>
          <p className="text-slate-400 font-medium tracking-wide max-w-2xl mx-auto">
            High-fidelity agent-based simulation analyzing urban mobility patterns, 
            workforce flow, and transit infrastructure efficiency.
          </p>
        </header>

        <main className="grid grid-cols-1 gap-8">
          <section className="space-y-6">
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
          </section>

          {state.stats && <Dashboard stats={state.stats} />}

          <div className="relative rounded-2xl overflow-hidden border border-white/5 bg-slate-900/50 backdrop-blur-sm shadow-2xl">
            <SimulationGrid 
              grid={state.grid || []} 
              agents={state.agents} 
              lights={state.traffic_lights} 
            />
          </div>

          <Legend />
        </main>

        <footer className="mt-20 py-8 border-t border-white/5 text-center text-slate-500 text-sm">
          Built with Mesa & React &bull; Senior Engineering Standard
        </footer>
      </div>
    </div>
  );
};

export default App;
