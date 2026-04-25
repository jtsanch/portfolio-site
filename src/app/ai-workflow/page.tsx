import type { Metadata } from "next";
import Container from "@/components/Container";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "AI Workflow",
  description:
    "How AI is integrated into daily software engineering — from prompt design to structured output validation and cost-aware generation.",
};

export default function AIWorkflowPage() {
  return (
    <Container className="py-16">
      <div className="mb-12">
        <p className="text-sm font-medium text-gray-400 uppercase tracking-widest mb-3">
          Process
        </p>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">AI Workflow</h1>
        <p className="text-gray-500 text-lg leading-relaxed max-w-2xl">
          AI is not a magic button I press — it is a systematic layer in my engineering
          process. Here is exactly how I use it, what patterns work, and what I avoid.
        </p>
      </div>

      <div className="space-y-14">
        {/* How AI is used */}
        <Section className="py-0">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            How AI Is Used in Development
          </h2>
          <ul className="space-y-3 text-gray-600">
            {[
              "Architecture exploration: I prompt an LLM to enumerate trade-offs between design choices before writing any code. This surfaces constraints I might overlook.",
              "Boilerplate generation: repetitive scaffolding (CRUD handlers, migration files, test stubs) is delegated entirely to a model with a schema prompt.",
              "Code review assist: diffs are passed to a model with a checklist prompt to catch common issues before human review.",
              "Documentation drafts: public API docs are seeded by the model from code + comments, then edited by hand.",
              "Debugging: error messages and stack traces are passed with the relevant code section for a fast hypothesis before diving into a debugger.",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Section>

        {/* Prompt + schema validation */}
        <Section className="py-0">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Prompt + Schema Validation Pattern
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Every prompt that needs a machine-readable output is paired with a JSON
            Schema. The model is instructed to return only valid JSON matching that
            schema. After the response arrives, the output is validated before being
            used:
          </p>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-5 text-sm font-mono text-gray-700 overflow-x-auto">
            <pre>{`// 1. Define schema
const schema = {
  type: "object",
  properties: {
    decision:   { type: "string", enum: ["approve", "reject"] },
    confidence: { type: "number", minimum: 0, maximum: 1 },
    rationale:  { type: "string", maxLength: 500 },
  },
  required: ["decision", "confidence", "rationale"],
};

// 2. Prompt enforces format
const prompt = \`
  Respond ONLY with JSON matching this schema:
  \${JSON.stringify(schema, null, 2)}
\`;

// 3. Validate response before use
const parsed = JSON.parse(response);
const valid  = ajv.validate(schema, parsed);
if (!valid) throw new SchemaValidationError(ajv.errors);`}</pre>
          </div>
          <p className="text-gray-500 text-sm mt-3">
            This makes AI outputs safe to consume in downstream systems without manual
            parsing or guessing.
          </p>
        </Section>

        {/* Retry logic */}
        <Section className="py-0">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Retry Logic for Structured Outputs
          </h2>
          <p className="text-gray-600 leading-relaxed mb-3">
            Models occasionally produce malformed JSON or outputs that fail schema
            validation. The retry strategy:
          </p>
          <ul className="space-y-3 text-gray-600">
            {[
              "Attempt 1: send the original prompt.",
              "On schema failure: append the validation error and the bad output to the next prompt — \"Your last response failed validation with this error: [...]. Try again.\"",
              "Attempt 2: temperature lowered slightly to reduce creative deviation.",
              "Attempt 3: switch to a more capable (higher-cost) model if still failing.",
              "After 3 failures: surface the error with full prompt/response trace for human inspection. Never silently continue.",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Section>

        {/* Cost / token awareness */}
        <Section className="py-0">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            Cost &amp; Token Awareness
          </h2>
          <ul className="space-y-3 text-gray-600">
            {[
              "Prompt compression: system prompts are pre-tokenized and cached; large context is chunked rather than sent whole.",
              "Model routing: cheap models handle classification and extraction; expensive models handle open-ended reasoning. Most tasks go to cheap models.",
              "Budget per request: each pipeline run is given a token budget. The scheduler aborts and surfaces a cost warning if the budget is exceeded.",
              "Logging: every LLM call logs model, prompt tokens, completion tokens, latency, and cost estimate. Dashboards track spend per workflow type.",
              "Cache layer: identical prompts (same hash) return cached responses within a TTL — eliminating redundant API calls for deterministic tasks.",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-gray-400 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Section>
      </div>
    </Container>
  );
}
