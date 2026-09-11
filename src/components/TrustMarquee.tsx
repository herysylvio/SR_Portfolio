import React from 'react';
import { Reveal } from './primitives/Reveal';
import { trustWords } from '../data/site';

export function TrustMarquee() {
  const track = [...trustWords, ...trustWords];

  return (
    <section
      aria-label="Profils accompagnés"
      className="border-y border-sr-border-dark py-14">
      
      <Reveal>
        <p className="px-5 text-center font-mono text-[11px] uppercase leading-relaxed tracking-[0.18em] text-sr-light/40">
          J’accompagne celles et ceux qui font avancer leurs projets seuls ou
          en petite équipe
        </p>
      </Reveal>

      <div className="sr-edge-fade mt-10 overflow-hidden">
        <ul className="sr-marquee-track flex w-max animate-sr-marquee items-center gap-16 px-8">
          {track.map((word, index) =>
          <li
            key={`${word}-${index}`}
            aria-hidden={index >= trustWords.length}
            className="flex shrink-0 items-center gap-4 text-xl font-medium text-sr-light/35 sm:text-2xl">
            
              <span
              aria-hidden="true"
              className="h-2 w-2 rotate-45 border border-sr-accent/60" />
            
              {word}
            </li>
          )}
        </ul>
      </div>
    </section>);

}