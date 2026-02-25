import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Article } from '../types';
import { useLanguage } from '../context/LanguageContext';

interface ArticleCardProps {
  article: Article;
  index: number;
  key?: string;
}

export default function ArticleCard({ article, index }: ArticleCardProps) {
  const { t } = useLanguage();

  return (
    <motion.a
      href={article.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group block p-8 glass rounded-2xl hover:border-accent/30 transition-all"
    >
      <div className="flex justify-between items-start mb-6">
        <span className="text-[10px] uppercase tracking-[0.2em] text-muted">
          {article.date} • {article.readTime}
        </span>
        <ArrowRight size={18} className="text-muted group-hover:text-accent group-hover:translate-x-1 transition-all" />
      </div>
      <h3 className="text-xl font-display font-semibold mb-3 leading-tight">
        {t(`article.${article.id}.title`)}
      </h3>
      <p className="text-sm text-muted line-clamp-2">
        {t(`article.${article.id}.description`)}
      </p>
    </motion.a>
  );
}
