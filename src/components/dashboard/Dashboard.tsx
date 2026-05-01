import React, { useState, useMemo } from 'react';
import { SimulationStats } from '../../types';
import { ChevronDown, ChevronUp, LayoutDashboard } from 'lucide-react';
import { StatsCard } from './StatsCard';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '../ui/collapsible';
import { Badge } from '../ui/badge';
import { cn } from '@/lib/utils';

interface DashboardProps {
  stats: SimulationStats;
}

const getDashboardSections = (stats: SimulationStats) => [
  {
    title: "Simulation Health",
    metrics: [
      { icon: "⏱️", label: "Global Tick", value: stats.tick, color: "sky" },
      { icon: "💥", label: "System Crashes", value: stats.crashes, color: "amber", className: stats.crashes > 0 ? "animate-pulse" : "" },
      { icon: "🛡️", label: "Safety Events", value: stats.safety_retreats, color: "emerald" },
      { icon: "🏆", label: "Completed Trips", value: stats.completed_trips, color: "rose" },
    ]
  },
  {
    title: "Population Dynamics",
    metrics: [
      { icon: "🚗", label: "Active Vehicles", value: stats.active_cars, color: "blue" },
      { icon: "🧍‍♂️", label: "Active Pedestrians", value: stats.active_peds, color: "teal" },
      { icon: "🏁", label: "Arrived (Foot)", value: stats.arrived_peds, color: "green" },
      { icon: "🚙", label: "Arrived (Car)", value: stats.arrived_cars, color: "indigo" },
    ]
  },
  {
    title: "Transit Efficiency",
    metrics: [
      { icon: "📊", label: "Avg Bus Load", value: stats.bus_occupancy, color: "purple" },
      { icon: "👥", label: "Total Riders", value: stats.total_passengers, color: "fuchsia" },
      { icon: "🚌", label: "Active Riders", value: stats.active_passengers, color: "violet" },
      { icon: "😠", label: "Congestion Stress", value: stats.total_frustrated, color: "red" },
    ]
  }
];

export const Dashboard: React.FC<DashboardProps> = ({ stats }) => {
  const [isExpanded, setIsExpanded] = useState(true);
  const sections = useMemo(() => getDashboardSections(stats), [stats]);

  return (
    <Collapsible
      open={isExpanded}
      onOpenChange={setIsExpanded}
      className="mb-12 w-[100vw] relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]"
    >
      <div className="max-w-[1400px] mx-auto bg-slate-800/40 border border-slate-700/50 rounded-3xl shadow-lg overflow-hidden transition-all duration-300">
        <CollapsibleTrigger className="w-full">
          <button
            className="w-full flex items-center justify-between p-4 md:p-6 hover:bg-slate-800/60 transition-all duration-300 group"
          >
            <div className="flex items-center gap-2 md:gap-3 min-w-0">
              <div className="w-8 h-8 rounded-lg bg-sky-500/10 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform shrink-0">
                <LayoutDashboard size={18} />
              </div>
              <span className="font-bold tracking-tight text-slate-200 text-sm md:text-lg truncate">Simulation Metrics</span>
              {!isExpanded && (
                <div className="hidden sm:flex gap-2 ml-2 md:ml-4 shrink-0 overflow-x-auto no-scrollbar">
                  <Badge variant="sky" className="font-mono text-[11px] md:text-xs">TICK: {stats.tick}</Badge>
                  <Badge variant="emerald" className="font-mono text-[11px] md:text-xs">ACTIVE: {stats.active_cars + stats.active_peds}</Badge>
                  <Badge variant="rose" className="font-mono text-[11px] md:text-xs">TRIPS: {stats.completed_trips}</Badge>
                  {stats.crashes > 0 && (
                    <Badge variant="amber" className="font-mono text-[11px] md:text-xs animate-pulse">CRASHES: {stats.crashes}</Badge>
                  )}
                </div>
              )}
            </div>
            <div className="flex items-center gap-2 text-slate-500 group-hover:text-slate-300 transition-colors shrink-0">
              <span className="hidden xs:inline text-xs uppercase font-bold tracking-widest">{isExpanded ? 'Collapse' : 'Expand'}</span>
              {isExpanded ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </div>
          </button>
        </CollapsibleTrigger>

        <CollapsibleContent>
          <div className="p-6 md:p-8 pt-0 space-y-10">
            {sections.map((section, idx) => (
              <div key={idx} className="space-y-4">
                <h3 className="text-xs md:text-sm font-bold uppercase tracking-[0.2em] text-slate-500 ml-1">{section.title}</h3>
                <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                  {section.metrics.map((metric, midx) => (
                    <StatsCard key={midx} {...metric} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </CollapsibleContent>
      </div>
    </Collapsible>
  );
};

const BadgePill: React.FC<{ label: string, value: number, color: string, pulse?: boolean }> = ({ label, value, color, pulse }) => (
  <div className={cn(
    "flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-950/50 border border-white/5",
    pulse && "animate-pulse"
  )}>
    <span className="text-[9px] font-black tracking-widest text-slate-500">{label}</span>
    <span className={cn("text-xs font-mono font-bold", `text-${color}-400`)}>{value}</span>
  </div>
);
