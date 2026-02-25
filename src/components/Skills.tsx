import { motion } from 'motion/react';
import { Smartphone, Server, Database, Code2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Skills() {
  const { t } = useLanguage();

  const technicalSkills = [
    { name: 'Android / Kotlin / Java', icon: Smartphone, category: 'Mobile' },
    { name: 'iOS / Swift', icon: Smartphone, category: 'Mobile' },
    { name: 'C# / .NET / Ktor', icon: Server, category: 'Backend' },
    { name: 'PostgreSQL / SQLServer / MongoDB', icon: Database, category: 'Database' },
    { name: 'Azure, Docker, CI/CD', icon: Code2, category: 'DevOps' }
  ];

  const softSkills = [
    { key: 'skills.soft.problemSolving' },
    { key: 'skills.soft.teamLeadership' },
    { key: 'skills.soft.cleanArchitecture' },
    { key: 'skills.soft.agile' },
    { key: 'skills.soft.technicalWriting' },
    { key: 'skills.soft.mentoring' }
  ];

  return (
    <section id="skills" className="py-32 px-6 bg-surface/30 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-baseline justify-between mb-16 border-b border-border-main pb-8"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tighter uppercase">
            {t('skills.title')}
          </h2>
          <span className="text-xs font-mono text-muted">/005</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Technical Skills */}
          <div className="lg:col-span-8">
            <h3 className="text-xs uppercase tracking-widest text-muted mb-8 font-bold">{t('skills.technical')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {technicalSkills.map((skill, i) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-4 p-6 rounded-2xl bg-bg border border-border-main hover:border-accent/30 transition-colors group"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (i * 0.1) + 0.2, duration: 0.5 }}
                    className="p-3 rounded-xl bg-accent/5 text-accent group-hover:bg-accent group-hover:text-bg transition-colors"
                  >
                    <skill.icon size={24} />
                  </motion.div>
                  <div>
                    <h4 className="font-display font-bold text-lg">{skill.name}</h4>
                    <p className="text-xs text-muted uppercase tracking-tighter">{skill.category}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-12 p-8 rounded-3xl border border-dashed border-border-main bg-accent/[0.01]">
              <p className="text-muted leading-relaxed italic">
                "{t('skills.quote')}"
              </p>
            </div>
          </div>

          {/* Soft Skills */}
          <div className="lg:col-span-4">
            <h3 className="text-xs uppercase tracking-widest text-muted mb-8 font-bold">{t('skills.soft')}</h3>
            <div className="flex flex-wrap gap-3">
              {softSkills.map((skill, i) => (
                <motion.span
                  key={skill.key}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="px-4 py-2 rounded-full border border-border-main text-sm text-muted hover:bg-accent hover:text-bg transition-all cursor-default"
                >
                  {t(skill.key)}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
