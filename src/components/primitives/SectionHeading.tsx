import React from 'react';

interface SectionHeadingProps {
  /** Words rendered in the light text colour. */
  lead: string;
  /** Words rendered in the accent colour. */
  accent: string;
  /** Optional action rendered on the right on large screens. */
  action?: React.ReactNode;
  className?: string;
}

export function SectionHeading({
  lead,
  accent,
  action,
  className = ''
}: SectionHeadingProps) {
  return (
    <div
      className={`flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between ${className}`}>
      
      <h2 className="sr-display text-[clamp(2rem,4.4vw,3.5rem)] font-medium uppercase text-sr-light">
        {lead} <span className="text-sr-accent">{accent}</span>
      </h2>
      {action}
    </div>);

}