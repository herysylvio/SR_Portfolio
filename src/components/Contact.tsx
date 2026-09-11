import React, { useState } from 'react';
import {
  AlertCircle,
  CheckCircle2,
  Facebook,
  Linkedin,
  Loader2,
  Mail,
  MapPin,
  MessageCircle,
  Phone } from
'lucide-react';
import { Button } from './primitives/Button';
import { Reveal } from './primitives/Reveal';
import { Section } from './primitives/Section';
import { SectionHeading } from './primitives/SectionHeading';
import {
  brand,
  budgetOptions,
  needOptions,
  socials,
  timelineOptions } from
'../data/site';

type Status = 'idle' | 'loading' | 'success' | 'error';

interface FormValues {
  name: string;
  email: string;
  need: string;
  budget: string;
  timeline: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormValues, string>>;

const socialIcons = { Linkedin, Facebook, MessageCircle, Mail } as const;

const initialValues: FormValues = {
  name: '',
  email: '',
  need: '',
  budget: '',
  timeline: '',
  message: ''
};

const fieldClass =
'w-full rounded-xl border border-sr-border-dark bg-sr-light/[0.03] px-4 py-3.5 text-sm text-sr-light placeholder:text-sr-light/30 transition-colors duration-300 focus:border-sr-accent/70 focus:outline-none focus-visible:ring-2 focus-visible:ring-sr-accent/40';

const labelClass =
'mb-2 block font-mono text-[10px] uppercase tracking-[0.16em] text-sr-light/45';

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {};
  if (!values.name.trim()) errors.name = 'Indiquez votre nom.';
  if (!values.email.trim()) {
    errors.email = 'Indiquez votre e-mail.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Cet e-mail semble incomplet.';
  }
  if (!values.need) errors.need = 'Choisissez un besoin principal.';
  if (!values.timeline) errors.timeline = 'Choisissez un délai.';
  if (values.message.trim().length < 10) {
    errors.message = 'Décrivez votre projet en quelques mots.';
  }
  return errors;
}

