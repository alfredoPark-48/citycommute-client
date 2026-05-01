import React from 'react';
import { Toaster } from 'sonner';
import { SimulationGrid } from './components/Simulation/SimulationGrid';
import { Dashboard } from './components/Dashboard/Dashboard';
import { Controls } from './components/Controls/Controls';
import { SettingsPanel } from './components/Controls/SettingsPanel';
import { Legend } from './components/Layout/Legend';
import { LoadingScreen } from './components/Layout/LoadingScreen';
import { useSimulation } from './hooks/useSimulation';
import { PageLayout } from './components/Layout/PageLayout';

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
    return <LoadingScreen />;
  }

  return (
    <PageLayout>
      <Toaster
        position="bottom-right"
        expand={false}
        richColors
        closeButton
        theme="dark"
        toastOptions={{
          className: "glass-card",
          style: {
            background: 'rgba(15, 23, 42, 0.8)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: '#f8fafc',
            borderRadius: '16px',
          },
        }}
      />

      <header className="text-center mb-12 md:mb-20 space-y-4 md:space-y-6">
        <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter bg-gradient-to-b from-white via-slate-200 to-slate-500 bg-clip-text text-transparent drop-shadow-2xl px-4">
          CityCommute
        </h1>
        <p className="text-slate-400 font-medium tracking-wide max-w-2xl mx-auto text-sm md:text-lg lg:text-xl leading-relaxed px-4 opacity-80">
          A high-fidelity agent-based simulation engine for analyzing
          <span className="text-slate-200"> urban mobility patterns</span>,
          <span className="text-slate-200"> workforce flow</span>, and
          <span className="text-slate-200"> infrastructure efficiency</span>.
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

        <div className="relative rounded-3xl overflow-hidden glass-card p-[2px]">
          <SimulationGrid
            grid={state.grid || []}
            agents={state.agents}
            lights={state.traffic_lights}
          />
        </div>

        <Legend />
      </main>

      <footer className="mt-20 py-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-center gap-4 text-slate-500 text-sm">
        <div className="text-center">
          &copy; {new Date().getFullYear()} Alfredo Park
        </div>
      </footer>
    </PageLayout>
  );
};

export default App;
