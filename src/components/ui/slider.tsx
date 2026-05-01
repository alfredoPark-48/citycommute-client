import * as React from "react"
import { cn } from "@/lib/utils"

export interface SliderProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  value: number;
  onValueChange?: (value: number) => void;
  accentColor?: string;
}

const Slider = React.forwardRef<HTMLInputElement, SliderProps>(
  ({ className, label, value, onValueChange, accentColor = "sky", ...props }, ref) => {
    return (
      <div className="flex flex-col gap-3 w-full group">
        {label && (
          <div className="flex justify-between items-center text-sm font-bold uppercase tracking-wider text-slate-300">
            <span>{label}</span>
            <span className={`bg-${accentColor}-500/10 text-${accentColor}-400 px-2 py-0.5 rounded-md font-mono text-xs border border-${accentColor}-500/20`}>
              {value}
            </span>
          </div>
        )}
        <input
          type="range"
          ref={ref}
          value={value}
          onChange={(e) => onValueChange?.(parseInt(e.target.value))}
          className={cn(
            "w-full cursor-pointer h-1.5 bg-slate-700/50 rounded-lg appearance-none transition-all",
            "focus:outline-none focus:ring-2 focus:ring-slate-400/20",
            "[&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:shadow-lg [&::-webkit-slider-thumb]:ring-2 [&::-webkit-slider-thumb]:ring-offset-1 [&::-webkit-slider-thumb]:ring-offset-slate-900",
            accentColor === "sky" && "[&::-webkit-slider-thumb]:ring-sky-500",
            accentColor === "emerald" && "[&::-webkit-slider-thumb]:ring-emerald-500",
            accentColor === "purple" && "[&::-webkit-slider-thumb]:ring-purple-500",
            accentColor === "amber" && "[&::-webkit-slider-thumb]:ring-amber-500",
            "[&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:shadow-lg",
            className
          )}
          {...props}
        />
      </div>
    )
  }
)
Slider.displayName = "Slider"

export { Slider }
