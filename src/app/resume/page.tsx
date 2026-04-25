import type { Metadata } from "next";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Resume of JT Sanchez — senior software engineer specializing in backend systems and platform engineering.",
};

export default function ResumePage() {
  return (
    <Container className="py-16">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-12">
        <div>
          <p className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-1">
            Resume
          </p>
          <h1 className="text-3xl font-bold text-gray-900">JT Sanchez</h1>
          <p className="text-gray-500 mt-1">
            Backend &amp; Platform Engineer · AI-Assisted Workflows
          </p>
        </div>
        <Button href="/resume.pdf" external variant="secondary">
          Download PDF ↓
        </Button>
      </div>

      <div className="space-y-12">
        {/* Contact */}
        <Section className="py-0">
          <div className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-gray-500">
            <span>jt@example.com</span>
            <span>github.com/jtsanch</span>
            <span>linkedin.com/in/jtsanchez</span>
            <span>San Francisco, CA</span>
          </div>
        </Section>

        {/* Summary */}
        <Section className="py-0">
          <h2 className="text-lg font-semibold text-gray-900 mb-3 border-b border-gray-100 pb-2">
            Summary
          </h2>
          <p className="text-gray-600 leading-relaxed max-w-2xl">
            Senior software engineer with 8+ years building distributed backend systems,
            developer platforms, and data pipelines. Deep experience in Go and Python,
            Kubernetes-native deployments, and integrating AI/LLM tooling into production
            engineering workflows. Focused on reliability, observability, and developer
            experience.
          </p>
        </Section>

        {/* Experience */}
        <Section className="py-0">
          <h2 className="text-lg font-semibold text-gray-900 mb-5 border-b border-gray-100 pb-2">
            Experience
          </h2>
          <div className="space-y-8">
            {[
              {
                role: "Staff Platform Engineer",
                company: "Acme Corp",
                period: "2022 – Present",
                bullets: [
                  "Designed and shipped the internal developer platform serving 150+ engineers, reducing service onboarding from 3 days to 2 hours.",
                  "Built an AI-assisted code review pipeline (schema-validated LLM outputs) that caught 18% more security issues in pre-merge checks.",
                  "Led migration of 40+ microservices from VM-based deployments to Kubernetes; reduced infra cost by 35%.",
                  "Established SLO framework and on-call rotations; improved P99 latency by 40% across core services.",
                ],
              },
              {
                role: "Senior Backend Engineer",
                company: "DataFlow Inc",
                period: "2019 – 2022",
                bullets: [
                  "Architected a high-throughput event ingestion pipeline (Go, Kafka) processing 500k events/sec at P99 < 20ms.",
                  "Implemented structured retry and dead-letter queues for reliable at-least-once delivery across distributed consumers.",
                  "Mentored 4 junior engineers; led weekly architecture review sessions.",
                ],
              },
              {
                role: "Backend Engineer",
                company: "StartupXYZ",
                period: "2016 – 2019",
                bullets: [
                  "Built core REST and GraphQL APIs in Python (Django/FastAPI) powering 200k daily active users.",
                  "Designed multi-tenant PostgreSQL schema with row-level security; zero data-leak incidents over 3 years.",
                  "Integrated third-party payment, notification, and analytics providers.",
                ],
              },
            ].map(({ role, company, period, bullets }) => (
              <div key={role}>
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-2">
                  <div>
                    <span className="font-semibold text-gray-900">{role}</span>
                    <span className="text-gray-400 mx-2">·</span>
                    <span className="text-gray-600">{company}</span>
                  </div>
                  <span className="text-sm text-gray-400">{period}</span>
                </div>
                <ul className="space-y-1.5">
                  {bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-gray-600 text-sm">
                      <span className="mt-1.5 w-1 h-1 rounded-full bg-gray-300 flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Skills */}
        <Section className="py-0">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 border-b border-gray-100 pb-2">
            Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-600">
            {[
              { label: "Languages", value: "Go, Python, TypeScript, SQL, Bash" },
              { label: "Infrastructure", value: "Kubernetes, Docker, Terraform, AWS, GCP" },
              {
                label: "Data",
                value: "PostgreSQL, Redis, Kafka, ClickHouse, BigQuery",
              },
              {
                label: "Observability",
                value: "OpenTelemetry, Prometheus, Grafana, Datadog",
              },
              {
                label: "AI / ML",
                value: "OpenAI API, Anthropic API, LangChain, JSON Schema, RAG pipelines",
              },
              {
                label: "Practices",
                value: "SRE, DDD, event-driven architecture, API design",
              },
            ].map(({ label, value }) => (
              <div key={label}>
                <span className="font-medium text-gray-700">{label}: </span>
                <span>{value}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* Education */}
        <Section className="py-0">
          <h2 className="text-lg font-semibold text-gray-900 mb-4 border-b border-gray-100 pb-2">
            Education
          </h2>
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between">
            <div>
              <span className="font-medium text-gray-900">
                B.S. Computer Science
              </span>
              <span className="text-gray-400 mx-2">·</span>
              <span className="text-gray-600">State University</span>
            </div>
            <span className="text-sm text-gray-400">2012 – 2016</span>
          </div>
        </Section>
      </div>
    </Container>
  );
}
