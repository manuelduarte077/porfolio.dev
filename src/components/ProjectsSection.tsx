import { SectionHeader } from "./SectionHeader";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "../constants";
import type { Project } from "@/types";

type ProjectsSectionProps = {
  onProjectClick: (project: Project) => void;
};

export default function ProjectsSection({ onProjectClick }: ProjectsSectionProps) {
  return (
    <section id="projects" className="scroll-mt-20 px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <SectionHeader titleKey="projects.title" index="/001" />

        <div className="flex flex-col">
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onClick={onProjectClick}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
