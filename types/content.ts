export interface Post {
  title: string;
  date: string;
  summary: string;
  slug: string;
}

export interface CaseStudy {
  title: string;
  date: string;
  tags: string[];
  slug: string;
  summary: string;
  result?: string;
}
