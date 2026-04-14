import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { SectionHeader } from "./SectionHeader";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="scroll-mt-20 px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader titleKey="about.title" index="/003" />

        <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="relative aspect-4/5 rounded-2xl overflow-hidden glass group">
              <img
                src="/profile.png"
                alt="Manuel Duarte (Don Manuel), Software Engineer — Managua, Nicaragua"
                width={768}
                height={1024}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-accent/10 group-hover:bg-transparent transition-colors" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-display font-semibold tracking-tight">
                {t("about.greeting")}
              </h3>
              <p className="text-base md:text-lg text-muted leading-relaxed">
                {t("about.p1")}
              </p>
              <p className="text-base md:text-lg text-muted leading-relaxed">
                {t("about.p2")}
              </p>
            </div>

            <div className="pt-8 border-t border-border-main">
              <h4 className="text-xs uppercase tracking-widest text-muted mb-6">
                {t("about.aspirations")}
              </h4>
              <ul className="space-y-4">
                {[
                  t("about.a1"),
                  t("about.a2"),
                  t("about.a3"),
                  t("about.a4"),
                ].map((aspiration, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <span className="text-accent font-mono text-sm">
                      0{i + 1}.
                    </span>
                    <p className="text-muted">{aspiration}</p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
