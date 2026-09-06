import { skills } from "@/data/portfolio";
import { Reveal, SectionLabel } from "./Reveal";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-36">
      <SectionLabel index="04" title="Skills" />

      <div className="space-y-6">
        {skills.map((group, i) => (
          <Reveal key={group.label} delay={i * 0.05}>
            <div className="panel grid gap-5 rounded-[1rem] p-6 md:grid-cols-[0.3fr_1fr] md:gap-12 md:p-8">
              <p className="label-accent md:pt-2">{group.label}</p>
              <ul className="flex flex-wrap gap-2.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="cursor-default rounded-full border border-border px-4 py-2 font-mono text-xs tracking-[0.08em] text-foreground/85 transition-colors duration-300 hover:border-accent hover:text-accent"
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
