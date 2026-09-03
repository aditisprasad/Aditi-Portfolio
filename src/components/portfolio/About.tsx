import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Reveal, SectionLabel } from "./Reveal";

const pillars = [
  { word: "Build", detail: "Software & full-stack development" },
  { word: "Analyze", detail: "Data & AI/ML" },
  { word: "Design", detail: "UI/UX & product thinking" },
  { word: "Solve", detail: "Real-world problem solving" },
];

export function About() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section id="about" className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-36">
      <SectionLabel index="02" title="About" />

      <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-24">
        <Reveal>
          <h2 className="display text-[clamp(2.8rem,6vw,5rem)]">More than code.</h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="max-w-md text-[0.95rem] leading-relaxed text-muted-foreground lg:mt-4">
            Software Engineering student exploring the intersection of technology, AI, data and
            product design.
          </p>
        </Reveal>
      </div>

      <ul className="mt-20 divide-y divide-border border-y border-border">
        {pillars.map((p, i) => (
          <li key={p.word}>
            <Reveal delay={i * 0.06}>
              <div
                onMouseEnter={() => setHovered(p.word)}
                onMouseLeave={() => setHovered(null)}
                onFocus={() => setHovered(p.word)}
                onBlur={() => setHovered(null)}
                tabIndex={0}
                className="group flex flex-wrap items-baseline justify-between gap-3 py-7 transition-colors duration-500"
              >
                <span className="display text-[clamp(2.4rem,7vw,5.5rem)] transition-all duration-500 group-hover:translate-x-3 group-hover:text-accent group-focus:translate-x-3">
                  {p.word}
                </span>
                <AnimatePresence mode="wait">
                  {hovered === p.word ? (
                    <motion.span
                      key="detail"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      className="label-xs"
                    >
                      {p.detail}
                    </motion.span>
                  ) : (
                    <motion.span
                      key="num"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="label-xs"
                    >
                      0{i + 1}
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
