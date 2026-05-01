import React, { useMemo } from 'react';
import { Agent as AgentType, TrafficLight } from '../../types';
import { GridCell } from './GridCell';
import { Agent } from './Agent';
import { CELL_SIZE, GAP, STEP } from '../../config/constants';
import { cn } from '@/lib/utils';

interface GridProps {
  grid: string[][];
  agents: AgentType[];
  lights: TrafficLight[];
}

export const SimulationGrid: React.FC<GridProps> = ({ grid, agents, lights }) => {
  const width = grid[0]?.length || 0;
  
  const lightMap = useMemo(() => {
    const map: Record<string, TrafficLight> = {};
    lights.forEach(l => {
      map[`${l.x},${l.y}`] = l;
    });
    return map;
  }, [lights]);

  return (
    <div className="flex justify-start md:justify-center overflow-auto p-4 md:p-6 bg-slate-950 border border-white/5 rounded-3xl shadow-2xl scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-transparent">
      <div className="relative inline-block bg-white/5 p-[1px] rounded-lg shrink-0">
        {/* Background Grid */}
        <div
          className="grid"
          style={{
            gridTemplateColumns: `repeat(${width}, ${CELL_SIZE}px)`,
            gap: `${GAP}px`
          }}
        >
          {grid.map((row, y) =>
            row.map((char, x) => (
              <GridCell 
                key={`${x}-${y}`} 
                x={x} 
                y={y} 
                char={char} 
                light={lightMap[`${x},${y}`]} 
              />
            ))
          )}
        </div>

        {/* Agents Layer */}
        <div className="absolute inset-[1px] pointer-events-none">
          {Array.isArray(agents) && agents.map(agent => (
            <div
              key={agent.id}
              className="absolute transition-all duration-300 ease-in-out"
              style={{
                width: `${CELL_SIZE}px`,
                height: `${CELL_SIZE}px`,
                left: `${(agent.x || 0) * STEP}px`,
                top: `${(agent.y || 0) * STEP}px`,
                zIndex: agent.type === 'BusAgent' ? 20 : 10
              }}
            >
              <Agent agent={agent} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

SimulationGrid.displayName = 'SimulationGrid';
