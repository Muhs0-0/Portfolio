import { TrendingUp } from "lucide-react";
import { improvingItems } from "../data/improving";
import Reveal from "./Reveal";

export default function CurrentlyImproving() {
  return (
    <section id="improving" className="mx-auto max-w-5xl px-6 pb-16 sm:px-8 sm:pb-24">
      <Reveal>
        <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          Currently Improving
        </h2>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
          Areas I&apos;m actively strengthening as an engineer right now.
        </p>
      </Reveal>

      <Reveal delay={80}>
        <ul className="mt-8 flex flex-wrap gap-2.5">
          {improvingItems.map((item) => (
            <li
              key={item}
              className="flex items-center gap-1.5 rounded-md border border-dashed border-border-strong px-3 py-1.5 text-sm text-muted"
            >
              <TrendingUp size={14} className="text-accent" />
              {item}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
