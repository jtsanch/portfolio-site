import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

interface ContentMetadata {
  title: string;
  description: string;
}

interface ContentEntry {
  content: string;
  metadata: ContentMetadata;
}

function getContentDirectory(section: string) {
  return path.join(process.cwd(), "content", section);
}

export function getContentBySectionAndSlug(
  section: string,
  slug: string,
): ContentEntry {
  const filePath = path.join(getContentDirectory(section), `${slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { content, data } = matter(fileContents);

  return {
    content,
    metadata: {
      title: String(data.title ?? ""),
      description: String(data.description ?? ""),
    },
  };
}

export function getWorkBySlug(slug: string): ContentEntry {
  return getContentBySectionAndSlug("work", slug);
}

export function getApproachBySlug(slug: string): ContentEntry {
  return getContentBySectionAndSlug("approach", slug);
}
