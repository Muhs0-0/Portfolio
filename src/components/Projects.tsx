import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="building" className="mx-auto max-w-5xl px-6 py-16 sm:px-8 sm:py-24">
      <Reveal>
        <h2 className="text-2xl font-semibold tracking-tight text-ink sm:text-3xl">
          Currently Building
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={i * 80}>
            <ProjectCard {...project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
