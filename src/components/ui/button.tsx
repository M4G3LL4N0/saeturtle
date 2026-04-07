import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-normal transition-all disabled:pointer-events-none disabled:opacity-50 focus-visible:border-[1.5px] focus-visible:border-foreground/15",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-br from-[#ff7e5f]/95 to-[#feb47b]/95 text-primary-foreground hover:from-[#ff7e5f] hover:to-[#feb47b] transition-all hover:scale-[1.02]",
        destructive:
          "bg-gradient-to-br from-[#ff4444] to-[#ff6b6b] text-white shadow-md hover:from-[#ff5555] hover:to-[#ff7a7a] hover:shadow-destructive/20 hover:translate-y-[-1px] transition-all",
        outline:
          "border border-white/15 bg-white/5 text-white shadow-sm hover:bg-white/10 hover:text-white backdrop-blur-lg transition-all",
        secondary:
          "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/90",
        ghost: "hover:bg-white/10 hover:text-white",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        xl: "h-12 rounded-full px-10 text-base",
        icon: "h-9 w-9",
        "icon-sm": "h-8 w-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)

Button.displayName = "Button"

export { Button, buttonVariants }
