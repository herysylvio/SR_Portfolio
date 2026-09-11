import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from './primitives/Reveal';
import { Section } from './primitives/Section';
import { SectionHeading } from './primitives/SectionHeading';
import { ButtonLink } from './primitives/Button';
import { AbstractVisual } from './primitives/AbstractVisual';
import { projects } from '../data/site';
import type { Project } from '../types/site';

function ProjectCard({ project }: {project: Project;}) {
  return (
    <article className="group">
      <div className="relative overflow-hidden rounded-2xl border border-sr-border-dark">
        <div className="aspect-[4/3] w-full transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]">
          <AbstractVisual variant={project.visual} />
        </div>
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-sr-deep/0 transition-colors duration-500 group-hover:bg-sr-deep/30" />
        
        <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          <span className="flex h-14 w-14 items-center justify-center rounded-full border border-sr-light/25 bg-sr-night/50 backdrop-blur-sm">
            <ArrowUpRight size={18} strokeWidth={1.5} className="text-sr-light" />
          </span>
        </span>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <span className="rounded-full border border-sr-border-dark bg-sr-light/[0.03] px-4 py-1.5 text-xs text-sr-light/70">
          {project.category}
        </span>
        <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-sr-light/40">
          <span aria-hidden="true" className="h-1 w-1 rounded-full bg-sr-accent" />
          {project.date}
        </span>
      </div>

      <h3 className="mt-4 text-xl font-medium uppercase leading-snug text-sr-light transition-colors duration-300 group-hover:text-sr-accent lg:text-2xl">
        {project.title}
      </h3>
      <p className="mt-3 max-w-[46ch] text-sm leading-relaxed text-sr-light/50">
        {project.summary}
      </p>
    </article>);

}

export function Projects() {
  const left = projects.filter((_, index) => index % 2 === 0);
  const right = projects.filter((_, index) => index % 2 === 1);

  return (
    <Section id="realisations">
      <Reveal>
        <SectionHeading
          lead="MES"
          accent="RÉALISATIONS"
          action={
          <ButtonLink href="#etudes-de-cas" variant="secondary" className="h-[46px] px-6">
              Voir les études de cas
              <ArrowUpRight size={15} strokeWidth={1.75} />
            </ButtonLink>
          } />
        
      </Reveal>

      <Reveal delay={0.06}>
        <p className="mt-6 max-w-[62ch] text-sm leading-relaxed text-sr-light/45">
          Les visuels sont des compositions abstraites originales : les captures
          réelles viendront les remplacer au fur et à mesure des accords clients.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-14 md:grid-cols-2 md:gap-10">
        <div className="space-y-14">
          {left.map((project, index) =>
          <Reveal key={project.id} delay={index * 0.05}>
              <ProjectCard project={project} />
            </Reveal>
          )}
        </div>
        <div className="space-y-14 md:pt-24">
          {right.map((project, index) =>
          <Reveal key={project.id} delay={index * 0.05}>
              <ProjectCard project={project} />
            </Reveal>
          )}
        </div>
      </div>
    </Section>);

}