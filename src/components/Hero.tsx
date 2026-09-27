import { ArrowRight, Mail } from "lucide-react";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] flex-col items-center justify-center px-6 pt-24 pb-16 text-center sm:px-8"
    >
      <Reveal>
        <div className="relative mx-auto mb-8 w-fit">
          <div
            aria-hidden
            className="absolute inset-0 -z-10 scale-150 rounded-full bg-accent/10 blur-2xl"
          />
          <img
            src="/mypic.webp"
            alt="Portrait of Muhsin Hassan"
            width={96}
            height={96}
            className="h-24 w-24 rounded-full border border-border-strong object-cover"
          />
        </div>
      </Reveal>

      <Reveal delay={100}>
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-semibold tracking-tight text-ink sm:text-5xl">
            Muhsin Hassan
          </h1>

          <p className="mt-3 text-lg text-accent sm:text-xl">
            Software Developer &amp; Founder
          </p>

          <p className="mt-5 max-w-xl text-balance text-base leading-relaxed text-muted sm:text-lg">
            Building software products, AI systems, and companies.
          </p>

          <p className="mt-4 max-w-lg text-balance text-sm leading-relaxed text-faint sm:text-base">
            I build software products and AI-powered systems, and document
            the journey along the way.
          </p>

          <div className="mt-10 flex w-full max-w-sm flex-col items-center gap-3 sm:w-auto sm:max-w-none sm:flex-row">
            <a
              href="#building"
              className="group flex w-full items-center justify-center gap-2 rounded-md bg-accent px-6 py-3 text-sm font-medium text-bg transition-colors hover:bg-accent-strong sm:w-auto"
            >
              View What I&apos;m Building
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </a>
            <a
              href="#contact"
              className="flex w-full items-center justify-center gap-2 rounded-md border border-border-strong px-6 py-3 text-sm font-medium text-ink transition-colors hover:border-accent-border hover:text-accent sm:w-auto"
            >
              <Mail size={16} />
              Get In Touch
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
