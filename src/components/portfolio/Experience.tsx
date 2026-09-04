import { experience } from "@/data/portfolio";
import { Reveal, SectionLabel } from "./Reveal";

export function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-36"
    >
      <SectionLabel index="03" title="Experience" />

      <ol className="border-t border-border">
        {experience.map((e, i) => (
          <li key={e.company}>
            <Reveal delay={i * 0.07}>
              <div className="group relative grid gap-3 border-b border-border py-10 transition-colors duration-500 md:grid-cols-[0.9fr_1.4fr_0.8fr] md:items-baseline">
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-0 h-px w-0 bg-accent transition-all duration-700 group-hover:w-full"
                />
                <span className="label-xs">{e.period}</span>
                <div>
                  <h3 className="display text-[clamp(1.6rem,3vw,2.4rem)] transition-transform duration-500 group-hover:translate-x-2">
                    {e.role}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.note}</p>
                </div>
                <span className="label-xs md:text-right">{e.company}</span>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
