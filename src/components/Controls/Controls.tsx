import React from 'react';
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
      <ControlButton 
        onClick={onStep} 
        icon={<StepForward size={18} />} 
        label="Step" 
        variant="sky" 
      />
      
      {isPlaying ? (
        <ControlButton 
          onClick={onPause} 
          icon={<Pause size={18} />} 
          label="Pause" 
          variant="amber" 
          className="ring-2 ring-emerald-500 ring-offset-2 ring-offset-background"
        />
      ) : (
        <ControlButton 
          onClick={onPlay} 
          icon={<Play size={18} />} 
          label="Play" 
          variant="emerald" 
        />
      )}
      
      <ControlButton 
        onClick={onReset} 
        icon={<RotateCcw size={18} />} 
        label="Reset" 
        variant="rose" 
      />

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

interface ControlButtonProps {
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
  variant: 'sky' | 'amber' | 'emerald' | 'rose';
  className?: string;
}

const ControlButton: React.FC<ControlButtonProps> = ({ onClick, icon, label, variant, className = "" }) => {
  const variants = {
    sky: "from-sky-500 to-blue-600 hover:shadow-sky-500/25",
    amber: "from-amber-500 to-orange-600 hover:shadow-amber-500/25",
    emerald: "from-emerald-500 to-green-600 hover:shadow-emerald-500/25",
    rose: "from-rose-500 to-red-600 hover:shadow-rose-500/25"
  };

  return (
    <button 
      className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 shadow-md hover:-translate-y-0.5 active:translate-y-0 bg-gradient-to-br ${variants[variant]} text-white hover:shadow-lg ${className}`}
      onClick={onClick}
    >
      {icon} {label}
    </button>
  );
};
