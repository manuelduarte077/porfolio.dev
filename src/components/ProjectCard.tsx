import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { Project } from "../types";
import { useLanguage } from "../context/LanguageContext";
import { projectDescriptionKey } from "../locales/keys";
import { track } from "../lib/analytics";
import { buttonVariants, cn } from "./ui";

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: (project: Project) => void;
  key?: string;
}

export default function ProjectCard({
  project,
  index,
  onClick,
}: ProjectCardProps) {
  const { t } = useLanguage();

  return (
    <motion.div
      role="button"
      tabIndex={0}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ x: 10 }}
      viewport={{ once: true }}
      onClick={() => {
        track("project-viewed", {
          projectId: project.id,
          projectTitle: project.title,
          type: project.type,
        });
        onClick(project);
      }}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          track("project-viewed", {
            projectId: project.id,
            projectTitle: project.title,
            type: project.type,
          });
          onClick(project);
        }
      }}
      aria-label={`${t("project.view")} ${project.title}`}
      transition={{
        delay: index * 0.1,
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="group relative border-b border-border-main py-12 flex flex-col md:flex-row gap-8 md:items-center justify-between hover:bg-accent/2 px-4 transition-all duration-500 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-inset"
    >
      <div className="flex-1">
        <div className="flex items-center gap-3 mb-2">
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="text-[10px] uppercase tracking-widest text-muted border border-border-main px-2 py-0.5 rounded-full"
          >
            {project.type}
          </motion.span>
          <div className="flex gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] text-muted/60 uppercase tracking-tighter"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
        <motion.h3 className="text-3xl md:text-4xl font-display font-medium tracking-tight">
          {project.title}
        </motion.h3>
        <p className="mt-2 max-w-xl text-sm text-muted md:text-base">
          {t(projectDescriptionKey(project.id))}
        </p>

        {project.technologies && (
          <div className="flex flex-wrap gap-2 mt-4">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="text-[10px] font-mono bg-accent/5 text-accent/70 px-2 py-0.5 rounded border border-accent/10 group-hover:border-accent/30 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>

      <div className="flex items-center gap-6">
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              e.stopPropagation();
              track("project-link-live", {
                projectId: project.id,
                projectTitle: project.title,
              });
            }}
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "min-h-0! rounded-full border-border-main py-1.5 font-bold text-muted no-underline hover:border-accent/30 hover:text-accent",
            )}
            aria-label={`${project.title} ${t("modal.live")}`}
          >
            <ExternalLink size={16} className="shrink-0" aria-hidden />
            {t("modal.live")}
          </a>
        )}
        {project.repoLink && (
          <a
            href={project.repoLink}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => {
              e.stopPropagation();
              track("project-link-repo", {
                projectId: project.id,
                projectTitle: project.title,
              });
            }}
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "min-h-0! rounded-full border-border-main py-1.5 font-bold text-muted no-underline hover:border-accent/30 hover:text-accent",
            )}
            aria-label={`${project.title} GitHub Repository`}
          >
            <Github size={16} className="shrink-0" aria-hidden />
            {t("modal.repo")}
          </a>
        )}
      </div>
    </motion.div>
  );
}
