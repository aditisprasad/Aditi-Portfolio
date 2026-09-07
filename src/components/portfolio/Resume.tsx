import { contact } from "@/data/portfolio";
import { Reveal } from "./Reveal";

export function Resume() {
  return (
    <section id="resume" className="mx-auto max-w-[1400px] px-6 py-24 md:px-10 md:py-32">
      <Reveal>
        <p className="label-accent">Resume</p>
      </Reveal>

      <div className="mt-8 grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
        <div>
          <Reveal>
            <h2 className="display text-[clamp(2.4rem,5.5vw,4.5rem)]">The full picture.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 max-w-md text-[0.95rem] leading-relaxed text-muted-foreground">
              Experience, skills and projects — all in one place.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <a
              href={contact.resume}
              target="_blank"
              rel="noreferrer"
              className="mt-9 inline-flex items-center gap-3 border border-foreground/25 px-7 py-3.5 transition-all duration-500 hover:border-accent hover:text-accent"
            >
              <span className="label-xs text-inherit">View Resume</span>
              <span aria-hidden="true" className="text-xs">
                →
              </span>
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <div className="panel float-shadow overflow-hidden rounded-[1.25rem] p-2">
            <div className="flex items-center justify-between px-3 pb-2 pt-1">
              <span className="label-xs">Aditi_S_Prasad_Resume.pdf</span>
              <span className="label-accent">PDF</span>
            </div>
            <iframe
              src="https://drive.google.com/file/d/1zwLRrb4gyEuPSywIt6433A5YzA9omLVr/preview"
              title="Résumé of Aditi S Prasad"
              loading="lazy"
              className="h-[460px] w-full rounded-[0.9rem] border border-border bg-ivory-deep"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
