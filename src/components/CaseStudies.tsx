import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Reveal } from './primitives/Reveal';
import { Section } from './primitives/Section';
import { SectionHeading } from './primitives/SectionHeading';
import { AbstractVisual } from './primitives/AbstractVisual';
import { caseStudies } from '../data/site';

export function CaseStudies() {
  return (
    <Section id="etudes-de-cas">
      <Reveal>
        <SectionHeading lead="ÉTUDES DE" accent="CAS" />
      </Reveal>

      <div className="mt-14 space-y-6">
        {caseStudies.map((study, index) =>
        <Reveal key={study.id} delay={index * 0.05}>
            <article className="group grid gap-8 rounded-3xl border border-sr-border-dark bg-sr-light/[0.02] p-5 transition-colors duration-500 hover:border-sr-accent/35 lg:grid-cols-2 lg:p-7">
              <div className="relative overflow-hidden rounded-2xl border border-sr-border-dark">
                <div className="aspect-[4/3] h-full w-full transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]">
                  <AbstractVisual variant={study.visual} />
                </div>
                <span className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  <span className="flex items-center gap-2 rounded-full border border-sr-light/25 bg-sr-night/60 px-5 py-2.5 text-xs text-sr-light backdrop-blur-sm">
                    Voir l’étude de cas
                    <ArrowRight size={14} strokeWidth={1.75} />
                  </span>
                </span>
              </div>

              <div className="flex flex-col justify-center lg:py-4 lg:pr-4">
                <h3 className="sr-display text-[clamp(1.35rem,2.4vw,2rem)] font-medium uppercase text-sr-light">
                  <span className="text-sr-accent">{study.accentWord}</span>{' '}
                  {study.title}
                </h3>
                <p className="mt-5 max-w-[54ch] text-sm leading-relaxed text-sr-light/55">
                  {study.summary}
                </p>

                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  <div>
                    <p className="text-sm font-medium text-sr-light">Enjeu</p>
                    <p className="mt-2 text-sm leading-relaxed text-sr-light/50">
                      {study.challenge}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-sr-light">Réponse</p>
                    <p className="mt-2 text-sm leading-relaxed text-sr-light/50">
                      {study.solution}
                    </p>
                  </div>
                </div>

                <dl className="mt-8 flex flex-wrap gap-8 border-t border-sr-border-dark pt-6">
                  {study.metrics.map((metric) =>
                <div key={metric.label} className="flex items-center gap-4">
                      <dd className="sr-display text-3xl font-medium text-sr-light">
                        {metric.value}
                      </dd>
                      <dt className="max-w-[16ch] font-mono text-[10px] uppercase leading-relaxed tracking-[0.14em] text-sr-light/40">
                        {metric.label}
                      </dt>
                    </div>
                )}
                </dl>
              </div>
            </article>
          </Reveal>
        )}
      </div>

      <Reveal>
        <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.16em] text-sr-light/30">
          Résultats chiffrés à confirmer avec chaque client avant publication
        </p>
      </Reveal>
    </Section>);

}