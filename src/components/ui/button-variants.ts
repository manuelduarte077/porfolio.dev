import { cn } from "./cn";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "danger";
export type ButtonSize = "sm" | "md" | "lg";

const variantClass: Record<ButtonVariant, string> = {
  primary:
    "bg-accent text-bg hover:opacity-90 focus-visible:ring-accent/40 shadow-sm",
  secondary:
    "bg-surface text-accent border border-border-main hover:bg-accent/5 focus-visible:ring-accent/30",
  outline:
    "border border-border-main bg-transparent text-accent hover:border-accent/40 hover:bg-accent/5 focus-visible:ring-accent/30",
  ghost:
    "bg-transparent text-accent hover:bg-accent/10 focus-visible:ring-accent/25",
  danger:
    "bg-red-600 text-white hover:bg-red-700 focus-visible:ring-red-500/50 dark:bg-red-700 dark:hover:bg-red-600",
};

const sizeClass: Record<ButtonSize, string> = {
  sm: "min-h-9 px-3 text-xs gap-1.5 rounded-lg",
  md: "min-h-11 px-5 text-sm gap-2 rounded-full",
  lg: "min-h-12 px-7 text-base gap-2.5 rounded-full",
};

const baseClass =
  "inline-flex items-center justify-center font-semibold uppercase tracking-widest transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-50";

export type ButtonStyleProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
};

export function buttonVariants({
  variant = "primary",
  size = "md",
  fullWidth = false,
}: ButtonStyleProps = {}): string {
  return cn(
    baseClass,
    variantClass[variant],
    sizeClass[size],
    fullWidth && "w-full",
  );
}
