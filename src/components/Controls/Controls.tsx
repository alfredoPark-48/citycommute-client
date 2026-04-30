import React from 'react';
import { SimulationConfig } from '../../types';
import { Play, Pause, RotateCcw, StepForward } from 'lucide-react';

interface ControlsProps {
  isPlaying: boolean;
  onPlay: () => void;
  onPause: () => void;
  onStep: () => void;
  onReset: () => void;
  speed: number;
  onSpeedChange: (speed: number) => void;
}

export const Controls: React.FC<ControlsProps> = ({
  isPlaying, onPlay, onPause, onStep, onReset, speed, onSpeedChange
}) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
      <button 
        className="flex items-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 shadow-md hover:-translate-y-0.5 active:translate-y-0 bg-gradient-to-br from-sky-500 to-blue-600 text-white hover:shadow-lg hover:shadow-sky-500/25"
        onClick={onStep}
      >
        <StepForward size={18} /> Step
      </button>
      
      {isPlaying ? (
        <button 
          className="flex items-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 shadow-md hover:-translate-y-0.5 active:translate-y-0 bg-gradient-to-br from-amber-500 to-orange-600 text-white hover:shadow-lg hover:shadow-amber-500/25 ring-2 ring-emerald-500 ring-offset-2 ring-offset-background"
          onClick={onPause}
        >
          <Pause size={18} /> Pause
        </button>
      ) : (
        <button 
          className="flex items-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 shadow-md hover:-translate-y-0.5 active:translate-y-0 bg-gradient-to-br from-emerald-500 to-green-600 text-white hover:shadow-lg hover:shadow-emerald-500/25"
          onClick={onPlay}
        >
          <Play size={18} /> Play
        </button>
      )}
      
      <button 
        className="flex items-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 shadow-md hover:-translate-y-0.5 active:translate-y-0 bg-gradient-to-br from-rose-500 to-red-600 text-white hover:shadow-lg hover:shadow-rose-500/25"
        onClick={onReset}
      >
        <RotateCcw size={18} /> Reset
      </button>

      <div className="flex items-center gap-4 px-4 py-2 bg-slate-800/60 backdrop-blur-md rounded-xl border border-slate-700/50 shadow-inner">
        <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Speed</span>
        <input 
          type="range" 
          min="50" max="1000" step="50"
          className="w-32 cursor-pointer h-1.5 bg-slate-700 rounded-lg appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:ring-2 [&::-webkit-slider-thumb]:ring-accent-blue/50 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:shadow-lg"
          value={speed}
          onChange={(e) => onSpeedChange(parseInt(e.target.value))}
        />
        <span className="text-accent-blue font-mono font-bold min-w-[50px]">{speed}ms</span>
      </div>
    </div>
  );
};

interface SettingsPanelProps {
  config: SimulationConfig;
  onConfigChange: (config: Partial<SimulationConfig>) => void;
  isVisible: boolean;
}

export const SettingsPanel: React.FC<SettingsPanelProps> = ({
  config, onConfigChange, isVisible
}) => {
  if (!isVisible) return null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 p-6 bg-slate-800/30 backdrop-blur-xl border border-slate-700/50 rounded-3xl shadow-2xl transition-all duration-500 animate-in fade-in slide-in-from-top-4">
      <div className="flex flex-col gap-3 p-4 bg-slate-800/50 rounded-2xl border border-slate-700/30 hover:border-slate-600/50 transition-colors">
        <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-slate-300">
          <span>Target Cars</span>
          <span className="bg-sky-500/10 text-sky-400 px-2 py-0.5 rounded-md font-mono">{config.target_cars}</span>
        </div>
        <input 
          type="range" 
          className="w-full cursor-pointer h-1.5 bg-slate-700 rounded-lg appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:ring-2 [&::-webkit-slider-thumb]:ring-sky-500/50 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:shadow-lg" 
          min="30" max={config.max_cars} step="5"
          value={config.target_cars}
          onChange={(e) => onConfigChange({ target_cars: parseInt(e.target.value) })}
        />
      </div>
      
      <div className="flex flex-col gap-3 p-4 bg-slate-800/50 rounded-2xl border border-slate-700/30 hover:border-slate-600/50 transition-colors">
        <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-slate-300">
          <span>Target Pedestrians</span>
          <span className="bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-md font-mono">{config.target_peds}</span>
        </div>
        <input 
          type="range" 
          className="w-full cursor-pointer h-1.5 bg-slate-700 rounded-lg appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:ring-2 [&::-webkit-slider-thumb]:ring-emerald-500/50 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:shadow-lg" 
          min="30" max={config.max_peds} step="10"
          value={config.target_peds}
          onChange={(e) => onConfigChange({ target_peds: parseInt(e.target.value) })}
        />
      </div>

      <div className="flex flex-col gap-3 p-4 bg-slate-800/50 rounded-2xl border border-slate-700/30 hover:border-slate-600/50 transition-colors">
        <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-slate-300">
          <span>Target Buses</span>
          <span className="bg-purple-500/10 text-purple-400 px-2 py-0.5 rounded-md font-mono">{config.target_buses}</span>
        </div>
        <input 
          type="range" 
          className="w-full cursor-pointer h-1.5 bg-slate-700 rounded-lg appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:ring-2 [&::-webkit-slider-thumb]:ring-purple-500/50 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:shadow-lg" 
          min="4" max={config.max_buses} step="1"
          value={config.target_buses}
          onChange={(e) => onConfigChange({ target_buses: parseInt(e.target.value) })}
        />
      </div>

      <div className="flex justify-between items-center p-4 bg-slate-800/50 rounded-2xl border border-slate-700/30 hover:border-slate-600/50 transition-colors">
        <div className="space-y-1">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-300">Regenerate Agents</div>
          <div className="text-[10px] text-slate-500 leading-tight">Infinite mode: agents respawn on arrival</div>
        </div>
        <label className="relative inline-flex items-center cursor-pointer">
          <input 
            type="checkbox" 
            className="sr-only peer"
            checked={config.regenerate_agents}
            onChange={(e) => onConfigChange({ regenerate_agents: e.target.checked })}
          />
          <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
        </label>
      </div>
    </div>
  );
};
