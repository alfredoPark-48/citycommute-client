import * as React from "react"
import { Switch as SwitchPrimitive } from "@base-ui/react/switch"
import { cn } from "@/lib/utils"

export interface SwitchProps extends SwitchPrimitive.Root.Props {
  label?: string;
  description?: string;
}

const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  ({ className, label, description, ...props }, ref) => {
    return (
      <div className="flex items-center justify-between w-full group">
        {(label || description) && (
          <div className="space-y-1">
            {label && <div className="text-sm font-bold uppercase tracking-wider text-slate-300 group-hover:text-slate-100 transition-colors">{label}</div>}
            {description && <div className="text-xs text-slate-500 leading-tight group-hover:text-slate-400 transition-colors">{description}</div>}
          </div>
        )}
        <SwitchPrimitive.Root
          ref={ref}
          className={cn(
            "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-sky-600 data-[state=unchecked]:bg-slate-700",
            className
          )}
          {...props}
        >
          <SwitchPrimitive.Thumb className="pointer-events-none block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform duration-300 data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0" />
        </SwitchPrimitive.Root>
      </div>
    );
  }
);

Switch.displayName = "Switch";

export { Switch };
