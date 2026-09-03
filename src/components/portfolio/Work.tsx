import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import { projects, type Project } from "@/data/portfolio";
import { ProjectShowcase } from "./ProjectShowcase";
import { SectionLabel } from "./Reveal";

function ProjectDialog({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={project.name}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground/25 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.98 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[88vh] w-full max-w-3xl overflow-y-auto bg-card p-6 md:p-10"
      >
        <button
          onClick={onClose}
          aria-label="Close project"
          className="absolute right-4 top-4 text-muted-foreground transition-colors hover:text-foreground"
        >
          <X className="size-5" />
        </button>

        <div className="flex items-baseline gap-4">
          <span className="label-accent">{project.index}</span>
          <span className="label-xs">{project.category}</span>
        </div>
        <h3 className="display mt-3 text-4xl md:text-5xl">{project.name}</h3>
        <p className="mt-3 text-sm text-muted-foreground">{project.description}</p>

        <img
          src={project.image}
          alt={`${project.name} interface visual`}
          loading="lazy"
          width={1400}
          height={1000}
          className="mt-8 w-full bg-ivory-deep/60 object-cover"
        />

        <div className="mt-8">
          <p className="label-xs">Technology</p>
          <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
            {project.tech.map((t) => (
              <li key={t} className="text-sm text-foreground">
                {t}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="border border-foreground/25 px-5 py-3 transition-colors hover:border-accent hover:text-accent"
            >
              <span className="label-xs text-inherit">GitHub</span>
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noreferrer"
              className="border border-foreground/25 px-5 py-3 transition-colors hover:border-accent hover:text-accent"
            >
              <span className="label-xs text-inherit">Live Demo</span>
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Work() {
  const [open, setOpen] = useState<Project | null>(null);

  return (
    <section id="work" className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-36">
      <SectionLabel index="03" title="Selected Work" />

      <div className="space-y-32 md:space-y-44">
        {projects.map((p) => (
          <ProjectShowcase key={p.name} project={p} onOpen={() => setOpen(p)} />
        ))}
      </div>

      <AnimatePresence>
        {open && <ProjectDialog project={open} onClose={() => setOpen(null)} />}
      </AnimatePresence>
    </section>
  );
}
