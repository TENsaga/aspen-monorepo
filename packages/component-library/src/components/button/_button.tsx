import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "text-neutral-50 py-2 px-4 rounded font-bold cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-1 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-cyan-500 active:bg-cyan-600 dark:bg-cyan-800 active:dark:bg-cyan-900 hover:bg-cyan-500/90 dark:hover:bg-cyan-800/90 shadow-sm",
        destructive:
          "bg-red-500 active:bg-red-600 dark:bg-red-800 active:dark:bg-red-900 hover:bg-red-500/90 dark:hover:bg-red-800/90 shadow-sm",
        ghost:
          "hover:bg-neutral-100 active:bg-neutral-200 hover:text-neutral-900 dark:hover:bg-neutral-900 dark:hover:text-neutral-50 text-neutral-900 dark:text-neutral-50",

        // defaults/TODO below
        default:
          "bg-neutral-900 hover:bg-neutral-900/90 dark:bg-neutral-50 dark:text-neutral-900 dark:hover:bg-neutral-50/90 shadow-sm",
        outline:
          "border border-neutral-200 bg-white hover:bg-neutral-100 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-50",
        secondary:
          "bg-neutral-100 text-neutral-900 hover:bg-neutral-100/80 dark:bg-neutral-800 dark:hover:bg-neutral-800/80",
        link: "text-neutral-900 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
