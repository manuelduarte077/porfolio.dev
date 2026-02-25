import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import ArticleCard from './components/ArticleCard';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import ProjectModal from './components/ProjectModal';
import Footer from './components/Footer';
import { PROJECTS, ARTICLES } from './constants';
import { motion } from 'motion/react';
import { useState } from 'react';
import { Project } from './types';
import { useLanguage } from './context/LanguageContext';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { t } = useLanguage();

  return (
    <div className="bg-bg min-h-screen">
      <Navbar />
      
      <main>
        <Hero />

        {/* Projects Section */}
        <section id="projects" className="py-32 px-6 scroll-mt-20">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-baseline justify-between mb-16 border-b border-border-main pb-8"
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tighter">
                {t('projects.title')}
              </h2>
              <span className="text-xs font-mono text-muted">/001</span>
            </motion.div>

            <div className="flex flex-col">
              {PROJECTS.map((project, i) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  index={i} 
                  onClick={setSelectedProject}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Articles Section
        <section id="articles" className="py-32 px-6 bg-surface/30 scroll-mt-20">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-baseline justify-between mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tighter">
                {t('articles.title')}
              </h2>
              <span className="text-xs font-mono text-muted">/002</span>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ARTICLES.map((article, i) => (
                <ArticleCard key={article.id} article={article} index={i} />
              ))}
            </div>
          </div>
        </section> */}

        {/* Experience Section */}
        <Experience />

        {/* About Section */}
        <About />

        {/* Skills Section */}
        <Skills />
      </main>

      <Footer />
      
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
}

