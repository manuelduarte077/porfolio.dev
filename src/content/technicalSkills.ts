import type { LucideIcon } from "lucide-react";
import { Code2, Database, Server, Smartphone } from "lucide-react";

export type TechnicalSkillIconId =
  | "smartphone"
  | "server"
  | "database"
  | "code2";

const technicalSkillIcons: Record<TechnicalSkillIconId, LucideIcon> = {
  smartphone: Smartphone,
  server: Server,
  database: Database,
  code2: Code2,
};

export type TechnicalSkillContent = {
  name: string;
  iconId: TechnicalSkillIconId;
  category: string;
};

export const technicalSkillsContent: TechnicalSkillContent[] = [
  { name: "Android / Kotlin / Java", iconId: "smartphone", category: "Mobile" },
  { name: "iOS / Swift", iconId: "smartphone", category: "Mobile" },
  { name: "C# / .NET / Ktor", iconId: "server", category: "Backend" },
  {
    name: "PostgreSQL / SQLServer / MongoDB",
    iconId: "database",
    category: "Database",
  },
  { name: "Azure, Docker, CI/CD", iconId: "code2", category: "DevOps" },
];

export function getTechnicalSkillIcon(id: TechnicalSkillIconId): LucideIcon {
  return technicalSkillIcons[id];
}
