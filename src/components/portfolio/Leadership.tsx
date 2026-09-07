import { education, languages, leadership } from "@/data/portfolio";
import { Reveal } from "./Reveal";

export function Leadership() {
  return (
    <section className="mx-auto max-w-[1400px] px-6 py-20 md:px-10 md:py-28">
      <Reveal>
        <h2 className="display text-[clamp(2rem,4vw,3.2rem)]">Beyond the code.</h2>
      </Reveal>

      <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-20">
        {leadership.map((l, i) => (
          <Reveal key={l.org} delay={i * 0.08}>
            <div className="border-t border-border pt-6">
              <p className="text-base text-foreground">{l.org}</p>
              <p className="label-xs mt-2">{l.role}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-16 grid gap-10 md:grid-cols-2 md:gap-20">
        <Reveal delay={0.16}>
          <div className="border-t border-border pt-6">
            <p className="label-accent">Education</p>
            <p className="mt-3 text-base text-foreground">{education.degree}</p>
            <p className="label-xs mt-2">
              {education.school} · {education.location} · {education.period}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.22}>
          <div className="border-t border-border pt-6">
            <p className="label-accent">Languages</p>
            <p className="mt-3 text-base text-foreground">{languages.join(" · ")}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
