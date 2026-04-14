import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import ProjectModal from "./components/ProjectModal";
import Footer from "./components/Footer";
import { PROJECTS } from "./constants";
import { motion } from "motion/react";
import { useState } from "react";
import { Project } from "./types";
import { useLanguage } from "./context/LanguageContext";
import { SpeedInsights } from "@vercel/speed-insights/react";

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const { t } = useLanguage();

  return (
    <div className="bg-bg min-h-screen overflow-x-hidden">
      <SpeedInsights />
      <Navbar />

      <main>
        <Hero />

        <section id="projects" className="py-32 px-6 scroll-mt-20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-baseline justify-between mb-16 border-b border-border-main pb-8"
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold tracking-tighter">
                {t("projects.title")}
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

        <Experience />

        <About />

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
