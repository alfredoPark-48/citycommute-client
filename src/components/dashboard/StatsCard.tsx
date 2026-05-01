import React from 'react';
import { cn } from "@/lib/utils";

interface StatsCardProps {
  icon: string | React.ReactNode;
  label: string;
  value: number | string;
  color: string;
  className?: string;
}

const colorMap: Record<string, string> = {
  sky: "border-sky-500/50 group-hover:border-sky-400",
  amber: "border-amber-500/50 group-hover:border-amber-400",
  emerald: "border-emerald-500/50 group-hover:border-emerald-400",
  rose: "border-rose-500/50 group-hover:border-rose-400",
  blue: "border-blue-500/50 group-hover:border-blue-400",
  teal: "border-teal-500/50 group-hover:border-teal-400",
  green: "border-green-500/50 group-hover:border-green-400",
  indigo: "border-indigo-500/50 group-hover:border-indigo-400",
  purple: "border-purple-500/50 group-hover:border-purple-400",
  fuchsia: "border-fuchsia-500/50 group-hover:border-fuchsia-400",
  violet: "border-violet-500/50 group-hover:border-violet-400",
  red: "border-red-500/50 group-hover:border-red-400",
};

const bgColorMap: Record<string, string> = {
  sky: "bg-sky-500/10",
  amber: "bg-amber-500/10",
  emerald: "bg-emerald-500/10",
  rose: "bg-rose-500/10",
  blue: "bg-blue-500/10",
  teal: "bg-teal-500/10",
  green: "bg-green-500/10",
  indigo: "bg-indigo-500/10",
  purple: "bg-purple-500/10",
  fuchsia: "bg-fuchsia-500/10",
  violet: "bg-violet-500/10",
  red: "bg-red-500/10",
};

export const StatsCard: React.FC<StatsCardProps> = React.memo(({ icon, label, value, color, className = "" }) => (
  <div className={`group relative bg-slate-800/40 backdrop-blur-md border border-slate-700/50 rounded-2xl p-4 md:p-5 flex items-center gap-3 md:gap-4 transition-all duration-300 hover:bg-slate-800/60 hover:-translate-y-1 shadow-lg ${className}`}>
    <div className={`absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl bg-${color}-500/50 group-hover:bg-${color}-500 transition-colors`}></div>
    <div className="w-10 h-10 md:w-12 md:h-12 bg-slate-900/50 rounded-xl flex-shrink-0 flex items-center justify-center text-xl md:text-2xl group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <div className="flex flex-col min-w-0">
      <div className="text-xl md:text-2xl font-bold text-slate-50 font-mono truncate">{value}</div>
      <div className="text-xs font-bold uppercase tracking-widest text-slate-400 truncate">{label}</div>
    </div>
  </div>
));

StatsCard.displayName = 'StatsCard';
