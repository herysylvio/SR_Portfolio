import React from 'react';
import { Compass, Hammer, PencilRuler, Rocket } from 'lucide-react';
import { Reveal } from './primitives/Reveal';
import { Section } from './primitives/Section';
import { SectionHeading } from './primitives/SectionHeading';
import { processSteps } from '../data/site';

const icons = { Compass, PencilRuler, Hammer, Rocket } as const;

export function Method() {
  return (
    <Section id="methode">
      <Reveal>
        <SectionHeading lead="MA MÉTHODE DE" accent="TRAVAIL" />
      </Reveal>

      <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step, index) => {
          const Icon = icons[step.icon as keyof typeof icons];
          return (
            <Reveal as="li" key={step.number} delay={index * 0.06}>
              <div className="group flex h-full flex-col justify-between rounded-2xl border border-sr-border-dark bg-sr-light/[0.02] p-7 transition-colors duration-500 hover:border-sr-accent/40">
                <div className="flex items-start justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-sr-border-dark text-sr-accent">
                    <Icon size={18} strokeWidth={1.5} />
                  </span>
                  <span
                    aria-hidden="true"
                    className="sr-display text-5xl font-medium text-sr-light/10 transition-colors duration-500 group-hover:text-sr-accent/25">
                    
                    {step.number}
                  </span>
                </div>
                <div className="mt-16">
                  <h3 className="text-xl font-medium text-sr-light">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-sr-light/50">
                    {step.description}
                  </p>
                </div>
              </div>
            </Reveal>);

        })}
      </ol>
    </Section>);

}