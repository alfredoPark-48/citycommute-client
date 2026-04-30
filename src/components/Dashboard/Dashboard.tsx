import React from 'react';
import { SimulationStats } from '../../types';

interface DashboardProps {
  stats: SimulationStats;
}

export const Dashboard: React.FC<DashboardProps> = ({ stats }) => {
  return (
    <div className="space-y-6 mb-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Simulation Stats */}
        <StatsCard 
          icon="⏱️" 
          label="Simulation Tick" 
          value={stats.tick} 
          color="sky" 
        />
        <StatsCard 
          icon="💥" 
          label="Crashes" 
          value={stats.crashes} 
          color="amber" 
        />
        <StatsCard 
          icon="🛡️" 
          label="Safety Retreats" 
          value={stats.safety_retreats} 
          color="emerald" 
        />
        <StatsCard 
          icon="🏆" 
          label="Total Completions" 
          value={stats.completed_trips} 
          color="rose" 
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Population Stats */}
        <StatsCard 
          icon="🚗" 
          label="Active Cars" 
          value={stats.active_cars} 
          color="blue" 
        />
        <StatsCard 
          icon="🧍‍♂️" 
          label="Active Pedestrians" 
          value={stats.active_peds} 
          color="teal" 
        />
        <StatsCard 
          icon="🏁" 
          label="Arrived on Foot" 
          value={stats.arrived_peds} 
          color="green" 
        />
        <StatsCard 
          icon="🚙" 
          label="Arrived in Car" 
          value={stats.arrived_cars} 
          color="indigo" 
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Transit Stats */}
        <StatsCard 
          icon="📊" 
          label="Avg Bus Load" 
          value={stats.bus_occupancy} 
          color="purple" 
        />
        <StatsCard 
          icon="👥" 
          label="Total Passengers" 
          value={stats.total_passengers} 
          color="fuchsia" 
        />
        <StatsCard 
          icon="🚌" 
          label="Active Passengers" 
          value={stats.active_passengers} 
          color="violet" 
        />
        <StatsCard 
          icon="😠" 
          label="Total Frustrated" 
          value={stats.total_frustrated} 
          color="red" 
        />
      </div>
    </div>
  );
};

interface CardProps {
  icon: string;
  label: string;
  value: number | string;
  color: string;
}

const StatsCard: React.FC<CardProps> = ({ icon, label, value, color }) => (
  <div className={`group relative bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-2xl p-5 flex items-center gap-4 transition-all duration-300 hover:bg-slate-800/60 hover:-translate-y-1 shadow-lg`}>
    <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl bg-${color}-500/50 group-hover:bg-${color}-500 transition-colors`}></div>
    <div className="w-12 h-12 bg-slate-900/50 rounded-xl flex-shrink-0 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <div className="flex flex-col min-w-0">
      <div className="text-2xl font-bold text-slate-50 font-mono truncate">{value}</div>
      <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 truncate">{label}</div>
    </div>
  </div>
);
