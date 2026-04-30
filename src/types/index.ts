export type AgentType = 'CarAgent' | 'PedestrianAgent' | 'BusAgent';

export interface Agent {
  id: string;
  x: number;
  y: number;
  type: AgentType;
  has_arrived?: boolean;
  parked?: boolean;
  waiting?: boolean;
  is_boarding?: boolean;
  passenger_count?: number;
  route_id?: string;
}

export interface TrafficLight {
  id: string;
  x: number;
  y: number;
  state: 'red' | 'green' | 'yellow';
  timer: number;
}

export interface SimulationStats {
  tick: number;
  active_cars: number;
  active_peds: number;
  active_buses: number;
  arrived_cars: number;
  arrived_peds: number;
  total_passengers: number;
  active_passengers: number;
  total_frustrated: number;
  crashes: number;
  completed_trips: number;
  bus_occupancy: number;
  safety_retreats: number;
}

export interface SimulationState {
  tick: number;
  running: boolean;
  agents: Agent[];
  traffic_lights: TrafficLight[];
  grid?: string[][];
  grid_width?: number;
  grid_height?: number;
  stats?: SimulationStats;
}

export interface SimulationConfig {
  target_cars: number;
  target_peds: number;
  target_buses: number;
  max_cars: number;
  max_peds: number;
  max_buses: number;
  regenerate_agents: boolean;
}

export interface ApiResponse<T = any> {
  success: boolean;
  message: string;
  code: string;
  data?: T;
  meta?: Record<string, any>;
}

export type CommandType = 'play' | 'pause' | 'step' | 'reset' | 'set_speed' | 'update_config';

export interface Command {
  type: CommandType;
  value?: any;
  config?: Partial<SimulationConfig>;
}
