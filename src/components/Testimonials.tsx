import React from 'react';
import { Quote } from 'lucide-react';
import { Reveal } from './primitives/Reveal';
import { Section } from './primitives/Section';
import { SectionHeading } from './primitives/SectionHeading';
import { AbstractVisual } from './primitives/AbstractVisual';
import { testimonials } from '../data/site';
import type { VisualVariant } from '../types/site';

const fillers: VisualVariant[] = ['signal', 'grid'];

export function Testimonials() {
  return (
    <Section id="temoignages">
      <Reveal>
        <SectionHeading lead="PAROLES" accent="CLIENTS" />
      </Reveal>

      <div className="mt-14 grid gap-5 lg:grid-cols-4">
        <Reveal className="lg:col-span-1">
          <div className="h-full overflow-hidden rounded-2xl border border-sr-border-dark">
            <div className="aspect-[3/4] h-full w-full">
              <AbstractVisual variant={fillers[0]} />
            </div>
          </div>
        </Reveal>

        {testimonials.map((testimonial, index) =>
        <Reveal key={testimonial.id} delay={0.06 + index * 0.06}>
            <figure className="flex h-full flex-col justify-between rounded-2xl border border-sr-border-dark bg-sr-light/[0.02] p-7">
              <Quote
              size={34}
              strokeWidth={1.25}
              className="text-sr-accent/60"
              aria-hidden="true" />
            
              <blockquote className="mt-8 text-sm leading-relaxed text-sr-light/80">
                {testimonial.quote}
              </blockquote>
              <figcaption className="mt-8">
                <p className="text-base font-medium text-sr-accent">
                  {testimonial.author}
                </p>
                <p className="mt-1 text-sm text-sr-light/50">{testimonial.role}</p>
              </figcaption>
            </figure>
          </Reveal>
        )}
      </div>

      <Reveal>
        <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.16em] text-sr-light/30">
          Témoignages en attente de validation — à remplacer par des retours réels
        </p>
      </Reveal>
    </Section>);

}