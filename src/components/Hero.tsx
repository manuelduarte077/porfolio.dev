import { motion } from 'motion/react';
import { ArrowDownRight, FileText } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center px-6 pt-20">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-xs uppercase tracking-[0.3em] text-muted mb-4 block">
            {t('hero.subtitle')}
          </span>
          <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter leading-[0.9] mb-8">
            {t('hero.title1')} <br />
            <span className="text-muted">{t('hero.title2')}</span> <br />
            {t('hero.title3')}
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
              {t('hero.description')}
            </p>
            
            <div className="flex flex-wrap gap-6">
              <a 
                href="/resume.pdf" 
                download
                className="flex items-center gap-2 px-6 py-3 bg-accent text-bg rounded-full text-xs uppercase tracking-widest font-bold hover:opacity-90 transition-opacity"
              >
                <FileText size={16} />
                {t('hero.resume')}
              </a>
              
              <a 
                href="#projects"
                className="group flex items-center gap-2 text-sm font-medium uppercase tracking-widest hover:text-muted transition-colors self-center"
              >
                {t('hero.explore')}
                <ArrowDownRight className="group-hover:translate-x-1 group-hover:translate-y-1 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
