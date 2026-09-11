import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { ButtonLink } from './primitives/Button';
import { brand, navLinks } from '../data/site';

export function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
      scrolled ?
      'border-b border-sr-border-dark bg-sr-night/85 backdrop-blur-xl' :
      'border-b border-transparent bg-transparent'}`
      }>
      
      <nav
        aria-label="Navigation principale"
        className="mx-auto flex h-[72px] w-full max-w-[1320px] items-center justify-between px-6 lg:px-10">
        
        <a
          href="#accueil"
          className="flex items-center gap-3 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-sr-accent">
          
          <img
            src={brand.monogram}
            alt={`${brand.name} — retour en haut de page`}
            className="h-7 w-auto" />
          
          <span className="hidden font-mono text-[11px] uppercase tracking-[0.18em] text-sr-light/55 sm:inline">
            Sylvio Razafison
          </span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {navLinks.slice(0, 6).map((link) =>
          <li key={link.id}>
              <a
              href={`#${link.id}`}
              className={`relative py-2 text-sm transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-sr-accent ${
              active === link.id ?
              'text-sr-light' :
              'text-sr-light/60 hover:text-sr-light'}`
              }>
              
                {link.label}
                <span
                aria-hidden="true"
                className={`absolute -bottom-0.5 left-0 h-px bg-sr-accent transition-all duration-300 ${
                active === link.id ? 'w-full' : 'w-0'}`
                } />
              
              </a>
            </li>
          )}
        </ul>

        <div className="hidden lg:block">
          <ButtonLink href="#contact" className="h-[44px] px-6">
            Démarrer un projet
          </ButtonLink>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-sr-border-dark text-sr-light transition-colors hover:border-sr-accent/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-sr-accent lg:hidden">
          
          {open ? <X size={18} strokeWidth={1.5} /> : <Menu size={18} strokeWidth={1.5} />}
        </button>
      </nav>

      <AnimatePresence>
        {open &&
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 top-[72px] z-40 bg-sr-night px-6 pb-10 pt-8 lg:hidden">
          
            <ul className="flex flex-col">
              {navLinks.map((link, index) =>
            <motion.li
              key={link.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 + index * 0.05, duration: 0.4 }}
              className="border-b border-sr-border-dark">
              
                  <a
                href={`#${link.id}`}
                onClick={() => setOpen(false)}
                className="block py-5 text-2xl text-sr-light">
                
                    {link.label}
                  </a>
                </motion.li>
            )}
            </ul>
            <ButtonLink
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-8 w-full">
            
              Démarrer un projet
            </ButtonLink>
          </motion.div>
        }
      </AnimatePresence>
    </header>);

}