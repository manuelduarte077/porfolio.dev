import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { EXPERIENCES } from '../constants';

export default function Experience() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-32 px-6 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex items-baseline justify-between mb-16 border-b border-border-main pb-8"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tighter uppercase">
            {t('experience.title')}
          </h2>
          <span className="text-xs font-mono text-muted">/003</span>
        </motion.div>

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
                <span className="text-xs md:text-sm font-mono text-muted/80">{exp.period}</span>
              </div>
              <div className="md:col-span-9">
                <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4 gap-1">
                  <h3 className="text-xl md:text-2xl font-display font-bold group-hover:text-accent transition-colors">
                    {exp.position}
                  </h3>
                  <span className="text-base md:text-lg text-muted font-medium">{exp.company}</span>
                </div>
                <p className="text-muted text-base md:text-lg leading-relaxed mb-6">
                  {t(`experience.${exp.id}.description`)}
                </p>
                {exp.technologies && (
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map(tech => (
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
