import { createFileRoute } from "@tanstack/react-router";

import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Projects } from "@/components/portfolio/Projects";
import { About } from "@/components/portfolio/About";
import { Experience } from "@/components/portfolio/Experience";
import { Contact } from "@/components/portfolio/Contact";
import { Companions } from "@/components/portfolio/Companions";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Valon Zuka — Cloud, Security & Blockchain Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Valon Zuka: cloud architecture, security engineering and smart-contract work, plus shipped web products. Based in Kosovo, building for anywhere.",
      },
      { property: "og:title", content: "Valon Zuka — Cloud, Security & Blockchain Engineer" },
      {
        property: "og:description",
        content:
          "Cloud, security and blockchain engineering — audited contracts, hardened infrastructure and shipped web products.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <Nav />
      <Companions />
      <main>
        <Hero />
        <Projects />
        <About />
        <Experience />
      </main>
      <Contact />
    </div>
  );
}
