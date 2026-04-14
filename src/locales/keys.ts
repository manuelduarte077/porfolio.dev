import type { TranslationKey } from "./types";

/** Claves dinámicas alineadas con `constants` y `locales`. */
export function projectDescriptionKey(projectId: string): TranslationKey {
  return `project.${projectId}.description` as TranslationKey;
}

export function projectLongDescriptionKey(projectId: string): TranslationKey {
  return `project.${projectId}.longDescription` as TranslationKey;
}

export function experienceDescriptionKey(experienceId: string): TranslationKey {
  return `experience.${experienceId}.description` as TranslationKey;
}
