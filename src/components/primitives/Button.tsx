import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'secondary-light';

const base =
'inline-flex items-center justify-center gap-2 rounded-full px-7 h-[52px] text-sm font-medium transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-sr-accent focus-visible:ring-offset-2 focus-visible:ring-offset-sr-night disabled:opacity-60 disabled:cursor-not-allowed';

const variants: Record<ButtonVariant, string> = {
  primary:
  'bg-sr-accent text-sr-dark hover:shadow-[0_0_40px_-6px_rgba(166,65,244,0.75)] hover:brightness-110',
  secondary:
  'border border-sr-border-dark text-sr-light hover:border-sr-accent/60 hover:bg-sr-light/[0.04]',
  'secondary-light':
  'border border-sr-border-light text-sr-dark hover:border-sr-deep/40 hover:bg-sr-deep/[0.05] focus-visible:ring-offset-sr-lavender'
};

interface ButtonProps extends
  React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export function Button({
  variant = 'primary',
  className = '',
  children,
  ...props
}: ButtonProps) {
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>);

}

interface ButtonLinkProps extends
  React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: ButtonVariant;
}

export function ButtonLink({
  variant = 'primary',
  className = '',
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <a className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </a>);

}