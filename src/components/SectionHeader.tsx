import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import type { TranslationKey } from "../locales/types";
import { cn } from "@/components/ui/cn";

type SectionHeaderProps = {
  titleKey: TranslationKey;
  /** Etiqueta visual tipo "/001" (índice de sección). */
  index: string;
  /** Si true, el título se muestra en mayúsculas (p. ej. Skills, Experience). */
  uppercase?: boolean;
  className?: string;
};

/**
 * Cabecera de sección reutilizable: animación Motion + borde inferior + índice.
 */
export function SectionHeader({
  titleKey,
  index,
  uppercase = false,
  className,
}: SectionHeaderProps) {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className={cn(
        "mb-16 flex items-baseline justify-between border-b border-border-main pb-8",
        className,
      )}
    >
      <h2
        className={cn(
          "font-display text-4xl font-bold tracking-tighter md:text-5xl",
          uppercase && "uppercase",
        )}
      >
        {t(titleKey)}
      </h2>
      <span className="font-mono text-xs text-muted">{index}</span>
    </motion.div>
  );
}
