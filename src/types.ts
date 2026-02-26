export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies?: string[];
  tags: string[];
  link: string;
  repoLink?: string;
  type: "iOS" | "Android" | "Web" | "Cross-platform" | "Multiplatform";
}

export interface Article {
  id: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  link: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  description: string;
  technologies?: string[];
}
