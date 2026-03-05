import { motion, AnimatePresence } from "motion/react";
import { X, ExternalLink, Github, Code2 } from "lucide-react";
import { Project } from "../types";
import { useLanguage } from "../context/LanguageContext";
import { trackCustomEvent } from "../utils/vexo";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { t } = useLanguage();

  return (
    <AnimatePresence>
      {project ? (
        <div
          key={project.id}
          className="fixed inset-0 z-100 flex items-center justify-center p-4 md:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          onKeyDown={(e) => {
            if (e.key === "Escape") onClose();
          }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-bg/80 backdrop-blur-md"
            aria-hidden="true"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-surface border border-border-main rounded-2xl md:rounded-3xl shadow-2xl focus:outline-none text-accent"
            tabIndex={-1}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-full bg-bg/50 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none hover:bg-accent/10 text-muted hover:text-accent transition-colors z-10 focus-visible:ring-2 focus-visible:ring-accent"
              aria-label="Close modal"
              autoFocus
            >
              <X size={24} />
            </button>

            <div className="p-6 md:p-12">
              <div className="flex flex-wrap items-center gap-3 mb-4 md:mb-6">
                <span className="text-[10px] uppercase tracking-widest text-accent border border-accent/30 px-3 py-1 rounded-full font-bold">
                  {project.type}
                </span>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] text-muted/60 uppercase tracking-tighter"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <h2
                id="modal-title"
                className="text-3xl md:text-6xl font-display font-bold tracking-tighter mb-6 md:mb-8 pr-12 text-accent"
              >
                {project.title}
              </h2>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
                <div className="lg:col-span-7 space-y-8">
                  <div>
                    <h3 className="text-xs uppercase tracking-widest text-muted mb-4 font-bold">
                      {t("modal.overview")}
                    </h3>
                    <p className="text-lg text-muted leading-relaxed">
                      {t(`project.${project.id}.longDescription`)}
                    </p>
                  </div>

                  {project.technologies && (
                    <div>
                      <h3 className="text-xs uppercase tracking-widest text-muted mb-4 font-bold">
                        {t("modal.stack")}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <div
                            key={tech}
                            className="flex items-center gap-2 bg-accent/5 border border-border-main px-4 py-2 rounded-xl text-sm text-muted"
                          >
                            <Code2 size={14} className="text-accent" />
                            {tech}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="lg:col-span-5 space-y-6">
                  {(project.link || project.repoLink) && (
                    <div className="p-6 rounded-2xl bg-bg/50 border border-border-main space-y-6">
                      <h3 className="text-xs uppercase tracking-widest text-muted font-bold">
                        {t("modal.links")}
                      </h3>

                      <div className="flex flex-col gap-3">
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() =>
                              trackCustomEvent("project-link-live", {
                                projectId: project.id,
                                projectTitle: project.title,
                              })
                            }
                            className="flex items-center justify-between p-4 rounded-xl font-semibold bg-accent text-bg hover:opacity-90 transition-opacity"
                          >
                            {t("modal.live")}{" "}
                            <ExternalLink size={18} className="shrink-0" />
                          </a>
                        )}

                        {project.repoLink && (
                          <a
                            href={project.repoLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() =>
                              trackCustomEvent("project-link-repo", {
                                projectId: project.id,
                                projectTitle: project.title,
                              })
                            }
                            className="flex items-center justify-between p-4 rounded-xl bg-surface border border-border-main hover:bg-accent/10 text-accent transition-colors font-semibold"
                          >
                            {t("modal.repo")}{" "}
                            <Github size={18} className="shrink-0 text-muted" />
                          </a>
                        )}
                      </div>
                    </div>
                  )}

                  <div className="aspect-video rounded-2xl overflow-hidden border border-border-main">
                    <img
                      src={`https://picsum.photos/seed/${project.id}/800/450`}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  );
}
