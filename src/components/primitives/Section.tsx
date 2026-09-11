import React from 'react';

interface SectionProps {
  id?: string;
  label?: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ id, label, children, className = '' }: SectionProps) {
  return (
    <section
      id={id}
      aria-label={label}
      className={`px-5 py-20 sm:px-8 lg:px-14 lg:py-28 ${className}`}>
      
      <div className="mx-auto w-full max-w-[1180px]">{children}</div>
    </section>);

}