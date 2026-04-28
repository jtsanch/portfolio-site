import { MDXRemote } from "next-mdx-remote/rsc";
import Mermaid from "@/components/Mermaid";

interface MDXRendererProps {
  source: string;
  components?: Record<string, React.ComponentType<any>>;
}

const defaultComponents = {
  h1: (props: React.ComponentPropsWithoutRef<"h1">) => (
    <h1
      className="mt-8 mb-4 text-3xl font-bold text-brandDark-900"
      {...props}
    />
  ),
  h2: (props: React.ComponentPropsWithoutRef<"h2">) => (
    <h2
      className="mt-8 mb-3 text-2xl font-semibold text-brandDark-900"
      {...props}
    />
  ),
  p: (props: React.ComponentPropsWithoutRef<"p">) => (
    <p
      className="mb-4 text-slate-600 leading-relaxed"
      {...props}
    />
  ),
  ul: (props: React.ComponentPropsWithoutRef<"ul">) => (
    <ul
      className="mb-4 list-disc pl-6 text-slate-600"
      {...props}
    />
  ),
  ol: (props: React.ComponentPropsWithoutRef<"ol">) => (
    <ol
      className="mb-4 list-decimal pl-6 text-slate-600"
      {...props}
    />
  ),
  li: (props: React.ComponentPropsWithoutRef<"li">) => (
    <li
      className="mb-2"
      {...props}
    />
  ),
  blockquote: (props: React.ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote
      className="mb-4 rounded-2xl border-l-4 border-brandPink-200 bg-brandPink-50/60 px-5 py-4 text-slate-600"
      {...props}
    />
  ),
  pre: (props: React.ComponentPropsWithoutRef<"pre">) => (
    <pre
      className="mb-6 overflow-x-auto rounded-2xl bg-brandDark-900 px-5 py-4 text-sm text-white"
      {...props}
    />
  ),
  code: (props: React.ComponentPropsWithoutRef<"code">) => {
    return (
      <code
        className="rounded bg-brandDark-100 px-1.5 py-0.5 text-sm text-brandDark-700"
        {...props}
      />
    );
  }
};

const mdxComponents = {
  ...defaultComponents,
  Mermaid,
}

export default function MDXRenderer({
  source,
  components = {
  },
}: MDXRendererProps) {
  return (
    <div className="max-w-3xl">
      <MDXRemote
        source={source}
        components={{ ...mdxComponents, ...components }}
      />
    </div>
  );
}
