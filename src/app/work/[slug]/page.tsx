import { notFound } from "next/navigation";
import Container from "@/components/Container";
import MDXRenderer from "@/components/MDXRenderer";
import { getWorkBySlug } from "@/lib/mdx";

interface WorkPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function WorkPage({ params }: WorkPageProps) {
  const { slug } = await params;

  try {
    const { content, metadata } = getWorkBySlug(slug);

    return (
      <Container className="max-w-4xl py-16">
        <article className="rounded-3xl bg-white/80 px-8 py-10 shadow-sm">
          <header className="mb-10 max-w-3xl">
            <h1 className="mb-4 text-4xl font-bold tracking-tight text-brandDark-900 sm:text-5xl">
              {metadata.title}
            </h1>
            <p className="text-lg leading-8 text-slate-600">
              {metadata.description}
            </p>
          </header>
          <MDXRenderer source={content} />
        </article>
      </Container>
    );
  } catch {
    notFound();
  }
}
