import portraitFrame from "@/assets/portrait-frame.jpg";

const STACK = [
  "AWS",
  "Terraform",
  "Kubernetes",
  "Solidity",
  "Foundry",
  "Hardhat",
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "Threat Modeling",
  "CI/CD",
];

export function Hero() {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 blast-bg opacity-70" />
      <div className="absolute inset-0 grid-lines opacity-[0.18]" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 pb-24 pt-28 lg:grid-cols-[1.4fr_1fr] lg:items-center lg:gap-16 lg:pt-36">
        <div>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-surface/70 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-gold">
            <span className="size-1.5 animate-pulse-slow rounded-full bg-ember" />
            Currently building at Ree Tech SHPK
          </p>

          <h1 className="text-5xl font-extrabold leading-[0.92] sm:text-6xl lg:text-7xl">
            Valon Zuka
            <span className="mt-2 block text-ember-gradient">Cloud · Security · Blockchain</span>
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-relaxed text-muted-foreground">
            I design infrastructure that refuses to fall over, audit the contracts that move the
            money, and ship products fast enough to matter. Kosovo-based, building for anywhere.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#work"
              className="rounded-sm bg-ember px-6 py-3 text-sm font-semibold uppercase tracking-wider text-primary-foreground shadow-blast transition-transform hover:-translate-y-0.5"
            >
              See the work
            </a>
            <a
              href="https://github.com/ValonZuka"
              target="_blank"
              rel="noreferrer"
              className="rounded-sm border border-gold/50 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-gold transition-colors hover:bg-gold/10"
            >
              GitHub
            </a>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-3 gap-4 border-t border-border pt-8">
            {[
              { k: "10", v: "shipped repos" },
              { k: "3", v: "core domains" },
              { k: "1", v: "security thesis in motion" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="font-display text-3xl font-bold text-gold">{s.k}</dt>
                <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Photo slot — swap portrait-frame.jpg for your own photo */}
        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-3 rounded-sm bg-gradient-to-br from-ember/40 via-transparent to-gold/40 blur-xl" />
          <figure className="relative overflow-hidden rounded-sm border border-gold/30 bg-surface shadow-gold">
            <img
              src={portraitFrame}
              alt="Valon Zuka portrait"
              width={900}
              height={1100}
              className="aspect-[9/11] w-full object-cover"
            />
            <figcaption className="absolute bottom-0 w-full border-t border-gold/20 bg-background/80 px-4 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground backdrop-blur">
              Prishtina, Kosovo — open to remote
            </figcaption>
          </figure>
        </div>
      </div>

      <div className="relative border-y border-border bg-surface/60 py-4">
        <div className="flex w-max animate-marquee gap-8 whitespace-nowrap font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
          {[...STACK, ...STACK].map((s, i) => (
            <span key={`${s}-${i}`} className="flex items-center gap-8">
              {s}
              <span className="size-1 rounded-full bg-ember" />
            </span>
          ))}
        </div>
      </div>
    </header>
  );
}
