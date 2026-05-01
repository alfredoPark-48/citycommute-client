import React from 'react';
import { Agent as AgentType } from '../../types';

interface AgentProps {
  agent: AgentType;
}

export const Agent: React.FC<AgentProps> = React.memo(({ agent }) => {
  let content = "";
  let extraClasses = "";

  if (agent.type === "CarAgent") {
    content = "🚗";
    if (agent.waiting) extraClasses = "opacity-80";
  } else if (agent.type === "PedestrianAgent") {
    content = "🧍‍♂️";
    if (agent.is_boarding) extraClasses = "animate-boarding-scale scale-75";
    else if (agent.waiting) extraClasses = "opacity-80";
  } else if (agent.type === "BusAgent") {
    content = "🚌";
    const rid = agent.route_id || "1";
    const colors: Record<string, string> = {
      "1": "bg-rose-500 shadow-rose-500/50",
      "2": "bg-purple-500 shadow-purple-500/50",
      "3": "bg-emerald-500 shadow-emerald-500/50",
      "4": "bg-amber-500 shadow-amber-500/50",
    };
    extraClasses = `${colors[rid]} rounded-md border border-white z-10 ${agent.waiting ? 'shadow-[0_0_15px] scale-110' : 'shadow-md'}`;
  }

  return (
    <div className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-all duration-300 ${extraClasses}`}>
      <span className="text-[12px] leading-none drop-shadow-sm">{content}</span>
      {agent.waiting && <span className="absolute text-[10px] -top-1 -right-1 animate-breathe">⏳</span>}
    </div>
  );
});

Agent.displayName = 'Agent';
