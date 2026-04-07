import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { Post, CaseStudy } from '../types/content';

export function getAllPosts(): Post[] {
  const postsDir = path.join(process.cwd(), 'content/posts');
  if (!fs.existsSync(postsDir)) return [];
  return fs
    .readdirSync(postsDir)
    .filter((f) => f.endsWith('.md'))
    .map((file) => {
      const slug = file.replace(/\.md$/, '');
      const raw = fs.readFileSync(path.join(postsDir, file), 'utf8');
      const { data } = matter(raw);
      return { slug, ...(data as Omit<Post, 'slug'>) };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getAllCaseStudies(): CaseStudy[] {
  const csDir = path.join(process.cwd(), 'content/case-studies');
  if (!fs.existsSync(csDir)) return [];
  return fs
    .readdirSync(csDir)
    .filter((f) => f.endsWith('.md'))
    .map((file) => {
      const slug = file.replace(/\.md$/, '');
      const raw = fs.readFileSync(path.join(csDir, file), 'utf8');
      const { data } = matter(raw);
      return { slug, ...(data as Omit<CaseStudy, 'slug'>) };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}
