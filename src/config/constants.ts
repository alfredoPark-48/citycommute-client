export const CELL_SIZE = 16;
export const GAP = 1;
export const STEP = CELL_SIZE + GAP;

export const CHAR_CLASS: Record<string, string> = {
  "^": "bg-slate-800",
  "v": "bg-slate-800",
  ">": "bg-slate-800",
  "<": "bg-slate-800",
  I: "bg-slate-700 border border-white/5",
  S: "bg-slate-600 border border-white/5",
  T: "bg-slate-900 border border-slate-700 rounded-sm",
  t: "bg-slate-900 border border-slate-700 rounded-sm",
  V: "bg-emerald-900/80 rounded-md border border-emerald-800 flex items-center justify-center after:content-['🌳'] after:text-[10px]",
  W: "bg-blue-900 border border-blue-800 rounded-sm flex items-center justify-center animate-water-pulse after:content-['💧'] after:text-[10px]",
  D: "bg-gradient-to-br from-rose-700 to-rose-900 border border-rose-600 shadow-[0_0_8px_rgba(190,24,93,0.4)]",
  B: "bg-gradient-to-br from-slate-700 to-slate-800 border border-slate-600 shadow-inner",
  A: "bg-gradient-to-br from-amber-400 to-amber-600 rounded-full shadow-[0_0_12px_rgba(251,191,36,0.6)] border border-amber-700 flex items-center justify-center after:content-['👼'] after:text-[10px]",
  X: "bg-slate-500 bg-[repeating-linear-gradient(45deg,transparent,transparent_4px,rgba(255,255,255,0.1)_4px,rgba(255,255,255,0.1)_8px)] border border-slate-400",
  x: "bg-slate-500 bg-[repeating-linear-gradient(45deg,transparent,transparent_4px,rgba(255,255,255,0.1)_4px,rgba(255,255,255,0.1)_8px)] border border-slate-400",
  P: "bg-slate-800 border border-amber-400/50 flex items-center justify-center after:content-['P'] after:text-[9px] after:text-amber-400 after:font-black after:opacity-70",
  L: "bg-slate-700 border border-slate-900",
  H: "bg-gradient-to-br from-orange-900 to-red-950 border border-orange-800 shadow-inner",
  c: "bg-slate-800 border border-blue-500/50 flex items-center justify-center after:content-['CS'] after:text-[8px] after:text-blue-500 after:font-bold",
  p: "bg-slate-800 border border-emerald-500/50 flex items-center justify-center after:content-['PS'] after:text-[8px] after:text-emerald-500 after:font-bold",
  "1": "bg-rose-900/80 border border-rose-300/30 flex items-center justify-center after:content-['🚏'] after:text-[10px]",
  "2": "bg-purple-900/80 border border-purple-300/30 flex items-center justify-center after:content-['🚏'] after:text-[10px]",
  "3": "bg-emerald-900/80 border border-emerald-300/30 flex items-center justify-center after:content-['🚏'] after:text-[10px]",
  "4": "bg-amber-900/80 border border-amber-300/30 flex items-center justify-center after:content-['🚏'] after:text-[10px]",
  ".": "bg-slate-900",
};

export const LIGHT_CLASSES: Record<string, string> = {
  red: "bg-[radial-gradient(circle,#ef4444_40%,#0f172a_90%)] !border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.6)]",
  yellow: "bg-[radial-gradient(circle,#f59e0b_40%,#0f172a_90%)] !border-amber-500 shadow-[0_0_15px_rgba(245,158,11,0.6)]",
  green: "bg-[radial-gradient(circle,#10b981_40%,#0f172a_90%)] !border-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.6)]",
};

export const CELL_BASE = "w-4 h-4 rounded-sm transition-all duration-200 relative group hover:scale-[1.4] hover:z-50 hover:shadow-lg hover:shadow-white/20";
