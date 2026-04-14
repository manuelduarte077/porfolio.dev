import type { ReactNode } from "react";
import { cn } from "./cn";
import { Skeleton } from "./Skeleton";
import { Spinner } from "./Spinner";

type LoadingBlockProps = {
  children: ReactNode;
  loading: boolean;
  loadingLabel?: string;
  variant?: "default" | "card" | "list";
  className?: string;
};

export function LoadingBlock({
  children,
  loading,
  loadingLabel = "Cargando contenido",
  variant = "default",
  className,
}: LoadingBlockProps) {
  return (
    <div
      className={cn("relative min-h-16 w-full", className)}
      aria-busy={loading || undefined}
      aria-live="polite"
    >
      {loading ? (
        <>
          <div className="flex flex-col items-center justify-center gap-6 py-8">
            <Spinner size="lg" label={loadingLabel} />
            {variant === "default" && (
              <div className="w-full max-w-sm space-y-3">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
              </div>
            )}
            {variant === "card" && (
              <div className="w-full max-w-md space-y-4 rounded-2xl border border-border-main p-6">
                <Skeleton className="h-40 w-full rounded-xl" />
                <Skeleton className="h-5 w-2/3" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-4/5" />
              </div>
            )}
            {variant === "list" && (
              <ul className="w-full max-w-lg space-y-4" role="presentation">
                {[1, 2, 3].map((i) => (
                  <li key={i} className="flex gap-4">
                    <Skeleton className="h-12 w-12 shrink-0 rounded-lg" />
                    <div className="flex-1 space-y-2 pt-1">
                      <Skeleton className="h-4 w-1/2" />
                      <Skeleton className="h-3 w-full" />
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </>
      ) : (
        children
      )}
    </div>
  );
}
