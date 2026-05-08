import Link from "next/link";
import type { ReactNode } from "react";

interface ProjectCardProps {
  title: string;
  href: string;
  tags?: string[];
  children: ReactNode;
  ctaLabel?: string;
}

export default function ProjectCard({
  title,
  href,
  tags,
  children,
  ctaLabel = "View",
}: ProjectCardProps) {
  return (
    <Link
      href={href}
      className="group mb-6 block rounded-2xl border border-zinc-200 border-t-2 border-t-brandPink-200/40 bg-white p-6 shadow-[0_18px_40px_-24px_rgba(223,63,116,0.22)] transition-all duration-200 ease-out hover:-translate-y-1 hover:border-brandPink-200 hover:shadow-[0_24px_48px_-24px_rgba(223,63,116,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brandPink-300/70 focus-visible:ring-offset-2"
    >
      <div className="space-y-4">
        <div className="space-y-3">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-950">
            {title}
          </h2>

          {tags && tags.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-brandPink-50 px-3 py-1 text-sm text-zinc-600 transition-colors duration-200 group-hover:bg-brandPink-100"
                >
                  {tag}
                </span>
              ))}
            </div>
          ) : null}
        </div>

        <div className="max-w-[65ch] text-zinc-600 leading-7 [&>p]:mb-0 [&>p+*]:mt-4">
          {children}
        </div>

        <div className="pt-1 font-medium text-zinc-900">
          <span className="inline-flex items-center gap-1 transition-transform duration-200 group-hover:translate-x-0.5">
            {ctaLabel}
            <span aria-hidden="true">→</span>
          </span>
        </div>
      </div>
    </Link>
  );
}
