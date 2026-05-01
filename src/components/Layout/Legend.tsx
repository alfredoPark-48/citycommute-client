import React from 'react';
import { LegendGroup } from './Legend/LegendGroup';
import { LegendItem } from './Legend/LegendItem';

export const Legend: React.FC = () => {
  return (
    <div className="space-y-8 md:space-y-12 mt-12 md:mt-20 animate-in fade-in slide-in-from-bottom-4 duration-1000">
      <LegendGroup title="Agents">
        <LegendItem swatch="🚗" label="Car (Moving)" />
        <LegendItem
          swatch={
            <div className="relative flex items-center justify-center">
              <span className="text-[12px] absolute -top-2 -right-2">⏳</span>
              🚗
            </div>
          }
          label="Car (Waiting)"
        />
        <LegendItem swatch="🧍‍♂️" label="Pedestrian" />
        <LegendItem
          swatch={
            <div className="relative flex items-center justify-center">
              <span className="text-[10px] absolute -top-1 -right-1">⏳</span>
              🧍‍♂️
            </div>
          }
          label="Ped (Waiting)"
        />
        <LegendItem
          swatch={
            <div className="w-6 h-6 rounded-sm bg-rose-500 border border-white flex items-center justify-center shadow-[0_0_10px_rgba(239,68,68,0.5)]">
              <span className="text-[14px] mb-0.5">🚌</span>
            </div>
          }
          label="Bus (Route 1)"
        />
        <LegendItem
          swatch={
            <div className="w-6 h-6 rounded-sm bg-purple-500 border border-white flex items-center justify-center shadow-[0_0_10px_rgba(239,68,68,0.5)]">
              <span className="text-[14px] mb-0.5">🚌</span>
            </div>
          }
          label="Bus (Route 2)"
        />
        <LegendItem
          swatch={
            <div className="w-6 h-6 rounded-sm bg-emerald-500 border border-white flex items-center justify-center shadow-[0_0_10px_rgba(16,185,129,0.5)]">
              <span className="text-[14px] mb-0.5">🚌</span>
            </div>
          }
          label="Bus (Route 3)"
        />
        <LegendItem
          swatch={
            <div className="w-6 h-6 rounded-sm bg-amber-500 border border-white flex items-center justify-center shadow-[0_0_10px_rgba(251,191,36,0.5)]">
              <span className="text-[14px] mb-0.5">🚌</span>
            </div>
          }
          label="Bus (Route 4)"
        />
      </LegendGroup>

      <LegendGroup title="Environment">
        <LegendItem swatch={<div className="w-6 h-6 rounded-sm bg-slate-800" />} label="Road" />
        <LegendItem swatch={<div className="w-6 h-6 rounded-sm bg-slate-700 border border-white/5" />} label="Intersection" />
        <LegendItem swatch={<div className="w-6 h-6 rounded-sm bg-slate-600" />} label="Sidewalk" />
        <LegendItem swatch={<div className="w-6 h-6 rounded-sm bg-slate-500 bg-[repeating-linear-gradient(45deg,transparent,transparent_4px,rgba(255,255,255,0.1)_4px,rgba(255,255,255,0.1)_8px)]" />} label="Crosswalk" />
        <LegendItem swatch={<div className="w-6 h-6 rounded-sm bg-[radial-gradient(circle,#10b981_40%,#0f172a_90%)] border border-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />} label="Traffic Light (G)" />
        <LegendItem swatch={<div className="w-6 h-6 rounded-sm bg-[radial-gradient(circle,#ef4444_40%,#0f172a_90%)] border border-red-500 shadow-[0_0_8px_rgba(239,68,68,0.5)]" />} label="Traffic Light (R)" />
        <LegendItem swatch={<div className="w-6 h-6 rounded-sm bg-slate-900" />} label="Grass / Empty" />
        <LegendItem swatch={<div className="w-6 h-6 rounded-md bg-emerald-900 border border-emerald-800" />} label="Vegetation" />
        <LegendItem swatch={<div className="w-6 h-6 rounded-sm bg-blue-900 border border-blue-800 animate-pulse" />} label="Water" />
      </LegendGroup>

      <LegendGroup title="Infrastructure">
        <LegendItem swatch={<div className="w-6 h-6 rounded-sm bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-600" />} label="Building" />
        <LegendItem swatch={<div className="w-6 h-6 rounded-sm bg-gradient-to-br from-orange-900 to-red-950 border border-orange-800" />} label="Residence" />
        <LegendItem swatch={<div className="w-6 h-6 rounded-sm bg-slate-800 border border-amber-400/50" />} label="Parking Bay" />
        <LegendItem swatch={<div className="w-6 h-6 rounded-sm bg-slate-700" />} label="Commercial Lot" />
        <LegendItem swatch={<div className="w-6 h-6 rounded-sm bg-gradient-to-br from-rose-700 to-rose-900 border border-rose-600" />} label="Destination" />
        <LegendItem swatch={<div className="w-6 h-6 rounded-full bg-gradient-to-br from-amber-400 to-amber-600 shadow-lg border border-amber-700" />} label="Monument" />
        <LegendItem swatch={<div className="w-6 h-6 rounded-sm bg-slate-800 border border-blue-500/50" />} label="Car Spawn" />
        <LegendItem swatch={<div className="w-6 h-6 rounded-sm bg-slate-800 border border-emerald-500/50" />} label="Ped Spawn" />
        <LegendItem swatch={<div className="w-6 h-6 rounded-sm bg-rose-900/80 border border-rose-300/30" />} label="Route 1 Stop" />
        <LegendItem swatch={<div className="w-6 h-6 rounded-sm bg-purple-900/80 border border-purple-300/30" />} label="Route 2 Stop" />
        <LegendItem swatch={<div className="w-6 h-6 rounded-sm bg-emerald-900/80 border border-emerald-300/30" />} label="Route 3 Stop" />
        <LegendItem swatch={<div className="w-6 h-6 rounded-sm bg-amber-900/80 border border-amber-300/30" />} label="Route 4 Stop" />
      </LegendGroup>
    </div>
  );
};
