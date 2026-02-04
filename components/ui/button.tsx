import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-b from-amber-500 to-amber-600 text-black shadow-[0_1px_0_0_rgba(255,255,255,0.2)_inset,0_-1px_0_0_rgba(0,0,0,0.2)_inset] hover:from-amber-400 hover:to-amber-500 active:from-amber-600 active:to-amber-700",
        destructive:
          "bg-gradient-to-b from-red-600 to-red-700 text-white shadow-[0_1px_0_0_rgba(255,255,255,0.1)_inset] hover:from-red-500 hover:to-red-600",
        outline:
          "border border-neutral-700 bg-transparent text-neutral-300 hover:bg-neutral-800 hover:text-white hover:border-neutral-600",
        secondary:
          "bg-neutral-800 text-neutral-200 hover:bg-neutral-700 border border-neutral-700",
        ghost:
          "text-neutral-400 hover:text-white hover:bg-neutral-800/50",
        link: "text-amber-500 underline-offset-4 hover:underline hover:text-amber-400",
      },
      size: {
        default: "h-10 px-4 py-2 rounded-lg",
        sm: "h-8 px-3 text-xs rounded-md",
        lg: "h-12 px-8 text-base rounded-xl",
        icon: "h-10 w-10 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
