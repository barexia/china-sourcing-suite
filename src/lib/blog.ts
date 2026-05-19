import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const blogDir = path.join(process.cwd(), "src", "content", "blog");

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
}

export function getAllBlogSlugs(): string[] {
  if (!fs.existsSync(blogDir)) return [];
  return fs
    .readdirSync(blogDir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}

export function getBlogPost(slug: string): BlogPost | null {
  const filePath = path.join(blogDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const html = marked.parse(content);

  return {
    slug,
    title: data.title || slug,
    date: data.date || "",
    excerpt: data.excerpt || "",
    content: html as string,
  };
}

export function getAllBlogPosts(): BlogPost[] {
  return getAllBlogSlugs()
    .map(getBlogPost)
    .filter((p): p is BlogPost => p !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
