import type { Metadata } from "next";
import Container from "@/components/Container";
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
      <Section className="pt-12 pb-8">
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
            I’ve been applying the same principles to AI workflows to bring more
            structure, validation, and reliability to systems built with LLMs.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/work/index">Explore Work</Button>
            <Button href="/resume" variant="secondary">Resume</Button>
          </div>
        </Container>
      </Section>

      {/* Featured Project */}
      <Section className="py-6">
        <Container>
          <div className="bg-white rounded-xl p-8 md:p-10 shadow-sm border border-slate-100 border-t-2 border-brandPink-200/40 bg-white/90 shadow-[0_18px_40px_-24px_rgba(223,63,116,0.35)] transition-all duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_24px_48px_-24px_rgba(223,63,116,0.45)]">
            <p className="text-sm uppercase tracking-wide text-slate-400 mb-3">
              Selected Work
            </p>
            <h2 className="mb-3 text-2xl font-bold text-gray-900">Agent Workflow Engine</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-5 max-w-2xl">
              A system for orchestrating multi-step AI workflows using a DAG execution model.
              Designed to make LLM pipelines reliable, with structured outputs, validation,
              and retry handling built into each step.
            </p>
            <p className="text-sm text-slate-500 mt-4 mb-6 max-w-2xl">Focused on reliability, structured outputs, and execution control for LLM-based systems.</p>
            <div className="flex gap-4 mt-2">
              <Button href="/work/agent-workflow-engine">View Details</Button>
              <Button
                href="https://github.com"
                variant="secondary"
                external
              >
                Try Demo ↗
              </Button>
            </div>
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
