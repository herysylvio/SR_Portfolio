import React from 'react';
import { Mail, Phone, Play } from 'lucide-react';
import { Reveal } from './primitives/Reveal';
import { Section } from './primitives/Section';
import { AbstractVisual } from './primitives/AbstractVisual';
import { brand, stats, tools } from '../data/site';

export function Intro() {
  return (
    <Section id="a-propos">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-sr-border-dark">
            <div className="aspect-video w-full">
              <AbstractVisual variant="presence" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="flex h-20 w-20 items-center justify-center rounded-full border border-sr-light/25 bg-sr-night/50 backdrop-blur-sm">
                <Play size={22} strokeWidth={1.5} className="ml-1 text-sr-light" />
              </span>
            </div>
            <p className="absolute bottom-4 left-4 font-mono text-[10px] uppercase tracking-[0.18em] text-sr-light/50">
              Vidéo de présentation · à venir
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="sr-display text-[clamp(1.5rem,2.6vw,2.25rem)] font-medium uppercase leading-[1.15] text-sr-light">
            Je suis un <span className="text-sr-accent">assistant digital polyvalent</span>{' '}
            qui aide les indépendants et les petites équipes à avancer.
            <span className="block font-normal normal-case text-sr-light/45">
              Des tâches absorbées, des outils installés, des projets menés
              jusqu’à la mise en œuvre.
            </span>
          </p>

          <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:gap-10">
            <a
              href={`tel:${brand.phone.replace(/\s/g, '')}`}
              className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-sr-accent">
              
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-sr-border-dark text-sr-accent">
                <Phone size={17} strokeWidth={1.5} />
              </span>
              <span>
                <span className="block text-sm font-medium text-sr-light">
                  Appeler
                </span>
                <span className="block text-sm text-sr-light/50">
                  {brand.phone}
                </span>
              </span>
            </a>

            <a
              href={`mailto:${brand.email}`}
              className="flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-sr-accent">
              
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-sr-border-dark text-sr-accent">
                <Mail size={17} strokeWidth={1.5} />
              </span>
              <span>
                <span className="block text-sm font-medium text-sr-light">
                  Écrire
                </span>
                <span className="block text-sm text-sr-light/50">
                  {brand.email}
                </span>
              </span>
            </a>
          </div>
        </Reveal>
      </div>

      <dl className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) =>
        <Reveal key={stat.label} delay={index * 0.06}>
            <div className="h-full rounded-2xl border border-sr-border-dark bg-sr-light/[0.02] p-7">
              <dd className="sr-display text-5xl font-medium text-sr-accent">
                {stat.value}
              </dd>
              <dt className="mt-4 font-mono text-[10px] uppercase tracking-[0.16em] text-sr-light/45">
                {stat.label}
              </dt>
            </div>
          </Reveal>
        )}
      </dl>

      <Reveal delay={0.1}>
        <div className="mt-12">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-sr-light/35">
            Outils du quotidien
          </p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {tools.map((tool) =>
            <li
              key={tool}
              className="rounded-full border border-sr-border-dark px-4 py-1.5 text-xs text-sr-light/60">
              
                {tool}
              </li>
            )}
          </ul>
        </div>
      </Reveal>
    </Section>);

}