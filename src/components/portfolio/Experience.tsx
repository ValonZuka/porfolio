const ROLES = [
  {
    org: "Ree Tech SHPK",
    role: "Software Engineer",
    period: "Present",
    points: [
      "Building and maintaining production web platforms end to end.",
      "Pushing cloud, CI/CD, and security practice into day-to-day delivery.",
    ],
  },
  {
    org: "Influex",
    role: "Smart Contract & Product Engineer",
    period: "Recent",
    points: [
      "Contract-backed campaign and payout logic for a live creator platform.",
      "Frontend and API work around the on-chain layer.",
    ],
  },
  {
    org: "Independent",
    role: "Security & Blockchain Engineering",
    period: "Ongoing",
    points: [
      "Smart-contract assessments: vulnerability findings, exploit proofs, remediation.",
      "SentinelAI — detection tooling in scope for bachelor thesis work.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-4xl scroll-mt-20 px-6 py-24">
      <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
        05 — Where I've worked
      </p>
      <h2 className="mt-3 text-4xl font-extrabold text-ember-gradient sm:text-5xl">Track record</h2>

      <ol className="mt-12 space-y-0">
        {ROLES.map((r) => (
          <li key={r.org} className="relative border-l border-border pb-12 pl-8 last:pb-0">
            <span className="absolute -left-[7px] top-1 size-3.5 rounded-full border-2 border-background bg-ember" />
            <div className="flex flex-wrap items-baseline gap-x-3">
              <h3 className="text-xl font-bold">{r.org}</h3>
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-gold">
                {r.period}
              </span>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">{r.role}</p>
            <ul className="mt-4 space-y-2">
              {r.points.map((p) => (
                <li key={p} className="flex gap-3 text-sm text-muted-foreground">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
                  {p}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}
