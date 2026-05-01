import React from 'react';
import { TrafficLight } from '../../types';
import { CELL_BASE, CHAR_CLASS, LIGHT_CLASSES } from '../../config/constants';
import { cn } from '@/lib/utils';

interface GridCellProps {
  x: number;
  y: number;
  char: string;
  light?: TrafficLight;
}

export const GridCell: React.FC<GridCellProps> = React.memo(({ x, y, char, light }) => {
  const baseClass = CHAR_CLASS[char] || "bg-slate-900";
  const lightClass = light ? LIGHT_CLASSES[light.state] : '';

  return (
    <div
      className={cn(CELL_BASE, baseClass, lightClass, "grid-cell-transition")}
      title={`Grid Unit [${x},${y}] | Type: ${char}${light ? ` | Signal: ${light.state.toUpperCase()} (${light.timer}s)` : ''}`}
    />
  );
});

GridCell.displayName = 'GridCell';
