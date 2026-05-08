import type { Metadata } from "next";
import Container from "@/components/Container";
import ProjectCard from "@/components/ProjectCard";
import Section from "@/components/Section";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Travis Sanchez — Backend & Platform Engineer",
  description:
    "Senior software engineer specializing in backend systems, platform engineering, and AI-assisted development workflows.",
};

export default function Home() {
  return (
    <>
      {/* Hero */}
      <Section className="pt-12 pb-4">
        <Container>
          <h1 className="max-w-2xl text-4xl font-bold leading-tight text-brandDark-900 sm:text-4xl">
            I build backend systems and platforms that are{" "}
            <span className="bg-gradient-to-r from-brandPink-500 to-brandPink-400 bg-clip-text text-transparent">
              reliable by design
            </span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mt-4 mb-8">
            I design and own backend services and internal platforms, with a focus on
            clear data models, predictable behavior, and strong developer experience.
            <br /><br />
            I apply the same principles to AI workflows, bringing structure, validation,
            and reliability to LLM-based systems.
          </p>
          <p className="mt-4 text-sm text-gray-500">
            Previously at Roche • 9 years building backend & platform systems
            <br /><br />
            Open to senior backend / platform opportunities
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/work/index">Explore Work</Button>
            <Button href="/resume" variant="secondary">View Resume</Button>
          </div>
        </Container>
      </Section>

      <Section className="py-4">
        <Container>
          {/* Section header */}
          <div className="mb-6">
            <p className="text-sm uppercase font-medium tracking-wide text-brandPink-500">
              Systems
            </p>
          </div>

          {/* Project list */}
          <div className="space-y-6">
            <ProjectCard
              title="Agent Workflow Engine"
              href="/work/agent-workflow-engine"
              tags={["AI Workflows", "DAG Execution", "Reliability"]}
              ctaLabel="View Project"
            >
              <p>
                Orchestrates multi-step AI workflows using a DAG execution
                model, enabling reliable and debuggable LLM pipelines.
              </p>
              <p className="text-sm text-slate-500">
                Focused on deterministic execution, structured outputs, and
                validation-driven reliability.
              </p>
            </ProjectCard>

            <ProjectCard
              title="Metadata Platform"
              href="/work/metadata-platform"
              tags={["Platform Systems", "Multi-Tenant", "Configuration"]}
              ctaLabel="View Project"
            >
              <p>
                Centralized system for managing configuration and identity
                context across multi-tenant services.
              </p>
              <p className="text-sm text-slate-500">
                Replaced fragmented service logic with a consistent,
                hierarchical configuration model across tenant, user, and
                application scopes.
              </p>
            </ProjectCard>
          </div>
        </Container>
      </Section>

      {/* Brief skills strip */}
      <Section className="py-6">
        <Container>
          <p className="mb-6 text-base font-semibold text-slate-900">
            What I work on
          </p>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                title: "Backend and Platform Systems",
                subheader: "API Design & Service Architecture",
                description:
                  "Designing systems and services that are reliable, scalable, and clear to work with",
              },
              {
                title: "Application Development",
                subheader: "Full-Stack Features & System Integration",
                description:
                    "Building across backend services and frontend interfaces (React) to deliver complete features",
              },
              {
                title: "AI Workflows",
                subheader: "Structured LLM Usage in Engineering",
                description:
                  "Using tools like Copilot and Codex with validation, iteration, and multi-step workflows",
              },
            ].map((item) => (
              <div key={item.title} className="space-y-2">
                <p className="text-base font-semibold text-slate-900">
                  {item.title}
                </p>
                <p className="text-sm text-slate-700">{item.subheader}</p>
                <p className="text-sm text-slate-500">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
