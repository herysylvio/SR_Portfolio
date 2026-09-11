import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, Plus } from 'lucide-react';
import { Reveal } from './primitives/Reveal';
import { Section } from './primitives/Section';
import { SectionHeading } from './primitives/SectionHeading';
import { ButtonLink } from './primitives/Button';
import { AbstractVisual } from './primitives/AbstractVisual';
import { services } from '../data/site';

export function Services() {
  const [openId, setOpenId] = useState<string>(services[0].id);

  return (
    <Section id="services">
      <Reveal>
        <SectionHeading
          lead="MES"
          accent="SERVICES"
          action={
          <ButtonLink href="#contact" variant="secondary" className="h-[46px] px-6">
              Discuter d’un besoin
              <ArrowUpRight size={15} strokeWidth={1.75} />
            </ButtonLink>
          } />
        
      </Reveal>

      <div className="mt-14 border-t border-sr-border-dark">
        {services.map((service, index) => {
          const isOpen = openId === service.id;
          return (
            <Reveal key={service.id} delay={index * 0.04}>
              <div className="border-b border-sr-border-dark">
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenId(isOpen ? '' : service.id)}
                    aria-expanded={isOpen}
                    aria-controls={`service-panel-${service.id}`}
                    className="group flex w-full items-center justify-between gap-6 py-7 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-sr-accent">
                    
                    <span className="sr-display text-[clamp(1.5rem,3.2vw,2.5rem)] font-medium uppercase">
                      <span
                        className={
                        isOpen ? 'text-sr-accent' : 'text-sr-light transition-colors group-hover:text-sr-accent'
                        }>
                        
                        {service.accentWord}
                      </span>{' '}
                      <span className="text-sr-light/85">{service.title}</span>
                    </span>
                    <span
                      aria-hidden="true"
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
                      isOpen ?
                      'rotate-45 border-sr-accent text-sr-accent' :
                      'border-sr-border-dark text-sr-light/60 group-hover:border-sr-accent/60'}`
                      }>
                      
                      <Plus size={17} strokeWidth={1.5} />
                    </span>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen &&
                  <motion.div
                    id={`service-panel-${service.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden">
                    
                      <div className="grid items-center gap-10 pb-10 lg:grid-cols-2">
                        <div>
                          <p className="max-w-[48ch] text-base leading-relaxed text-sr-light/60">
                            {service.description}
                          </p>
                          <ul className="mt-6 space-y-2.5">
                            {service.deliverables.map((item) =>
                          <li
                            key={item}
                            className="flex items-center gap-3 text-sm text-sr-light/70">
                            
                                <span
                              aria-hidden="true"
                              className="h-1 w-1 rounded-full bg-sr-accent" />
                            
                                {item}
                              </li>
                          )}
                          </ul>
                        </div>
                        <div className="relative overflow-hidden rounded-2xl border border-sr-border-dark">
                          <div className="aspect-[16/9] w-full">
                            <AbstractVisual variant={service.visual} />
                          </div>
                          <span className="absolute inset-0 flex items-center justify-center">
                            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-sr-light/20 bg-sr-night/40 backdrop-blur-sm">
                              <ArrowUpRight
                              size={18}
                              strokeWidth={1.5}
                              className="text-sr-light" />
                            
                            </span>
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  }
                </AnimatePresence>
              </div>
            </Reveal>);

        })}
      </div>
    </Section>);

}