import type { Metadata } from "next";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "JT Sanchez — Backend & Platform Engineer",
  description:
    "Senior software engineer specializing in backend systems, platform engineering, and AI-assisted development workflows.",
};

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-24 pb-16">
        <Container>
          <p className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-4">
            Senior Software Engineer
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-gray-900 max-w-2xl">
            Backend &amp; Platform Engineer building reliable systems with AI-assisted workflows
          </h1>
          <p className="mt-6 text-lg text-gray-500 max-w-xl leading-relaxed">
            I design and build distributed backend systems and developer platforms that scale.
            My workflow integrates AI tooling at every stage — from architecture exploration
            to structured code generation — to ship reliable software faster.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/projects/agent-dag">View Featured Project</Button>
            <Button href="/resume" variant="secondary">Resume</Button>
          </div>
        </Container>
      </Section>

      {/* Featured Project */}
      <Section className="bg-gray-50 py-14">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-3">
            Featured Project
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Agent DAG Platform</h2>
          <p className="text-gray-500 max-w-lg mb-6 leading-relaxed">
            A directed acyclic graph execution engine for orchestrating multi-step AI agent
            pipelines. Built for reliability, observability, and horizontal scale on
            Kubernetes — with schema-validated structured outputs at every node.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button href="/projects/agent-dag">View Project</Button>
            <Button
              href="https://github.com"
              variant="secondary"
              external
            >
              Live Demo ↗
            </Button>
          </div>
        </Container>
      </Section>

      {/* Brief skills strip */}
      <Section className="py-12">
        <Container>
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">
            Core Expertise
          </p>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-y-2 gap-x-4 text-gray-600 text-sm">
            {[
              "Distributed Systems",
              "Platform Engineering",
              "AI-Assisted Workflows",
              "Go / Python / TypeScript",
              "Kubernetes & Containers",
              "Observability & SRE",
            ].map((skill) => (
              <li key={skill} className="flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-gray-400 flex-shrink-0" />
                {skill}
              </li>
            ))}
          </ul>
        </Container>
      </Section>
    </>
  );
}
