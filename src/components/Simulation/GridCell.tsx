import React from 'react';
import { TrafficLight } from '../../types';
import { CELL_BASE, CHAR_CLASS, LIGHT_CLASSES } from '../../config/constants';

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
      className={`${CELL_BASE} ${baseClass} ${lightClass}`}
      title={`(${x},${y}) ${char}${light ? ` | 🚦 ${light.state.toUpperCase()} (${light.timer})` : ''}`}
    />
  );
});

GridCell.displayName = 'GridCell';
