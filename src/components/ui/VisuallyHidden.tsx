import type { ReactNode } from "react";
import { cn } from "./cn";

type VisuallyHiddenProps = {
  children: ReactNode;
  as?: "span" | "div";
  className?: string;
};

export function VisuallyHidden({
  children,
  as: Tag = "span",
  className,
}: VisuallyHiddenProps) {
  return <Tag className={cn("sr-only", className)}>{children}</Tag>;
}
