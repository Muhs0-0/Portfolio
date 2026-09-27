import { Mail } from "lucide-react";
import type { ComponentType } from "react";
import { EMAIL, GITHUB_URL, LINKEDIN_URL, TIKTOK_URL } from "../config/contact";
import Reveal from "./Reveal";
import GithubIcon from "./icons/GithubIcon";
import LinkedinIcon from "./icons/LinkedinIcon";
import TikTokIcon from "./icons/TikTokIcon";

interface CollabLink {
  label: string;
  href: string;
  icon: ComponentType<{ size?: number; className?: string }>;
}

const LINKS: CollabLink[] = [
  { label: "Email Me", href: `mailto:${EMAIL}`, icon: Mail },
  { label: "GitHub", href: GITHUB_URL, icon: GithubIcon },
  { label: "LinkedIn", href: LINKEDIN_URL, icon: LinkedinIcon },
  { label: "TikTok", href: TIKTOK_URL, icon: TikTokIcon },
];

export default function Collaboration() {
  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 py-16 text-center sm:px-8 sm:py-24">
      <Reveal>
        <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          Want to build something together?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-balance text-sm leading-relaxed text-muted sm:text-base">
          I&apos;m open to interesting collaborations, technical projects,
          co-founder opportunities, and conversations with people building
          ambitious things.
        </p>
      </Reveal>

      <Reveal delay={100}>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {LINKS.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="flex items-center gap-2 rounded-md border border-border-strong px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:border-accent-border hover:text-accent"
            >
              <Icon size={16} />
              {label}
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
