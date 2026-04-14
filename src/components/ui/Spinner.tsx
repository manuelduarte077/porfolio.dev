import { cn } from "./cn";

export type SpinnerSize = "sm" | "md" | "lg";

const sizeMap: Record<SpinnerSize, string> = {
  sm: "h-4 w-4 border-2",
  md: "h-5 w-5 border-2",
  lg: "h-8 w-8 border-[3px]",
};

type SpinnerProps = {
  size?: SpinnerSize;
  className?: string;
  label?: string;
  decorative?: boolean;
};

export function Spinner({
  size = "md",
  className,
  label = "Cargando",
  decorative = false,
}: SpinnerProps) {
  const dot = (
    <span
      className={cn(
        "inline-block animate-spin rounded-full border-muted border-t-accent",
        sizeMap[size],
      )}
      aria-hidden
    />
  );

  if (decorative) {
    return (
      <span className={cn("inline-flex shrink-0", className)} aria-hidden>
        {dot}
      </span>
    );
  }

  return (
    <span
      role="status"
      aria-live="polite"
      aria-label={label === "" ? undefined : label}
      className={cn(
        "inline-flex shrink-0 items-center justify-center",
        className,
      )}
    >
      {dot}
    </span>
  );
}
