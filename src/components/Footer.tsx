import React from 'react';
import { brand, navLinks } from '../data/site';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden px-5 pb-10 pt-16 sm:px-8 lg:px-14">
      <div className="mx-auto w-full max-w-[1180px]">
        <div className="relative flex min-h-[220px] items-center justify-center lg:min-h-[320px]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-sr-deep/40 blur-[130px]" />
          
          <img
            src={brand.monogram}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 w-[180px] -translate-x-1/2 -translate-y-1/2 opacity-25 lg:w-[240px]" />
          
          <p className="sr-display relative text-center text-[clamp(2.5rem,10vw,7rem)] font-medium uppercase leading-none">
            <span className="text-sr-light/85">{brand.firstName}</span>
            <span className="text-sr-accent">{brand.lastName}</span>
          </p>
        </div>

        <div className="mt-12 border-t border-sr-border-dark pt-8">
          <nav aria-label="Navigation du pied de page">
            <ul className="flex flex-wrap justify-center gap-x-7 gap-y-3">
              {navLinks.map((link) =>
              <li key={link.id}>
                  <a
                  href={`#${link.id}`}
                  className="text-sm text-sr-light/50 transition-colors hover:text-sr-light focus:outline-none focus-visible:ring-2 focus-visible:ring-sr-accent">
                  
                    {link.label}
                  </a>
                </li>
              )}
            </ul>
          </nav>

          <div className="mt-8 flex flex-col items-center gap-3 font-mono text-[10px] uppercase tracking-[0.16em] text-sr-light/30 sm:flex-row sm:justify-between">
            <p>© {year} {brand.name}</p>
            <p>{brand.fullRole}</p>
            <p>Conçu et développé à {brand.location}</p>
          </div>
        </div>
      </div>
    </footer>);

}