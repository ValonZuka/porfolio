import sentinel from "@/assets/proj-sentinel.jpg";
import healthchain from "@/assets/proj-healthchain.jpg";
import influex from "@/assets/proj-influex.jpg";
import barber from "@/assets/proj-barber.jpg";
import whisk from "@/assets/proj-whisk.jpg";
import pronex from "@/assets/proj-pronex.jpg";
import code from "@/assets/proj-code.jpg";

type Project = {
  title: string;
  domain: string;
  blurb: string;
  stack: string[];
  image: string;
  href?: string;
  note?: string;
};

const CORE: Project[] = [
  {
    title: "SentinelAI",
    domain: "Security",
    blurb:
      "AI-assisted threat detection and triage tooling — the candidate for my bachelor diploma work. Signal collection, scoring, and analyst-facing insight.",
    stack: ["Python", "Detection Engineering", "LLM Triage"],
    image: sentinel,
    href: "https://github.com/ValonZuka/SentinelAI",
    note: "Thesis in discussion",
  },
  {
    title: "HealthProjectChain",
    domain: "Blockchain",
    blurb:
      "On-chain medical record custody: patient-owned access grants, tamper-evident history, and auditable consent flows.",
    stack: ["Solidity", "EVM", "Web3"],
    image: healthchain,
    href: "https://github.com/ValonZuka/HealthProjectChain",
  },
  {
    title: "Influex",
    domain: "Blockchain · Product",
    blurb:
      "Creator-economy platform running in production. Campaign accounting, payouts, and contract-backed agreements between brands and creators.",
    stack: ["Smart Contracts", "React", "Node.js"],
    image: influex,
    note: "Private — in production",
  },
  {
    title: "Cloud Platform Build",
    domain: "Cloud",
    blurb:
      "Next up: a full AWS reference build — IaC-provisioned networking, hardened IAM, observability, and cost-aware autoscaling.",
    stack: ["AWS", "Terraform", "Kubernetes"],
    image: code,
    note: "In progress",
  },
];

const CONTRACTS: Project[] = [
  {
    title: "Smart Contract Assessment",
    domain: "Audit task",
    blurb: "Review and remediation exercise: vulnerability findings with fixes and tests.",
    stack: ["Solidity", "Foundry"],
    image: code,
    href: "https://github.com/ValonZuka/smart-contract-assessment",
  },
  {
    title: "P2P Contract",
    domain: "Protocol task",
    blurb: "Peer-to-peer escrow contract with settlement and dispute paths.",
    stack: ["Solidity", "Hardhat"],
    image: code,
    href: "https://github.com/ValonZuka/p2pcontract",
  },
];

const LAB: Project[] = [
  {
    title: "Barber POS",
    domain: "Web app",
    blurb: "Bookings, checkout, and daily takings for a barbershop floor.",
    stack: ["React", "TypeScript"],
    image: barber,
    href: "https://github.com/ValonZuka/Barber-POS",
  },
  {
    title: "Whisk Takers",
    domain: "Web app",
    blurb: "Storefront for a dessert brand — catalog, cart, and orders.",
    stack: ["React", "Tailwind"],
    image: whisk,
    href: "https://github.com/ValonZuka/Whisk-Takers",
  },
  {
    title: "PronexGroup",
    domain: "Web app",
    blurb: "Corporate site and lead capture for a services group.",
    stack: ["React", "SEO"],
    image: pronex,
    href: "https://github.com/ValonZuka/PronexGroup",
  },
  {
    title: "Projekti",
    domain: "Web app",
    blurb: "Full-stack coursework project turned playground for architecture ideas.",
    stack: ["Full-stack"],
    image: code,
    href: "https://github.com/ValonZuka/Projekti",
  },
  {
    title: "Muranova",
    domain: "Web app",
    blurb: "In-build product — details land here once it ships.",
    stack: ["React", "In progress"],
    image: code,
    note: "Coming soon",
  },
];

function Card({ project, large = false }: { project: Project; large?: boolean }) {
  const Wrapper = project.href ? "a" : "div";
  return (
    <Wrapper
      {...(project.href ? { href: project.href, target: "_blank", rel: "noreferrer" } : {})}
      className="group relative block overflow-hidden rounded-sm border border-border bg-surface transition-all duration-300 hover:-translate-y-1 hover:border-gold/50 hover:shadow-gold"
    >
      <div className={`relative overflow-hidden ${large ? "aspect-[16/9]" : "aspect-[16/10]"}`}>
        <img
          src={project.image}
          alt={`${project.title} interface preview`}
          loading="lazy"
          width={1200}
          height={750}
          className="size-full scale-[1.04] object-cover opacity-40 grayscale transition-all duration-500 group-hover:scale-100 group-hover:opacity-100 group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/40 to-transparent" />
        <span className="absolute left-4 top-4 rounded-sm border border-gold/40 bg-background/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-gold backdrop-blur">
          {project.domain}
        </span>
        {project.note && (
          <span className="absolute right-4 top-4 rounded-sm bg-ember/90 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-primary-foreground">
            {project.note}
          </span>
        )}
      </div>

      <div className="p-6">
        <h3 className={`font-bold ${large ? "text-2xl" : "text-xl"}`}>{project.title}</h3>
        <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{project.blurb}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((s) => (
            <span
              key={s}
              className="rounded-sm border border-border px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
            >
              {s}
            </span>
          ))}
        </div>
        {project.href && (
          <span className="mt-5 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em] text-ember opacity-0 transition-opacity group-hover:opacity-100">
            See insights →
          </span>
        )}
      </div>
    </Wrapper>
  );
}

function SectionHead({
  eyebrow,
  title,
  sub,
  cool = false,
}: {
  eyebrow: string;
  title: string;
  sub: string;
  cool?: boolean;
}) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">{eyebrow}</p>
      <h2
        className={`mt-3 text-4xl font-extrabold sm:text-5xl ${cool ? "text-cool-gradient" : "text-ember-gradient"}`}
      >
        {title}
      </h2>
      <p className="mt-4 text-muted-foreground">{sub}</p>
    </div>
  );
}

export function Projects() {
  return (
    <section id="work" className="relative mx-auto max-w-6xl scroll-mt-20 px-6 py-24">
      <SectionHead
        eyebrow="01 — Core work"
        title="Cloud, Security, Blockchain"
        sub="The three lanes I go deep in. Everything here is built to be operated, attacked, and audited."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {CORE.map((p) => (
          <Card key={p.title} project={p} large />
        ))}
      </div>

      <div className="mt-24">
        <SectionHead
          eyebrow="02 — Contract engineering"
          title="Audit & protocol tasks"
          sub="Focused smart-contract assignments: find the break, prove it, fix it."
          cool
        />
        <div className="grid gap-6 md:grid-cols-2">
          {CONTRACTS.map((p) => (
            <Card key={p.title} project={p} />
          ))}
        </div>
      </div>

      <div className="mt-24">
        <SectionHead
          eyebrow="03 — Product lab"
          title="Web apps I shipped for fun"
          sub="Real products, smaller stakes. This is where I keep frontend craft sharp and turnaround fast."
          cool
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {LAB.map((p) => (
            <Card key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
