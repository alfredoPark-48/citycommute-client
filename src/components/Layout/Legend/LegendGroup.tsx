import React from 'react';

interface LegendGroupProps {
  title: string;
  children: React.ReactNode;
}

export const LegendGroup: React.FC<LegendGroupProps> = React.memo(({ title, children }) => (
  <div className="glass-card rounded-3xl p-6 md:p-8">
    <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500 mb-6 px-1">{title}</h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6 md:gap-8">
      {children}
    </div>
  </div>
));

LegendGroup.displayName = 'LegendGroup';
