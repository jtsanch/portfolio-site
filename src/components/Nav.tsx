"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/work/index", label: "Work" },
  { href: "/approach/ai-in-engineering", label: "Approach" },
  { href: "/resume", label: "Resume" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <nav className="max-w-5xl mx-auto px-6 py-3 flex items-start justify-between gap-6">
        <Link
          href="/"
          className="font-semibold text-gray-900 hover:text-gray-600 transition-colors"
        >
          Travis Sanchez
        </Link>
        <div className="flex flex-col items-end gap-2">
          <ul className="flex items-center gap-5">
            {navLinks.map(({ href, label }) => {
              const isActive =
                href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(href);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`inline-block text-sm font-medium decoration-2 underline-offset-[4px] transition-[color,text-decoration-color] duration-200 ${
                      isActive
                        ? "text-gray-900 underline decoration-brandPink-400"
                        : "text-gray-500 no-underline decoration-transparent hover:text-gray-900 hover:underline hover:decoration-brandPink-400"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <p className="text-sm text-gray-500">
            <a
              href="https://github.com/jtsanch"
              className="inline-block decoration-2 underline-offset-[4px] transition-[color,text-decoration-color] duration-200 hover:text-gray-900 hover:underline hover:decoration-brandPink-400"
              target="_blank"
            >
              GitHub
            </a>{" "}
            ·{" "}
            <a
              href="https://www.linkedin.com/in/travissanchez"
              className="inline-block decoration-2 underline-offset-[4px] transition-[color,text-decoration-color] duration-200 hover:text-gray-900 hover:underline hover:decoration-brandPink-400"
              target="_blank"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </nav>
    </header>
  );
}
