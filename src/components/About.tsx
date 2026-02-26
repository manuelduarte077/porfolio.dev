import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-32 px-6 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-baseline justify-between mb-16 border-b border-border-main pb-8"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tighter">
            {t("about.title")}
          </h2>
          <span className="text-xs font-mono text-muted">/004</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Photo Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden glass group">
              <img
                src="https://picsum.photos/seed/manuel-dev/800/1000"
                alt="Don Manuel Professional Portrait"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-accent/10 group-hover:bg-transparent transition-colors" />
            </div>
          </motion.div>

          {/* Content Column */}
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
