import React from "react";

export function Card({ className, ...props }) {
  return (
    <div
      className={`rounded-xl border bg-white text-card-foreground shadow ${className}`}
      {...props}
    />
  );
}

export function CardHeader({ className, ...props }) {
  return (
    <div className={`p-6 ${className}`} {...props} />
  );
}

export function CardTitle({ className, ...props }) {
  return (
    <h3 className={`text-lg font-semibold leading-none tracking-tight ${className}`} {...props} />
  );
}

export function CardDescription({ className, ...props }) {
  return (
    <p className={`text-sm text-muted-foreground ${className}`} {...props} />
  );
}

export function CardContent({ className, ...props }) {
  return (
    <div className={`p-6 pt-0 ${className}`} {...props} />
  );
}
