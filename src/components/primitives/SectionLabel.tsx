import React from 'react';

interface SectionLabelProps {
  children: React.ReactNode;
  number?: string;
  tone?: 'dark' | 'light';
  className?: string;
}

export function SectionLabel({
  children,
  number,
  tone = 'dark',
  className = ''
}: SectionLabelProps) {
  const textColor = tone === 'dark' ? 'text-sr-light/55' : 'text-sr-dark/55';

  return (
    <div
      className={`flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] ${textColor} ${className}`}>
      
      {number ?
      <span className="text-sr-accent">{number} —</span> :

      <span
        aria-hidden="true"
        className="h-1.5 w-1.5 rounded-full bg-sr-accent" />

      }
      <span>{children}</span>
    </div>);

}