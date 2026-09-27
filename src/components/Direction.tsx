import Reveal from "./Reveal";

export default function Direction() {
  return (
    <section id="direction" className="bg-surface/40">
      <div className="mx-auto max-w-3xl px-6 py-16 text-center sm:px-8 sm:py-24">
        <Reveal>
          <p className="text-2xl font-medium tracking-tight text-ink sm:text-3xl">
            Building the systems <span className="text-accent">Africa</span> needs.
          </p>
        </Reveal>
        <Reveal delay={100}>
          <p className="mx-auto mt-5 max-w-xl text-balance text-sm leading-relaxed text-muted sm:text-base">
            I&apos;m focused on building software products, AI systems and
            companies that solve practical problems.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
