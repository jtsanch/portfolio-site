"use client";

import { ReactNode, useEffect, useMemo, useRef } from "react";
import mermaid from "mermaid";

interface MermaidProps {
  chart?: string;
  children?: ReactNode;
}

let mermaidInitialized = false;

export default function Mermaid({ chart, children }: MermaidProps) {
  const ref = useRef<HTMLDivElement>(null);
  const source = useMemo(() => {
    if (typeof chart === "string" && chart.trim()) return chart;
    if (typeof children === "string" && children.trim()) return children;
    return "";
  }, [chart, children]);

  useEffect(() => {
    if (!ref.current || !source) return;

    if (!mermaidInitialized) {
      mermaid.initialize({
        startOnLoad: false,
        theme: "default",
        securityLevel: "loose",
      });
      mermaidInitialized = true;
    }

    const id = `mermaid-${Math.random().toString(36).slice(2)}`;

    mermaid
        .render(id, source)
        .then(({ svg }) => {
          if (ref.current) ref.current.innerHTML = svg;
        })
        .catch((error) => {
          console.error("Failed to render Mermaid chart:", error);
        });
  }, [source]);

  return <div ref={ref} className="my-8 overflow-x-auto" />;
}
