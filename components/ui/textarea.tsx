import * as React from "react";
import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "flex min-h-[80px] w-full rounded-lg border border-neutral-700 bg-neutral-900/50 px-3 py-2 text-sm text-neutral-200",
        "placeholder:text-neutral-500",
        "hover:border-neutral-600 hover:bg-neutral-800/50",
        "focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500/50",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "resize-none transition-all duration-150",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
