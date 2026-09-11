import React from 'react';
import { Reveal } from './primitives/Reveal';
import { Section } from './primitives/Section';
import { SectionHeading } from './primitives/SectionHeading';
import { AbstractVisual } from './primitives/AbstractVisual';
import { articles } from '../data/site';

export function Resources() {
  return (
    <Section id="ressources">
      <Reveal>
        <SectionHeading lead="RESSOURCES" accent="& GUIDES" />
      </Reveal>

      <ul className="mt-14 grid gap-10 md:grid-cols-2">
        {articles.map((article, index) =>
        <Reveal as="li" key={article.id} delay={index * 0.07}>
            <article className="group">
              <div className="overflow-hidden rounded-2xl border border-sr-border-dark">
                <div className="aspect-[16/10] w-full transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]">
                  <AbstractVisual variant={article.visual} />
                </div>
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                <span className="rounded-full border border-sr-border-dark bg-sr-light/[0.03] px-4 py-1.5 text-xs text-sr-light/70">
                  {article.tag}
                </span>
                <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-sr-light/40">
                  <span aria-hidden="true" className="h-1 w-1 rounded-full bg-sr-accent" />
                  {article.readTime}
                </span>
              </div>
              <h3 className="mt-4 text-xl font-medium text-sr-light transition-colors duration-300 group-hover:text-sr-accent lg:text-2xl">
                {article.title}
              </h3>
            </article>
          </Reveal>
        )}
      </ul>

      <Reveal>
        <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.16em] text-sr-light/30">
          Articles à rédiger — la structure du blog est prête
        </p>
      </Reveal>
    </Section>);

}