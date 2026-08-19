const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  return (
    <nav className="fixed inset-x-0 top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-sm font-bold uppercase tracking-[0.24em]">
          V<span className="text-ember">Z</span>
        </a>
        <div className="flex items-center gap-6">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hidden font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-gold sm:block"
            >
              {l.label}
            </a>
          ))}
          <a
            href="mailto:valonzuka1@gmail.com"
            className="rounded-sm border border-gold/50 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.18em] text-gold transition-colors hover:bg-gold/10"
          >
            Hire me
          </a>
        </div>
      </div>
    </nav>
  );
}
