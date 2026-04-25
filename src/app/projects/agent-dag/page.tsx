import type { Metadata } from "next";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Agent DAG Platform",
  description:
    "A directed acyclic graph execution engine for orchestrating multi-step AI agent pipelines, built for reliability and horizontal scale.",
};

export default function AgentDagPage() {
  return (
    <Container className="py-16">
      {/* Header */}
      <div className="mb-12">
        <p className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-3">
          Project
        </p>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Agent DAG Platform</h1>
        <p className="text-gray-500 text-lg leading-relaxed max-w-2xl">
          A production-grade orchestration engine that executes multi-step AI agent workflows
          as directed acyclic graphs — with schema validation, retry logic, and full
          observability baked in.
        </p>
        <div className="flex flex-wrap gap-3 mt-6">
          <Button href="https://github.com" external>
            GitHub Repo ↗
          </Button>
          <Button href="https://github.com" variant="secondary" external>
            Live Demo ↗
          </Button>
        </div>
      </div>

      <div className="space-y-14">
        {/* Problem */}
        <Section className="py-0">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Problem</h2>
          <p className="text-gray-600 leading-relaxed max-w-2xl">
            Orchestrating chains of AI agents is brittle when done ad hoc. Each step
            may call an LLM, a tool, or an external API — and failures cascade silently.
            There was no standard way to define dependencies between steps, retry failed
            nodes in isolation, or inspect execution state without coupling application
            code to orchestration logic.
          </p>
        </Section>

        {/* Solution */}
        <Section className="py-0">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Solution</h2>
          <p className="text-gray-600 leading-relaxed max-w-2xl">
            The Agent DAG Platform models each workflow as a typed DAG. Nodes declare
            their inputs and outputs via JSON Schema. The runtime resolves dependency
            order, schedules independent nodes concurrently, validates structured outputs
            before passing them downstream, and retries failed nodes with exponential
            back-off — all without the caller managing state.
          </p>
        </Section>

        {/* Architecture */}
        <Section className="py-0">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Architecture</h2>
          <div className="rounded-xl border border-gray-200 bg-gray-50 h-56 flex items-center justify-center text-gray-400 text-sm">
            Architecture diagram coming soon
          </div>
          <p className="text-gray-500 text-sm mt-3">
            Execution engine → Node scheduler → Schema validator → LLM adapters → Observability layer
          </p>
        </Section>

        {/* Key Decisions */}
        <Section className="py-0">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Key Decisions</h2>
          <ul className="space-y-3 text-gray-600">
            {[
              "DAG-first design: workflows are data (JSON/YAML), not code — enabling version control, diffing, and UI editors.",
              "Schema validation at every edge: structured outputs are validated before being passed to dependent nodes, failing fast and clearly.",
              "Stateless executor: all execution state lives in a Redis-backed store, making the executor horizontally scalable and crash-recoverable.",
              "Pluggable LLM adapters: OpenAI, Anthropic, and local models implement the same interface; switching providers requires zero workflow changes.",
              "Cost budgets per run: each DAG run can specify a max token budget; the scheduler aborts if the budget is exceeded mid-run.",
              "Structured retry: failed nodes retry with exponential back-off; after N attempts, the failure is surfaced with the full prompt/response trace for debugging.",
            ].map((point) => (
              <li key={point} className="flex gap-3">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </Section>

        {/* Technologies */}
        <Section className="py-0">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Technologies Used</h2>
          <div className="flex flex-wrap gap-2">
            {[
              "Go",
              "Python",
              "Redis",
              "PostgreSQL",
              "Kubernetes",
              "OpenAI API",
              "JSON Schema",
              "Prometheus",
              "Grafana",
              "Docker",
              "gRPC",
              "OpenTelemetry",
            ].map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </Section>
      </div>
    </Container>
  );
}
