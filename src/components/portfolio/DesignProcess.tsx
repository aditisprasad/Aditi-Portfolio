import { motion } from "motion/react";
import { process } from "@/data/portfolio";
import { Reveal } from "./Reveal";

export function DesignProcess() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
      <Reveal>
        <h2 className="display text-[clamp(2rem,4vw,3.2rem)]">How I approach problems.</h2>
      </Reveal>

      <div className="relative mt-16">
        <motion.span
          aria-hidden="true"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-0 top-[7px] hidden h-px w-full origin-left bg-border md:block"
        />
        <ol className="grid grid-cols-2 gap-8 md:grid-cols-6 md:gap-4">
          {process.map((step, i) => (
            <li key={step} className="relative">
              <Reveal delay={i * 0.08}>
                <span
                  aria-hidden="true"
                  className="mb-5 hidden size-[13px] items-center justify-center rounded-full border border-border bg-background md:flex"
                >
                  <span className="size-1 rounded-full bg-accent" />
                </span>
                <p className="label-accent">0{i + 1}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.14em] text-foreground">{step}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>

      <Reveal delay={0.2}>
        <p className="display mt-20 max-w-2xl text-[clamp(1.5rem,3vw,2.4rem)] text-foreground/85">
          &ldquo;Technology becomes meaningful when it solves the right problem.&rdquo;
        </p>
      </Reveal>
    </section>
  );
}
