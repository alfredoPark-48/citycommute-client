import React from 'react';
import { cn } from '@/lib/utils';

interface LegendItemProps {
  swatch: React.ReactNode;
  label: string;
}

export const LegendItem: React.FC<LegendItemProps> = React.memo(({ swatch, label }) => (
  <div className="flex items-center gap-3 transition-colors hover:bg-white/5 p-1 rounded-lg">
    <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
      {typeof swatch === 'string' ? <span className="text-[20px]">{swatch}</span> : swatch}
    </div>
    <span className="text-sm font-medium text-slate-400 truncate">{label}</span>
  </div>
));

LegendItem.displayName = 'LegendItem';
