export interface Project {
  id: string;
  title: string;
  technologies?: string[];
  tags: string[];
  link?: string;
  repoLink?: string;
  type: "iOS" | "Android" | "Web" | "Cross-platform" | "Multiplatform";
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  period: string;
  technologies?: string[];
  location?: "remote" | "on-site" | "hybrid";
  type?: "full-time" | "part-time" | "contract" | "freelance";
}
