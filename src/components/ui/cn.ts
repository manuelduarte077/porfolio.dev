export function cn(
  ...parts: Array<string | undefined | null | false | 0>
): string {
  return parts.filter(Boolean).join(" ");
}
