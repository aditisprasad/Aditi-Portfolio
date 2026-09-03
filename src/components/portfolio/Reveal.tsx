import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <Reveal>
      <div className="mb-10 flex items-baseline gap-4">
        <span className="label-accent">{index}</span>
        <span className="label-xs">{title}</span>
        <span className="h-px flex-1 bg-border" aria-hidden="true" />
      </div>
    </Reveal>
  );
}
