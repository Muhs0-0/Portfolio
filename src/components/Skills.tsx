import { skillCategories } from "../data/skills";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-16 sm:px-8 sm:py-24">
      <Reveal>
        <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          Skills &amp; Technologies
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
          Technologies I work with day to day to design, build and ship
          products.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category, i) => (
          <Reveal key={category.title} delay={i * 60}>
            <h3 className="text-sm font-medium uppercase tracking-wide text-faint">
              {category.title}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {category.items.map((item) => (
                <li
                  key={item}
                  className="rounded-md bg-surface px-3 py-1.5 text-sm text-muted transition-colors hover:bg-surface-hover hover:text-ink"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
