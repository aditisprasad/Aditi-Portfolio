import { contact } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-border/60">
      <div className="mx-auto flex max-w-[1400px] flex-col gap-4 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-10">
        <p className="label-xs">© {new Date().getFullYear()} Aditi S Prasad</p>
        <div className="flex flex-wrap gap-6">
          <a href={contact.linkedin} target="_blank" rel="noreferrer" className="label-xs">
            LinkedIn
          </a>
          <a href={contact.github} target="_blank" rel="noreferrer" className="label-xs">
            GitHub
          </a>
          <a href={`mailto:${contact.email}`} className="label-xs">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
