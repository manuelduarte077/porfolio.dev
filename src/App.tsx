import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";
import About from "./components/About";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import ProjectModal from "./components/ProjectModal";
import Footer from "./components/Footer";
import { SectionHeader } from "./components/SectionHeader";
import { PROJECTS } from "./constants";
import { useState } from "react";
import { Project } from "@/types";
import { SpeedInsights } from "@vercel/speed-insights/react";

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="bg-bg min-h-screen overflow-x-hidden">
      <SpeedInsights />
      <Navbar />

      <main>
        <Hero />

        <section id="projects" className="scroll-mt-20 px-6 py-32">
          <div className="mx-auto max-w-7xl">
            <SectionHeader titleKey="projects.title" index="/001" />

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