export function Contact() {
  const [values, setValues] = useState<FormValues>(initialValues);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<Status>('idle');

  const update = (key: keyof FormValues) => (
  event: React.ChangeEvent<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>

  {
    setValues((current) => ({ ...current, [key]: event.target.value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus('idle');
      return;
    }

    setStatus('loading');
    try {
      await new Promise((resolve) => setTimeout(resolve, 1100));
      setStatus('success');
      setValues(initialValues);
    } catch {
      setStatus('error');
    }
  };

  return (
    <Section id="contact">
      <div className="grid gap-14 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <SectionHeading lead="TRAVAILLONS" accent="ENSEMBLE" />

          <p className="mt-6 max-w-[46ch] text-base leading-relaxed text-sr-light/55">
            Décrivez brièvement votre besoin. Je reviens vers vous avec une
            proposition de cadrage, un périmètre et un délai réalistes.
          </p>

          <ul className="mt-12 space-y-7">
            <li className="flex items-center gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-sr-border-dark text-sr-accent">
                <Phone size={17} strokeWidth={1.5} />
              </span>
              <span>
                <span className="block text-sm font-medium text-sr-light">
                  Appeler
                </span>
                <a
                  href={`tel:${brand.phone.replace(/\s/g, '')}`}
                  className="block text-sm text-sr-light/50 transition-colors hover:text-sr-light focus:outline-none focus-visible:ring-2 focus-visible:ring-sr-accent">
                  
                  {brand.phone}
                </a>
              </span>
            </li>
            <li className="flex items-center gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-sr-border-dark text-sr-accent">
                <Mail size={17} strokeWidth={1.5} />
              </span>
              <span>
                <span className="block text-sm font-medium text-sr-light">
                  Écrire
                </span>
                <a
                  href={`mailto:${brand.email}`}
                  className="block text-sm text-sr-light/50 transition-colors hover:text-sr-light focus:outline-none focus-visible:ring-2 focus-visible:ring-sr-accent">
                  
                  {brand.email}
                </a>
              </span>
            </li>
            <li className="flex items-center gap-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-sr-border-dark text-sr-accent">
                <MapPin size={17} strokeWidth={1.5} />
              </span>
              <span>
                <span className="block text-sm font-medium text-sr-light">
                  Localisation
                </span>
                <span className="block text-sm text-sr-light/50">
                  {brand.location} · {brand.availability}
                </span>
              </span>
            </li>
          </ul>

          <div className="mt-12">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-sr-light/35">
              Me suivre
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {socials.map((social) => {
                const Icon = socialIcons[social.icon as keyof typeof socialIcons];
                return (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      aria-label={social.label}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-sr-border-dark text-sr-light/60 transition-colors duration-300 hover:border-sr-accent/60 hover:text-sr-light focus:outline-none focus-visible:ring-2 focus-visible:ring-sr-accent">
                      
                      <Icon size={16} strokeWidth={1.5} />
                    </a>
                  </li>);

              })}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <form
            onSubmit={handleSubmit}
            noValidate
            className="rounded-3xl border border-sr-border-dark bg-sr-light/[0.02] p-6 sm:p-9">
            
            <h3 className="sr-display text-2xl font-medium uppercase text-sr-light lg:text-3xl">
              DÉCRIVEZ VOTRE <span className="text-sr-accent">PROJET</span>
            </h3>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <div>
                <label className={labelClass} htmlFor="name">
                  Nom
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={values.name}
                  onChange={update('name')}
                  placeholder="Votre nom"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                  className={fieldClass} />
                
                {errors.name &&
                <p id="name-error" className="mt-2 text-xs text-sr-accent">
                    {errors.name}
                  </p>
                }
              </div>

              <div>
                <label className={labelClass} htmlFor="email">
                  E-mail
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={update('email')}
                  placeholder="vous@exemple.com"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? 'email-error' : undefined}
                  className={fieldClass} />
                
                {errors.email &&
                <p id="email-error" className="mt-2 text-xs text-sr-accent">
                    {errors.email}
                  </p>
                }
              </div>

              <div>
                <label className={labelClass} htmlFor="need">
                  Besoin principal
                </label>
                <select
                  id="need"
                  name="need"
                  value={values.need}
                  onChange={update('need')}
                  aria-invalid={Boolean(errors.need)}
                  aria-describedby={errors.need ? 'need-error' : undefined}
                  className={`${fieldClass} appearance-none`}>
                  
                  <option value="">Sélectionner…</option>
                  {needOptions.map((option) =>
                  <option key={option} value={option} className="bg-sr-night">
                      {option}
                    </option>
                  )}
                </select>
                {errors.need &&
                <p id="need-error" className="mt-2 text-xs text-sr-accent">
                    {errors.need}
                  </p>
                }
              </div>

              <div>
                <label className={labelClass} htmlFor="budget">
                  Budget indicatif
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={values.budget}
                  onChange={update('budget')}
                  className={`${fieldClass} appearance-none`}>
                  
                  <option value="">Sélectionner…</option>
                  {budgetOptions.map((option) =>
                  <option key={option} value={option} className="bg-sr-night">
                      {option}
                    </option>
                  )}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label className={labelClass} htmlFor="timeline">
                  Délai souhaité
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={values.timeline}
                  onChange={update('timeline')}
                  aria-invalid={Boolean(errors.timeline)}
                  aria-describedby={errors.timeline ? 'timeline-error' : undefined}
                  className={`${fieldClass} appearance-none`}>
                  
                  <option value="">Sélectionner…</option>
                  {timelineOptions.map((option) =>
                  <option key={option} value={option} className="bg-sr-night">
                      {option}
                    </option>
                  )}
                </select>
                {errors.timeline &&
                <p id="timeline-error" className="mt-2 text-xs text-sr-accent">
                    {errors.timeline}
                  </p>
                }
              </div>

              <div className="sm:col-span-2">
                <label className={labelClass} htmlFor="message">
                  Votre projet
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={values.message}
                  onChange={update('message')}
                  placeholder="Ce qui bloque aujourd’hui, ce que vous aimeriez déléguer…"
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'message-error' : undefined}
                  className={`${fieldClass} resize-none`} />
                
                {errors.message &&
                <p id="message-error" className="mt-2 text-xs text-sr-accent">
                    {errors.message}
                  </p>
                }
              </div>
            </div>

            <div className="mt-8">
              <Button
                type="submit"
                disabled={status === 'loading'}
                className="w-full">
                
                {status === 'loading' &&
                <Loader2 size={16} className="animate-spin" strokeWidth={2} />
                }
                {status === 'loading' ? 'Envoi en cours…' : 'Envoyer ma demande'}
              </Button>

              <div aria-live="polite" className="mt-4 min-h-[20px] text-center">
                {status === 'success' &&
                <p className="flex items-center justify-center gap-2 text-sm text-sr-light/80">
                    <CheckCircle2
                    size={16}
                    strokeWidth={1.75}
                    className="text-sr-accent" />
                  
                    Message reçu. Réponse sous 24 h ouvrées.
                  </p>
                }
                {status === 'error' &&
                <p className="flex items-center justify-center gap-2 text-sm text-sr-light/80">
                    <AlertCircle
                    size={16}
                    strokeWidth={1.75}
                    className="text-sr-accent" />
                  
                    L’envoi a échoué. Réessayez ou écrivez-moi directement.
                  </p>
                }
              </div>
            </div>
          </form>
        </Reveal>
      </div>
    </Section>);

}