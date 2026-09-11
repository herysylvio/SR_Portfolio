import React from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Facebook,
  Linkedin,
  Mail,
  MessageCircle,
  MousePointer2 } from
'lucide-react';
import { ButtonLink } from './primitives/Button';
import { GlowBackdrop } from './primitives/GlowBackdrop';
import { brand, socials } from '../data/site';

const socialIcons = { Linkedin, Facebook, MessageCircle, Mail } as const;

const enter = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] }
  })
};

function MonogramPanel() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-sr-border-dark bg-sr-light/[0.02] p-4">
      <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden rounded-2xl border border-sr-border-dark bg-sr-night">
        <div
          aria-hidden="true"
          className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-sr-deep/60 blur-[90px]" />
        
        <div
          aria-hidden="true"
          className="absolute bottom-10 right-8 h-40 w-40 rotate-[18deg] rounded-[36px] border border-sr-accent/30" />
        
        <div
          aria-hidden="true"
          className="absolute left-10 top-12 h-24 w-24 rotate-[18deg] rounded-[24px] border border-sr-border-dark" />
        
        <img
          src={brand.monogram}
          alt=""
          aria-hidden="true"
          className="relative w-1/2 animate-sr-drift opacity-95" />
        
      </div>

      <ul className="mt-4 flex justify-center gap-2">
        {socials.map((social) => {
          const Icon = socialIcons[social.icon as keyof typeof socialIcons];
          return (
            <li key={social.label}>
              <a
                href={social.href}
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-sr-border-dark text-sr-light/70 transition-colors duration-300 hover:border-sr-accent/60 hover:text-sr-light focus:outline-none focus-visible:ring-2 focus-visible:ring-sr-accent">
                
                <Icon size={16} strokeWidth={1.5} />
              </a>
            </li>);

        })}
      </ul>
    </div>);

}

export function Hero() {
  return (
    <section
      id="accueil"
      className="relative overflow-hidden px-5 pb-20 pt-28 sm:px-8 lg:px-14 lg:pb-28 lg:pt-32">
      
      <GlowBackdrop x="70%" y="40%" size={900} opacity={0.45} />

      <div className="relative mx-auto grid w-full max-w-[1180px] items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <motion.p
            custom={0}
            variants={enter}
            initial="hidden"
            animate="show"
            className="flex items-center gap-2 text-sm text-sr-light/60">
            
            <MousePointer2 size={15} strokeWidth={1.5} className="text-sr-accent" />
            Bonjour, je suis
          </motion.p>

          <motion.h1
            custom={1}
            variants={enter}
            initial="hidden"
            animate="show"
            className="sr-display mt-4 text-[clamp(3rem,8.5vw,7rem)] font-medium uppercase text-sr-light">
            
            {brand.firstName}
            <span className="block text-sr-accent">{brand.lastName}</span>
          </motion.h1>

          <motion.p
            custom={2}
            variants={enter}
            initial="hidden"
            animate="show"
            className="mt-7 max-w-[52ch] text-base leading-relaxed text-sr-light/60">
            
            Vos projets avancent mieux avec le bon soutien digital. J’accompagne
            les entrepreneurs, créateurs et petites entreprises dans leurs
            tâches, contenus, outils et projets digitaux — de l’idée à la mise
            en œuvre.
          </motion.p>

          <motion.p
            custom={3}
            variants={enter}
            initial="hidden"
            animate="show"
            className="mt-8 flex items-center gap-3 text-sm text-sr-light/75">
            
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sr-accent opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-sr-accent" />
            </span>
            {brand.availabilityBadge}
          </motion.p>

          <motion.div
            custom={4}
            variants={enter}
            initial="hidden"
            animate="show"
            className="mt-10 flex flex-col gap-3 sm:flex-row">
            
            <ButtonLink href="#contact">
              Parlons de votre projet
              <ArrowUpRight size={16} strokeWidth={1.75} />
            </ButtonLink>
            <ButtonLink href="#realisations" variant="secondary">
              Voir les réalisations
            </ButtonLink>
          </motion.div>

          <motion.p
            custom={5}
            variants={enter}
            initial="hidden"
            animate="show"
            className="mt-12 font-mono text-[11px] uppercase tracking-[0.18em] text-sr-light/35">
            
            {brand.location} · {brand.availability}
          </motion.p>
        </div>

        <motion.div
          custom={3}
          variants={enter}
          initial="hidden"
          animate="show">
          
          <MonogramPanel />
        </motion.div>
      </div>
    </section>);

}