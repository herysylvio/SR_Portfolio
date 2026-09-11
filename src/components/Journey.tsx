import React from 'react';
import { ArrowUpRight, Play } from 'lucide-react';
import { Reveal } from './primitives/Reveal';
import { Section } from './primitives/Section';
import { SectionHeading } from './primitives/SectionHeading';
import { ButtonLink } from './primitives/Button';
import { journey } from '../data/site';

export function Journey() {
  return (
    <Section id="parcours">
      <Reveal>
        <SectionHeading
          lead="MON PARCOURS"
          accent="& MES ACQUIS"
          action={
          <div className="flex flex-wrap gap-3">
              <ButtonLink href="#contact" className="h-[46px] px-6">
                Me confier une mission
                <ArrowUpRight size={15} strokeWidth={1.75} />
              </ButtonLink>
              <ButtonLink href="#a-propos" variant="secondary" className="h-[46px] px-6">
                Voir la présentation
                <Play size={14} strokeWidth={1.75} />
              </ButtonLink>
            </div>
          } />
        
      </Reveal>

      <ol className="mt-14 border-t border-sr-border-dark">
        {journey.map((entry, index) =>
        <Reveal as="li" key={entry.id} delay={index * 0.05}>
            <div className="grid items-start gap-6 border-b border-sr-border-dark py-9 lg:grid-cols-12">
              <div className="lg:col-span-3">
                <span className="inline-block rounded-full border border-sr-border-dark bg-sr-light/[0.03] px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.16em] text-sr-light/50">
                  {entry.date}
                </span>
              </div>
              <div className="lg:col-span-5">
                <h3 className="text-xl font-medium uppercase text-sr-light lg:text-2xl">
                  <span className="text-sr-accent">{entry.accentWord}</span>{' '}
                  {entry.role}
                </h3>
                <p className="mt-2 text-sm text-sr-light/45">{entry.org}</p>
              </div>
              <p className="text-sm leading-relaxed text-sr-light/55 lg:col-span-4">
                {entry.description}
              </p>
            </div>
          </Reveal>
        )}
      </ol>

      <Reveal>
        <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.16em] text-sr-light/30">
          Dates, structures et intitulés à compléter avec votre parcours réel
        </p>
      </Reveal>
    </Section>);

}