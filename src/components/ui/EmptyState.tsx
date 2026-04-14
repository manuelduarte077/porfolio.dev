import type { LucideIcon } from "lucide-react";
import { useId, type ReactNode } from "react";
import { cn } from "./cn";

export type EmptyStateTone = "neutral" | "error";

type EmptyStateProps = {
  title: string;
  description?: string;
  icon?: LucideIcon;
  action?: ReactNode;
  tone?: EmptyStateTone;
  className?: string;
};

export function EmptyState({
  title,
  description,
  icon: Icon,
  action,
  tone = "neutral",
  className,
}: EmptyStateProps) {
  const titleId = useId();
  const isError = tone === "error";

  return (
    <div
      role="status"
      aria-labelledby={titleId}
      aria-live={isError ? "polite" : undefined}
      className={cn(
        "flex w-full max-w-md flex-col items-center justify-center gap-4 rounded-2xl border border-border-main bg-surface/40 px-6 py-12 text-center sm:px-10",
        isError && "border-red-500/30 bg-red-500/5 dark:bg-red-500/10",
        className,
      )}
    >
      {Icon ? (
        <span
          className={cn(
            "flex h-14 w-14 items-center justify-center rounded-full border border-border-main bg-bg/80",
            isError && "border-red-500/40 text-red-600 dark:text-red-400",
          )}
          aria-hidden
        >
          <Icon className="h-7 w-7" strokeWidth={1.5} />
        </span>
      ) : null}
      <div className="space-y-2">
        <p
          id={titleId}
          className="font-display text-xl font-bold tracking-tight text-accent sm:text-2xl"
        >
          {title}
        </p>
        {description ? (
          <p className="text-pretty text-sm leading-relaxed text-muted sm:text-base">
            {description}
          </p>
        ) : null}
      </div>
      {action ? (
        <div className="mt-2 flex w-full flex-col items-stretch gap-2 sm:w-auto sm:flex-row sm:justify-center">
          {action}
        </div>
      ) : null}
    </div>
  );
}
