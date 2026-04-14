import type { HTMLAttributes } from "react";
import { cn } from "./cn";
  
type SkeletonProps = HTMLAttributes<HTMLDivElement> & {
  className?: string;
  "aria-busy"?: boolean;
};

export function Skeleton({
  className,
  "aria-busy": ariaBusy,
  ...rest
}: SkeletonProps) {
  return (
    <div
      role="presentation"
      aria-hidden={ariaBusy === undefined ? true : undefined}
      aria-busy={ariaBusy}
      className={cn(
        "animate-pulse rounded-md bg-accent/10 dark:bg-accent/15",
        className,
      )}
      {...rest}
    />
  );
}
