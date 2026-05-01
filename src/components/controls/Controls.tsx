import React from 'react';
import { Play, Pause, RotateCcw, StepForward, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '../ui/slider';
import { cn } from '@/lib/utils';

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
      <Button
        onClick={onStep}
        variant="sky"
      >
        <StepForward size={18} /> Step
      </Button>

      {isPlaying ? (
        <Button
          onClick={onPause}
          variant="amber"
          className="ring-2 ring-emerald-500 ring-offset-2 ring-offset-background"
        >
          <Pause size={18} /> Pause
        </Button>
      ) : (
        <Button
          onClick={onPlay}
          variant="emerald"
        >
          <Play size={18} /> Play
        </Button>
      )}

      <Button
        onClick={onReset}
        variant="rose"
      >
        <RotateCcw size={18} /> Reset
      </Button>

      <div className="flex items-center gap-4 px-6 py-2 bg-slate-800/60 backdrop-blur-md rounded-xl border border-slate-700/50 shadow-inner min-w-[280px]">
        <span className="text-sm font-bold text-slate-400 uppercase tracking-wider shrink-0">Speed</span>
        <Slider
          value={speed}
          onValueChange={onSpeedChange}
          min={100}
          max={1000}
          step={50}
          className="w-32"
          accentColor="sky"
        />
        <span className="text-sky-400 font-mono font-bold min-w-[60px] text-right">{speed}ms</span>
      </div>
    </div>
  );
};

