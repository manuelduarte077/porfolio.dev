import { motion } from "motion/react";
import { ArrowDownRight, FileText } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { track } from "../lib/analytics";
import { buttonVariants, cn } from "./ui";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center px-6 pt-20"
    >
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-muted mb-4 block">
            {t("hero.subtitle")}
          </span>
          <h1 className="mb-8">
            <span className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold tracking-tight text-accent mb-2">
              {t("hero.h1Name")}
            </span>
            <span className="block text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-muted mb-6">
              {t("hero.h1Location")}
            </span>
            <span className="block text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter leading-[0.9]">
              {t("hero.title1")} <br />
              <span className="text-muted">{t("hero.title2")}</span> <br />
              {t("hero.title3")}
            </span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div className="space-y-8">
            <p className="max-w-md text-lg text-muted leading-relaxed">
              {t("hero.description")}
            </p>

            <div className="flex flex-wrap items-center gap-4 md:gap-6">
              <a
                href="/CV-Manuel-Duarte.pdf"
                download="CV-Manuel-Duarte.pdf"
                onClick={() => track("cv-download")}
                className={cn(
                  buttonVariants({ variant: "primary", size: "md" }),
                  "inline-flex gap-2 no-underline",
                )}
              >
                <FileText size={16} className="shrink-0" aria-hidden />
                {t("hero.resume")}
              </a>

              <a
                href="#projects"
                onClick={() => track("cta-explore-projects")}
                className={cn(
                  buttonVariants({ variant: "ghost", size: "sm" }),
                  "group inline-flex gap-2 self-center min-h-0! font-medium text-muted hover:text-accent",
                )}
              >
                {t("hero.explore")}
                <ArrowDownRight
                  className="shrink-0 transition-transform group-hover:translate-x-1 group-hover:translate-y-1"
                  size={18}
                  aria-hidden
                />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
