import { contact } from "@/data/portfolio";
import { Reveal, SectionLabel } from "./Reveal";

const items = [
  { label: "Email", value: contact.email, href: `mailto:${contact.email}` },
  { label: "LinkedIn", value: "aditi-prasad", href: contact.linkedin },
  { label: "GitHub", value: "aditisprasad", href: contact.github },
  { label: "Resume", value: "Download PDF", href: contact.resume },
];

export function Contact() {
  return (
    <section
      id="contact"
      className="paper-grain relative overflow-hidden border-t border-border/60"
    >
      <div className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-36">
        <SectionLabel index="06" title="Contact" />

        <Reveal>
          <h2 className="display max-w-3xl text-[clamp(2.6rem,7vw,5.5rem)]">
            Let&rsquo;s build something worth remembering.
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-8 max-w-md text-[0.95rem] leading-relaxed text-muted-foreground">
            Open to internships, collaborations and conversations around AI, data and
            product.
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <Reveal key={it.label} delay={0.06 * i}>
              <p className="label-xs">{it.label}</p>
              <a
                href={it.href}
                target={it.href.startsWith("mailto:") ? undefined : "_blank"}
                rel="noreferrer"
                className="rule-hover mt-3 inline-block text-lg text-foreground transition-colors hover:text-accent"
              >
                {it.value}
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
