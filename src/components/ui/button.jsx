import React from "react";
import clsx from "clsx";

export const Button = React.forwardRef(
  ({ className, variant = "default", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(
          "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50 disabled:pointer-events-none",
          {
            "bg-primary text-white hover:bg-primary/90": variant === "default",
            "bg-transparent border border-input hover:bg-accent hover:text-accent-foreground": variant === "outline",
            "text-sm py-2 px-3": size === "sm",
            "text-base py-2.5 px-4": size === "md",
            "text-lg py-3 px-6": size === "lg",
          },
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
