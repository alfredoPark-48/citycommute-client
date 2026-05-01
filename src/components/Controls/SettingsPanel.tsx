import React from 'react';
import { SimulationConfig } from '../../types';

interface SettingsPanelProps {
  config: SimulationConfig;
  onConfigChange: (config: Partial<SimulationConfig>) => void;
  isVisible: boolean;
}

export const SettingsPanel: React.FC<SettingsPanelProps> = React.memo(({
  config, onConfigChange, isVisible
}) => {
  if (!isVisible) return null;

  const sliderConfigs = [
    { label: "Target Cars", key: "target_cars", min: 30, max: config.max_cars, step: 5, color: "sky" },
    { label: "Target Pedestrians", key: "target_peds", min: 30, max: config.max_peds, step: 10, color: "emerald" },
    { label: "Target Buses", key: "target_buses", min: 4, max: config.max_buses, step: 1, color: "purple" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 p-6 glass-card rounded-3xl animate-in fade-in slide-in-from-top-4">
      {sliderConfigs.map((cfg) => (
        <div key={cfg.key} className="flex flex-col gap-3 p-4 bg-slate-800/50 rounded-2xl border border-slate-700/30 hover:border-slate-600/50 transition-colors">
          <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-slate-300">
            <span>{cfg.label}</span>
            <span className={`bg-${cfg.color}-500/10 text-${cfg.color}-400 px-2 py-0.5 rounded-md font-mono`}>
              {config[cfg.key as keyof SimulationConfig] as number}
            </span>
          </div>
          <input 
            type="range" 
            className={`w-full cursor-pointer h-1.5 bg-slate-700 rounded-lg appearance-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:ring-2 [&::-webkit-slider-thumb]:ring-${cfg.color}-500/50 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:shadow-lg`} 
            min={cfg.min} 
            max={cfg.max} 
            step={cfg.step}
            value={config[cfg.key as keyof SimulationConfig] as number}
            onChange={(e) => onConfigChange({ [cfg.key]: parseInt(e.target.value) })}
          />
        </div>
      ))}
      
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
});

SettingsPanel.displayName = 'SettingsPanel';
