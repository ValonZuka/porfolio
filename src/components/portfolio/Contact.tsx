export function Contact() {
  return (
    <footer id="contact" className="relative overflow-hidden scroll-mt-20 border-t border-border">
      <div className="absolute inset-0 blast-bg opacity-60" />
      <div className="relative mx-auto max-w-4xl px-6 py-28 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
          06 — Contact
        </p>
        <h2 className="mt-4 text-4xl font-extrabold sm:text-6xl">
          Got something<span className="text-ember-gradient"> hard to build?</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
          Cloud architecture, security review, or a contract that needs to hold real value — send the
          details and I'll tell you straight whether I'm the right person for it.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href="mailto:valonzuka1@gmail.com"
            className="rounded-sm bg-ember px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-blast transition-transform hover:-translate-y-0.5"
          >
            Email me
          </a>
          <a
            href="https://github.com/ValonZuka"
            target="_blank"
            rel="noreferrer"
            className="rounded-sm border border-gold/50 px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-gold transition-colors hover:bg-gold/10"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/valon-zuka"
            target="_blank"
            rel="noreferrer"
            className="rounded-sm border border-border px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-foreground transition-colors hover:border-gold/50"
          >
            LinkedIn
          </a>
        </div>

        <p className="mt-16 font-mono text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
          Valon Zuka — Prishtina, Kosovo
        </p>
      </div>
    </footer>
  );
}
