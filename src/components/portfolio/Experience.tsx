import { experience } from "@/data/portfolio";
import { Reveal, SectionLabel } from "./Reveal";

export function Experience() {
  return (
    <section
      id="experience"
      className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-36"
    >
      <SectionLabel index="03" title="Experience" />

      <ol className="space-y-5">
        {experience.map((e, i) => (
          <li key={e.company}>
            <Reveal delay={i * 0.07}>
              <div className="panel group relative overflow-hidden rounded-[1rem] p-6 transition-colors duration-500 hover:border-accent/60 md:p-9">
                <span
                  aria-hidden="true"
                  className="bloom-rule absolute left-0 top-0 h-px w-0 transition-all duration-700 group-hover:w-full"
                />
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <span className="label-accent">{e.company}</span>
                  <span className="label-xs rounded-full border border-border px-3 py-1">
                    {e.period}
                  </span>
                </div>
                <h3 className="display mt-4 text-[clamp(1.6rem,3vw,2.4rem)] transition-transform duration-500 group-hover:translate-x-2">
                  {e.role}
                </h3>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                  {e.note}
                </p>
              </div>
            </Reveal>
          </li>
        ))}

            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
