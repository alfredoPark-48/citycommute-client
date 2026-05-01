import React, { useState } from 'react';
import { SimulationStats } from '../../types';
import { ChevronDown, ChevronUp, LayoutDashboard } from 'lucide-react';
import { StatsCard } from './StatsCard';

interface DashboardProps {
  stats: SimulationStats;
}

export const Dashboard: React.FC<DashboardProps> = ({ stats }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const sections = [
    {
      title: "Simulation Status",
      metrics: [
        { icon: "⏱️", label: "Simulation Tick", value: stats.tick, color: "sky" },
        { icon: "💥", label: "Crashes", value: stats.crashes, color: "amber", className: stats.crashes > 0 ? "animate-pulse" : "" },
        { icon: "🛡️", label: "Safety Retreats", value: stats.safety_retreats, color: "emerald" },
        { icon: "🏆", label: "Total Completions", value: stats.completed_trips, color: "rose" },
      ]
    },
    {
      title: "Population",
      metrics: [
        { icon: "🚗", label: "Active Cars", value: stats.active_cars, color: "blue" },
        { icon: "🧍‍♂️", label: "Active Pedestrians", value: stats.active_peds, color: "teal" },
        { icon: "🏁", label: "Arrived on Foot", value: stats.arrived_peds, color: "green" },
        { icon: "🚙", label: "Arrived in Car", value: stats.arrived_cars, color: "indigo" },
      ]
    },
    {
      title: "Transit & Efficiency",
      metrics: [
        { icon: "📊", label: "Avg Bus Load", value: stats.bus_occupancy, color: "purple" },
        { icon: "👥", label: "Total Passengers", value: stats.total_passengers, color: "fuchsia" },
        { icon: "🚌", label: "Active Passengers", value: stats.active_passengers, color: "violet" },
        { icon: "😠", label: "Total Frustrated", value: stats.total_frustrated, color: "red" },
      ]
    }
  ];

  return (
    <div className="mb-8 overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-3 md:p-4 bg-slate-800/40 hover:bg-slate-800/60 border border-slate-700/50 rounded-2xl transition-all duration-300 group shadow-lg"
      >
        <div className="flex items-center gap-2 md:gap-3 min-w-0">
          <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform shrink-0">
            <LayoutDashboard size={18} />
          </div>
          <span className="font-bold tracking-tight text-slate-200 text-sm md:text-lg truncate">Simulation Metrics</span>
          {!isExpanded && (
            <div className="hidden sm:flex gap-2 ml-2 md:ml-4 shrink-0">
              <span className="px-2 py-0.5 rounded-md bg-slate-800 text-[9px] md:text-[10px] text-slate-400 font-mono">TICK: {stats.tick}</span>
              <span className="px-2 py-0.5 rounded-md bg-slate-800 text-[9px] md:text-[10px] text-slate-400 font-mono">TRIPS: {stats.completed_trips}</span>
            </div>
          )}
        </div>
        <div className="flex items-center gap-2 text-slate-500 group-hover:text-slate-300 transition-colors shrink-0">
          <span className="hidden xs:inline text-[10px] uppercase font-bold tracking-widest">{isExpanded ? 'Collapse' : 'Expand'}</span>
          {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </div>
      </button>

      <div className={`transition-all duration-500 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[2000px] opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
        <div className="space-y-8">
          {sections.map((section, idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-slate-500 ml-1">{section.title}</h3>
              <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                {section.metrics.map((metric, midx) => (
                  <StatsCard key={midx} {...metric} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
