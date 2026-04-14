import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";
import type { TranslationKey } from "../locales/types";
import {
  getTechnicalSkillIcon,
  technicalSkillsContent,
} from "../content/technicalSkills";
import { SectionHeader } from "./SectionHeader";

const softSkillKeys = [
  "skills.soft.problemSolving",
  "skills.soft.teamLeadership",
  "skills.soft.cleanArchitecture",
  "skills.soft.agile",
  "skills.soft.technicalWriting",
  "skills.soft.mentoring",
] as const satisfies readonly TranslationKey[];

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="scroll-mt-20 bg-surface/30 px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader titleKey="skills.title" index="/004" uppercase />

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h3 className="text-xs uppercase tracking-widest text-muted mb-8 font-bold">
              {t("skills.technical")}
            </h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {technicalSkillsContent.map((skill, i) => {
                const Icon = getTechnicalSkillIcon(skill.iconId);
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group flex items-center gap-4 rounded-2xl border border-border-main bg-bg p-6 transition-colors hover:border-accent/30"
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + 0.2, duration: 0.5 }}
                      className="rounded-xl bg-accent/5 p-3 text-accent transition-colors group-hover:bg-accent group-hover:text-bg"
                    >
                      <Icon size={24} aria-hidden />
                    </motion.div>
                    <div>
                      <h4 className="font-display font-bold text-lg">
                        {skill.name}
                      </h4>
                      <p className="text-xs text-muted uppercase tracking-tighter">
                        {skill.category}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-12 p-8 rounded-3xl border border-dashed border-border-main bg-accent/1">
              <p className="text-muted leading-relaxed italic">
                "{t("skills.quote")}"
              </p>
            </div>
          </div>

          <div className="lg:col-span-4">
            <h3 className="text-xs uppercase tracking-widest text-muted mb-8 font-bold">
              {t("skills.soft")}
            </h3>
            <div className="flex flex-wrap gap-3">
              {softSkillKeys.map((key, i) => (
                <motion.span
                  key={key}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="cursor-default rounded-full border border-border-main px-4 py-2 text-sm text-muted transition-all hover:bg-accent hover:text-bg"
                >
                  {t(key)}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
