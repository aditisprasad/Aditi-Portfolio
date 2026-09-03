import { motion, useReducedMotion } from "motion/react";
import { useRef, useState } from "react";
import type { Project } from "@/data/portfolio";
import { Reveal } from "./Reveal";

function Visual({ project, onOpen }: { project: Project; onOpen: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const onMove = (e: React.PointerEvent) => {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    setTilt({
      y: ((e.clientX - r.left) / r.width - 0.5) * 8,
      x: -((e.clientY - r.top) / r.height - 0.5) * 6,
    });
  };

  return (
    <div ref={ref} style={{ perspective: "1200px" }} onPointerMove={onMove} onPointerLeave={() => setTilt({ x: 0, y: 0 })}>
      <motion.button
        onClick={onOpen}
        aria-label={`View ${project.name}`}
        animate={{ rotateX: tilt.x, rotateY: tilt.y }}
        transition={{ type: "spring", stiffness: 80, damping: 16 }}
        style={{ transformStyle: "preserve-3d" }}
        className="group/vis block w-full overflow-hidden bg-ivory-deep/60 float-shadow"
      >
        <img
          src={project.image}
          alt={`${project.name} — ${project.category} interface visual`}
          loading="lazy"
          width={1400}
          height={1000}
          className="block w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/vis:scale-[1.045]"
        />
      </motion.button>
    </div>
  );
}

function Meta({
  project,
  onOpen,
  align = "left",
}: {
  project: Project;
  onOpen: () => void;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      <div
        className={`flex items-baseline gap-4 ${align === "center" ? "justify-center" : ""}`}
      >
        <span className="label-accent">{project.index}</span>
        <span className="label-xs">{project.category}</span>
      </div>
      <h3 className="display mt-4 text-[clamp(2.2rem,4.5vw,3.75rem)]">{project.name}</h3>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
      <button
        onClick={onOpen}
        className="rule-hover mt-7 inline-flex items-center gap-2 text-foreground transition-colors hover:text-accent"
      >
        <span className="label-xs text-inherit">View Project</span>
        <span aria-hidden="true" className="text-xs">
          →
        </span>
      </button>
    </div>
  );
}

export function ProjectShowcase({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  if (project.layout === "centered") {
    return (
      <article className="group">
        <Reveal>
          <Visual project={project} onOpen={onOpen} />
        </Reveal>
        <Reveal delay={0.1}>
          <div className="mx-auto mt-10 max-w-xl">
            <Meta project={project} onOpen={onOpen} align="center" />
          </div>
        </Reveal>
      </article>
    );
  }

  const textFirst = project.layout === "text-left";

  return (
    <article className="group grid items-center gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
      <Reveal className={textFirst ? "lg:order-1" : "lg:order-2"}>
        <Meta project={project} onOpen={onOpen} />
      </Reveal>
      <Reveal delay={0.1} className={textFirst ? "lg:order-2" : "lg:order-1"}>
        <Visual project={project} onOpen={onOpen} />
      </Reveal>
    </article>
  );
}
