import { skills } from "@/data/portfolio";
import { Reveal, SectionLabel } from "./Reveal";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-36">
      <SectionLabel index="05" title="Skills" />

      <div className="space-y-14">
        {skills.map((group, i) => (
          <Reveal key={group.label} delay={i * 0.05}>
            <div className="grid gap-4 border-b border-border pb-10 md:grid-cols-[0.35fr_1fr] md:gap-12">
              <p className="label-xs md:pt-3">{group.label}</p>
              <ul className="flex flex-wrap items-baseline gap-x-6 gap-y-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="display cursor-default text-[clamp(1.3rem,2.6vw,2.1rem)] text-foreground/85 transition-colors duration-400 hover:text-accent"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
