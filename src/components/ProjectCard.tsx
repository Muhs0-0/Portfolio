import { ArrowUpRight } from "lucide-react";
import type { Project } from "../data/projects";

const ACCENT_STYLES: Record<
  Project["accent"],
  { hoverBorder: string; soft: string; text: string; border: string }
> = {
  green: {
    hoverBorder: "hover:border-accent-border",
    soft: "bg-accent-soft",
    text: "text-accent",
    border: "border-accent-border",
  },
  blue: {
    hoverBorder: "hover:border-blue-border",
    soft: "bg-blue-soft",
    text: "text-blue-accent",
    border: "border-blue-border",
  },
  lime: {
    hoverBorder: "hover:border-lime-border",
    soft: "bg-lime-soft",
    text: "text-lime-accent",
    border: "border-lime-border",
  },
};

export default function ProjectCard({
  name,
  description,
  status,
  accent,
  logo,
  logoStyle,
  logoImgClassName = "h-4 w-auto object-contain",
  url,
}: Project) {
  const styles = ACCENT_STYLES[accent];

  return (
    <article
      className={`relative flex h-full flex-col rounded-lg border border-transparent bg-surface p-6 transition-colors duration-300 ${styles.hoverBorder}`}
    >
      {logo ? (
        logoStyle === "light" ? (
          <div className="mb-4 flex h-10 w-fit items-center rounded-md bg-white px-2.5">
            <img
              src={logo}
              alt={`${name} logo`}
              loading="lazy"
              decoding="async"
              className={logoImgClassName}
            />
          </div>
        ) : (
          <img
            src={logo}
            alt={`${name} logo`}
            loading="lazy"
            decoding="async"
            className="mb-4 h-10 w-10 rounded-md object-cover"
          />
        )
      ) : (
        <div
          className={`mb-4 flex h-10 w-10 items-center justify-center rounded-md border text-sm font-semibold ${styles.soft} ${styles.text} ${styles.border}`}
          aria-hidden
        >
          {name.charAt(0)}
        </div>
      )}

      <h3 className="flex items-center gap-1 text-lg font-semibold text-ink">
        {name}
        {url && <ArrowUpRight size={15} className="text-faint" aria-hidden />}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{description}</p>

      <span
        className={`mt-5 inline-flex w-fit items-center rounded-full border px-3 py-1 text-xs font-medium ${styles.soft} ${styles.text} ${styles.border}`}
      >
        {status}
      </span>

      {url && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${name}`}
          className="absolute inset-0 rounded-lg"
        />
      )}
    </article>
  );
}
