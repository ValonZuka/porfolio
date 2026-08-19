const PRINCIPLES = [
  {
    title: "Break it before someone else does",
    body: "I read systems the way an attacker would: trust boundaries first, happy path last.",
  },
  {
    title: "Infrastructure as a product",
    body: "Reproducible environments, least-privilege by default, and observability that answers questions at 3am.",
  },
  {
    title: "Ship, then harden",
    body: "Momentum matters. I get something real in front of people, then push it until it holds weight.",
  },
];

export function About() {
  return (
    <section id="about" className="relative border-y border-border bg-surface/40 scroll-mt-20">
      <div className="mx-auto grid max-w-6xl gap-14 px-6 py-24 lg:grid-cols-2">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
            04 — About
          </p>
          <h2 className="mt-3 text-4xl font-extrabold sm:text-5xl">
            Engineer from Kosovo with a<span className="text-ember-gradient"> loud appetite</span> for
            hard systems.
          </h2>
          <div className="mt-6 space-y-4 text-muted-foreground">
            <p>
              I started in web development because it gave me fast feedback, and stayed in
              engineering because the interesting problems live underneath the interface — identity,
              state, money, trust.
            </p>
            <p>
              Today my focus is cloud architecture, offensive-minded security work, and
              smart-contract engineering. I like being the person who can trace a bug from a React
              component down to an IAM policy or a storage slot.
            </p>
            <p>
              Outside the terminal: mountains, football, and an ongoing argument about whether the
              Balkan lynx or the eagle is the better mascot. Currently they share the page.
            </p>
          </div>
        </div>

        <ul className="space-y-4">
          {PRINCIPLES.map((p, i) => (
            <li
              key={p.title}
              className="rounded-sm border border-border bg-background/60 p-6 transition-colors hover:border-gold/50"
            >
              <span className="font-mono text-xs text-ember">0{i + 1}</span>
              <h3 className="mt-2 text-lg font-bold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
