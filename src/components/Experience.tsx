import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import { experienceDescriptionKey } from "../locales/keys";
import { EXPERIENCES } from "../constants";
import { SectionHeader } from "./SectionHeader";

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="scroll-mt-20 px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader titleKey="experience.title" index="/002" uppercase />

        <div className="space-y-12">
          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 group"
            >
              <div className="md:col-span-3">
                <span className="text-xs md:text-sm font-mono text-muted/80">
                  {exp.period}
                </span>
              </div>
              <div className="md:col-span-9">
                <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4 gap-1">
                  <h3 className="text-xl md:text-2xl font-display font-bold group-hover:text-accent transition-colors">
                    {exp.position}
                  </h3>
                  <span className="text-base md:text-lg text-muted font-medium">
                    {exp.company}
                  </span>
                </div>
                <p className="mb-6 text-base leading-relaxed text-muted md:text-lg">
                  {t(experienceDescriptionKey(exp.id))}
                </p>
                {exp.technologies && (
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono border border-border-main px-2 py-1 rounded uppercase tracking-widest text-muted/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
