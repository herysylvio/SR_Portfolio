import React from 'react';
import { Clock, GraduationCap, ShieldCheck, Sparkles } from 'lucide-react';
import { Reveal } from './primitives/Reveal';
import { Section } from './primitives/Section';
import { SectionHeading } from './primitives/SectionHeading';
import { AbstractVisual } from './primitives/AbstractVisual';
import { whyMe } from '../data/site';

const icons = { Clock, Sparkles, GraduationCap, ShieldCheck } as const;

export function WhyMe() {
  return (
    <Section label="Pourquoi travailler avec moi">
      <Reveal>
        <SectionHeading lead="POURQUOI" accent="MOI" />
      </Reveal>

      <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {whyMe.map((item, index) => {
          const Icon = icons[item.icon as keyof typeof icons];
          return (
            <Reveal as="li" key={item.id} delay={index * 0.06}>
              <div className="group h-full rounded-2xl border border-sr-border-dark bg-sr-light/[0.02] p-7 transition-colors duration-500 hover:border-sr-accent/40">
                <Icon
                  size={22}
                  strokeWidth={1.5}
                  className="text-sr-accent transition-transform duration-500 group-hover:-translate-y-1" />
                
                <h3 className="mt-6 text-lg font-medium uppercase leading-tight text-sr-light">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-sr-light/50">
                  {item.description}
                </p>
                <div className="mt-7 overflow-hidden rounded-xl border border-sr-border-dark">
                  <div className="aspect-[4/3] w-full">
                    <AbstractVisual variant={item.visual} />
                  </div>
                </div>
              </div>
            </Reveal>);

        })}
      </ul>
    </Section>);

}