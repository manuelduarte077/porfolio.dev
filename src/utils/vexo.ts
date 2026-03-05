declare global {
  interface Window {
    vexo?: { customEvent: (name: string, params?: object) => void };
  }
}

export function trackCustomEvent(
  name: string,
  params?: Record<string, string | number | boolean>
): void {
  try {
    window?.vexo?.customEvent(name, params ?? {});
  } catch {
    // Vexo script may not be loaded (e.g. dev); ignore
  }
}
