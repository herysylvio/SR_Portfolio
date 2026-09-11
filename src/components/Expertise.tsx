import React from 'react';
import { Reveal } from './primitives/Reveal';
import { Section } from './primitives/Section';
import { SectionHeading } from './primitives/SectionHeading';
import { AbstractVisual } from './primitives/AbstractVisual';
import { expertise } from '../data/site';

export function Expertise() {
  return (
    <Section id="expertises">
      <Reveal>
        <SectionHeading lead="MES" accent="EXPERTISES" />
      </Reveal>

      <div className="mt-14 grid gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-sr-border-dark lg:sticky lg:top-16">
            <div className="aspect-[4/5] w-full">
              <AbstractVisual variant="grid" />
            </div>
          </div>
        </Reveal>

        <ol className="space-y-10">
          {expertise.map((block, index) =>
          <Reveal as="li" key={block.number} delay={index * 0.07}>
              <div className="flex gap-5">
                <span className="font-mono text-lg text-sr-accent">
                  {block.number}
                </span>
                <div className="border-l border-sr-border-dark pl-5">
                  <h3 className="sr-display text-[clamp(1.25rem,2.2vw,1.75rem)] font-medium uppercase text-sr-light">
                    <span className="text-sr-accent">{block.accentWord}</span>{' '}
                    {block.title}
                  </h3>
                  <p className="mt-4 max-w-[52ch] text-sm leading-relaxed text-sr-light/55">
                    {block.description}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {block.tags.map((tag) =>
                  <li
                    key={tag}
                    className="rounded-full border border-sr-border-dark bg-sr-light/[0.03] px-4 py-1.5 text-xs text-sr-light/65">
                    
                        {tag}
                      </li>
                  )}
                  </ul>
                </div>
              </div>
            </Reveal>
          )}
        </ol>
      </div>
    </Section>);

}