import React from 'react';
import { SimulationConfig } from '../../types';
import { Slider } from '../ui/slider';
import { Switch } from '../ui/switch';

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
    { label: "Target Cars", key: "target_cars", min: 30, max: config.max_cars, step: 5, color: "sky" as const },
    { label: "Target Pedestrians", key: "target_peds", min: 30, max: config.max_peds, step: 10, color: "emerald" as const },
    { label: "Target Buses", key: "target_buses", min: 4, max: config.max_buses, step: 1, color: "purple" as const },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 p-6 glass-card rounded-3xl animate-in fade-in slide-in-from-top-4">
      {sliderConfigs.map((cfg) => (
        <div key={cfg.key} className="p-4 bg-slate-800/50 rounded-2xl border border-slate-700/30 hover:border-slate-600/50 transition-colors">
          <Slider
            label={cfg.label}
            value={config[cfg.key as keyof SimulationConfig] as number}
            onValueChange={(val) => onConfigChange({ [cfg.key]: val })}
            min={cfg.min}
            max={cfg.max}
            step={cfg.step}
            accentColor={cfg.color}
          />
        </div>
      ))}
      
      <div className="p-4 bg-slate-800/50 rounded-2xl border border-slate-700/30 hover:border-slate-600/50 transition-colors flex items-center">
        <Switch
          label="Regenerate Agents"
          description="Infinite mode: agents respawn on arrival"
          checked={config.regenerate_agents}
          onCheckedChange={(checked) => onConfigChange({ regenerate_agents: checked })}
        />
      </div>
    </div>
  );
});


