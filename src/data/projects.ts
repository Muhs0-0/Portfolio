export type ProjectAccent = "green" | "blue" | "lime";

export interface Project {
  name: string;
  description: string;
  status: string;
  accent: ProjectAccent;
  /** Path to a real product logo. Omit to fall back to a monogram badge. */
  logo?: string;
  /** "dark" logos already match the card background; "light" logos need a white chip behind them. */
  logoStyle?: "dark" | "light";
  /** Override the inner image size for a "light" logo (e.g. a square icon needs more height than a wide wordmark). */
  logoImgClassName?: string;
  /** Live product URL. Omit while a project has no public site yet — the card only becomes clickable once this is set. */
  url?: string;
}

export const projects: Project[] = [
  {
    name: "QAF Inventory",
    description:
      "Inventory and bookkeeping software built for businesses to manage stock, sales, debts, expenses, revenue and profit.",
    status: "Live / Building",
    accent: "green",
    logo: "/qaf-inventory-logo.webp",
    logoStyle: "dark",
    url: "https://qaf-inventory-website.vercel.app/",
  },
  {
    name: "Ubora AI",
    description:
      "An AI-powered business employee designed to help businesses handle customer conversations, leads, catalogues, orders, appointments and repetitive business tasks.",
    status: "Building",
    accent: "blue",
    logo: "/ubora-ai-logo.webp",
    logoStyle: "light",
  },
  {
    name: "COVA Connect",
    description:
      "A platform designed to help people with skills, ideas and projects find the right people to collaborate and build with.",
    status: "Building",
    accent: "lime",
    logo: "/cova-connect-logo.webp",
    logoStyle: "light",
    logoImgClassName: "h-7 w-auto object-contain",
  },
];
