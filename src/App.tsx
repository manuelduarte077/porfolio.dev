import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { lazy, Suspense, useState } from "react";
import { Project } from "@/types";

const ProjectsSection = lazy(() => import("./components/ProjectsSection"));
const Experience = lazy(() => import("./components/Experience"));
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Footer = lazy(() => import("./components/Footer"));
const ProjectModal = lazy(() => import("./components/ProjectModal"));
const SpeedInsights = lazy(() =>
  import("@vercel/speed-insights/react").then((m) => ({
    default: m.SpeedInsights,
  })),
);

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="bg-bg min-h-screen overflow-x-hidden">
      <Suspense fallback={null}>
        <SpeedInsights />
      </Suspense>
      <Navbar />

      <main>
        <Hero />

        <Suspense fallback={null}>
          <ProjectsSection onProjectClick={setSelectedProject} />
        </Suspense>

        <Suspense fallback={null}>
          <Experience />
        </Suspense>

        <Suspense fallback={null}>
          <About />
        </Suspense>

        <Suspense fallback={null}>
          <Skills />
        </Suspense>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>

      <Suspense fallback={null}>
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </Suspense>
    </div>
  );
}
