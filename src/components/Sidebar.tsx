import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Facebook,
  Linkedin,
  Mail,
  Menu,
  MessageCircle,
  X } from
'lucide-react';
import { brand, navLinks, socials } from '../data/site';

const socialIcons = { Linkedin, Facebook, MessageCircle, Mail } as const;

function useActiveSection() {
  const [active, setActive] = useState<string>('accueil');

  useEffect(() => {
    const sections = navLinks.
    map((link) => document.getElementById(link.id)).
    filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return active;
}

function Identity({ compact = false }: {compact?: boolean;}) {
  return (
    <div className="flex items-center gap-4 lg:block">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-sr-border-dark bg-sr-light/[0.03] lg:h-16 lg:w-16">
        <img src={brand.monogram} alt="" aria-hidden="true" className="w-7 lg:w-8" />
      </div>
      <div className={compact ? '' : 'lg:mt-5'}>
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-sr-light/40">
          {brand.role}
        </p>
        <p className="mt-1 text-lg font-medium leading-tight text-sr-light">
          {brand.firstName}
          <span className="block text-sr-accent">{brand.lastName}</span>
        </p>
      </div>
    </div>);

}

function SocialRow() {
  return (
    <ul className="flex flex-wrap gap-2">
      {socials.map((social) => {
        const Icon = socialIcons[social.icon as keyof typeof socialIcons];
        return (
          <li key={social.label}>
            <a
              href={social.href}
              aria-label={social.label}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-sr-border-dark text-sr-light/60 transition-colors duration-300 hover:border-sr-accent/60 hover:text-sr-light focus:outline-none focus-visible:ring-2 focus-visible:ring-sr-accent">
              
              <Icon size={15} strokeWidth={1.5} />
            </a>
          </li>);

      })}
    </ul>);

}

function NavList({
  active,
  onNavigate,
  large = false




}: {active: string;onNavigate?: () => void;large?: boolean;}) {
  return (
    <ul className={large ? 'flex flex-col' : 'space-y-1'}>
      {navLinks.map((link) => {
        const isActive = active === link.id;
        return (
          <li key={link.id} className={large ? 'border-b border-sr-border-dark' : ''}>
            <a
              href={`#${link.id}`}
              onClick={onNavigate}
              aria-current={isActive ? 'true' : undefined}
              className={`group flex items-center gap-2.5 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-sr-accent ${
              large ? 'py-4 text-xl' : 'py-1.5 text-[15px]'} ${
              isActive ? 'text-sr-light' : 'text-sr-light/50 hover:text-sr-light'}`}>
              
              <span
                aria-hidden="true"
                className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
                isActive ?
                'bg-sr-accent' :
                'bg-transparent group-hover:bg-sr-light/25'}`
                } />
              
              {link.label}
            </a>
          </li>);

      })}
    </ul>);

}

export function Sidebar() {
  const active = useActiveSection();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <aside
        aria-label="Navigation principale"
        className="fixed inset-y-0 left-0 z-50 hidden w-[260px] flex-col overflow-y-auto border-r border-sr-border-dark bg-sr-night px-7 py-8 lg:flex">
        
        <Identity />

        <div className="my-7 h-px bg-sr-border-dark" />

        <nav aria-label="Sections du site">
          <NavList active={active} />
        </nav>

        <div className="my-7 h-px bg-sr-border-dark" />

        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-sr-light/35">
            Disponibilité
          </p>
          <p className="mt-3 flex items-start gap-2.5 text-xs leading-relaxed text-sr-light/60">
            <span className="relative mt-1.5 flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sr-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-sr-accent" />
            </span>
            {brand.availabilityBadge}
          </p>
        </div>

        <div className="mt-auto pt-8">
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-sr-light/35">
            Contact rapide
          </p>
          <div className="mt-4">
            <SocialRow />
          </div>
        </div>
      </aside>

      <header className="fixed inset-x-0 top-0 z-50 border-b border-sr-border-dark bg-sr-night/90 backdrop-blur-xl lg:hidden">
        <div className="flex h-[72px] items-center justify-between px-5">
          <Identity compact />
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-sr-border-dark text-sr-light focus:outline-none focus-visible:ring-2 focus-visible:ring-sr-accent">
            
            {open ? <X size={18} strokeWidth={1.5} /> : <Menu size={18} strokeWidth={1.5} />}
          </button>
        </div>

        <AnimatePresence>
          {open &&
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 top-[72px] overflow-y-auto bg-sr-night px-5 pb-12 pt-4">
            
              <NavList active={active} large onNavigate={() => setOpen(false)} />
              <div className="mt-8">
                <SocialRow />
              </div>
            </motion.div>
          }
        </AnimatePresence>
      </header>
    </>);

}