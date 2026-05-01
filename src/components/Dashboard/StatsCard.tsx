import React from 'react';

interface StatsCardProps {
  icon: string;
  label: string;
  value: number | string;
  color: string;
  className?: string;
}

export const StatsCard: React.FC<StatsCardProps> = React.memo(({ icon, label, value, color, className = "" }) => (
  <div className={`group relative bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-2xl p-4 md:p-5 flex items-center gap-3 md:gap-4 transition-all duration-300 hover:bg-slate-800/60 hover:-translate-y-1 shadow-lg ${className}`}>
    <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl bg-${color}-500/50 group-hover:bg-${color}-500 transition-colors`}></div>
    <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-900/50 rounded-xl flex-shrink-0 flex items-center justify-center text-xl md:text-2xl group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <div className="flex flex-col min-w-0">
      <div className="text-lg md:text-xl font-bold text-slate-50 font-mono truncate">{value}</div>
      <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 truncate">{label}</div>
    </div>
  </div>
));

StatsCard.displayName = 'StatsCard';
