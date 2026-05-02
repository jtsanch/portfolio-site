"use client";

import Container from "@/components/Container";
import Section from "@/components/Section";

export default function ResumePage() {
  return (
      <Container className="max-w-5xl py-16">
        {/* Header */}
        <div className="mb-10 flex items-center gap-5">
          <img
            alt="Travis Sanchez"
            src="/profile.jpg"
            className="w-16 h-16 rounded-full"
          />

          <div>
            <h1 className="mb-2 text-4xl font-bold text-gray-900">
              Travis Sanchez
            </h1>

            <p className="text-lg text-gray-600">
              Senior Software Engineer — Backend & Platform Systems
            </p>
          </div>
        </div>

        <div className="mb-8 border-t border-brandPink-200" />

        <div className="grid gap-10 md:grid-cols-[minmax(0,2fr)_minmax(240px,1fr)]">
          <div>
            {/* Summary */}
            <Section className="py-4 mb-10">
              <h2 className="text-xl font-semibold mb-3">Summary</h2>
              <p className="text-gray-600 leading-relaxed">
                Senior Software Engineer with 9 years of experience building backend
                and platform systems in Node.js and Java/Spring. Experienced in
                designing identity, metadata, and configuration systems for
                multi-tenant platforms, with a focus on reliability, observability,
                and developer experience.
              </p>
            </Section>

            {/* Highlights */}
            <Section className="py-4">
              <h2 className="text-xl font-semibold mb-3">Highlights</h2>
              <ul className="space-y-3 text-gray-600">
                <li>
                  Owned a metadata service powering 20+ applications across a platform
                  ecosystem
                </li>
                <li>
                  Reduced DynamoDB reads by 11x and improved latency from 120ms → 30ms
                  using Redis caching
                </li>
                <li>
                  Designed relational metadata system enabling flexible configuration
                  across tenant, user, and application scopes
                </li>
                <li>
                  Strong focus on API design, system reliability, and developer
                  experience
                </li>
              </ul>
            </Section>
          </div>

          <div>
            <Section className="py-4">
              <h2 className="text-xl font-semibold mb-1">Contact</h2>
              <div className="space-y-1 text-sm text-gray-500">
                <p>San Francisco, CA</p>
                <p>
                  <a href="mailto:johntsanch@gmail.com" className="underline">
                    johntsanch@gmail.com
                  </a>
                </p>
              </div>
            </Section>

            <Section className="py-4">
              <h2 className="text-xl font-semibold mb-1">GitHub</h2>
              <a
                  href="https://github.com/jtsanch"
                  className="underline text-sm text-gray-500"
                  target="_blank"
              >
                GitHub
              </a>
            </Section>

            <Section className="py-4">
              <h2 className="text-xl font-semibold mb-1">LinkedIn</h2>
              <a
                  href="https://www.linkedin.com/in/travissanchez"
                  className="underline text-sm text-gray-500"
                  target="_blank"
              >
                LinkedIn
              </a>
            </Section>

            <Section className="py-4">
              <h2 className="text-xl font-semibold mb-1">Resume</h2>

              <a
                  href="/resume.pdf"
                  target="_blank"
                  className="inline-block rounded-md bg-gray-900 px-5 py-3 text-white"
              >
                View / Download Resume
              </a>
            </Section>

          </div>
        </div>
      </Container>
  );
}
