import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "./cn";
import { Spinner } from "./Spinner";
import { VisuallyHidden } from "./VisuallyHidden";
import {
  buttonVariants,
  type ButtonSize,
  type ButtonVariant,
} from "./button-variants";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  fullWidth?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      className,
      variant = "primary",
      size = "md",
      loading = false,
      fullWidth = false,
      disabled,
      leftIcon,
      rightIcon,
      children,
      type = "button",
      ...rest
    },
    ref,
  ) {
    const isDisabled = Boolean(disabled || loading);

    return (
      <button
        ref={ref}
        type={type}
        disabled={isDisabled}
        aria-busy={loading || undefined}
        aria-disabled={isDisabled || undefined}
        className={cn(
          buttonVariants({ variant, size, fullWidth }),
          loading && "relative",
          className,
        )}
        {...rest}
      >
        {loading && (
          <>
            <span
              aria-hidden
              className="absolute inset-0 flex items-center justify-center"
            >
              <Spinner decorative size={size === "lg" ? "md" : "sm"} />
            </span>
            <VisuallyHidden>Cargando</VisuallyHidden>
          </>
        )}
        <span
          className={cn(
            "inline-flex items-center justify-center gap-2",
            loading && "invisible",
          )}
        >
          {leftIcon && !loading ? (
            <span className="shrink-0 [&_svg]:size-[1.1em]" aria-hidden>
              {leftIcon}
            </span>
          ) : null}
          {children}
          {rightIcon && !loading ? (
            <span className="shrink-0 [&_svg]:size-[1.1em]" aria-hidden>
              {rightIcon}
            </span>
          ) : null}
        </span>
      </button>
    );
  },
);
