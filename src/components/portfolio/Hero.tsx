import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Portrait3D } from "./Portrait3D";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const portraitY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -60]);
  const portraitScale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.04]);

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <section
      id="home"
      ref={ref}
      className="paper-grain relative flex min-h-[92vh] items-center overflow-hidden pt-28 pb-16"
    >
      <div
        aria-hidden="true"
        className="soft-light pointer-events-none absolute inset-0 opacity-70"
      />

      <div className="relative mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-14 px-6 md:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="label-accent"
          >
            01 / Introduction
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.1 }}
            className="display mt-5 text-[clamp(3.4rem,10vw,7.5rem)]"
          >
            Hi, I&rsquo;m <span className="bloom-text italic">Aditi.</span>
          </motion.h1>

          <motion.div
            aria-hidden="true"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.3, ease, delay: 0.5 }}
            className="bloom-rule mt-6 h-px w-40 origin-left"
          />

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.25 }}
            className="mt-7 max-w-md text-[0.95rem] leading-relaxed text-muted-foreground"
          >
            Software Engineering student passionate about technology, AI, data, product
            development and thoughtful digital experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.38 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <button
              onClick={() => scrollTo("work")}
              className="group border border-foreground/70 px-7 py-3.5 transition-all duration-500 hover:border-foreground hover:bg-foreground hover:text-primary-foreground"
            >
              <span className="label-xs text-inherit">View My Work</span>
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="border border-foreground/20 px-7 py-3.5 transition-all duration-500 hover:border-accent hover:text-accent"
            >
              <span className="label-xs text-inherit">Contact Me</span>
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="mt-14 flex flex-wrap gap-x-10 gap-y-3"
          >
            <div>
              <p className="label-xs">Software Engineering</p>
              <p className="label-xs">AI / Data / Product</p>
            </div>
            <div>
              <p className="label-xs">Bengaluru, India</p>
              <p className="label-accent">Open to opportunities</p>
            </div>
          </motion.div>
        </div>

        <motion.div style={{ y: portraitY, scale: portraitScale }} className="relative">
          <Portrait3D />
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollTo("about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block"
      >
        <span className="label-xs">Scroll to explore ↓</span>
      </motion.button>
    </section>
  );
}
