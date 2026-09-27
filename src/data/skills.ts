export interface SkillCategory {
  title: string;
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    items: ["Python", "JavaScript", "TypeScript"],
  },
  {
    title: "Frontend",
    items: ["React", "React Native", "Expo", "Vite", "Tailwind CSS"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express", "FastAPI", "REST APIs"],
  },
  {
    title: "Databases",
    items: ["Firebase / Firestore", "MongoDB", "PostgreSQL", "Prisma"],
  },
  {
    title: "AI",
    items: [
      "AI API integration",
      "LLM applications",
      "AI-powered automation",
      "AI-assisted development",
    ],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "Vercel", "Railway"],
  },
];
