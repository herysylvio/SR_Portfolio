import React from 'react';

interface GlowBackdropProps {
  /** Horizontal position of the glow center, as a CSS value. */
  x?: string;
  /** Vertical position of the glow center, as a CSS value. */
  y?: string;
  size?: number;
  color?: string;
  opacity?: number;
  className?: string;
}

export function GlowBackdrop({
  x = '20%',
  y = '30%',
  size = 900,
  color = '#3C0875',
  opacity = 0.55,
  className = ''
}: GlowBackdropProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full blur-[140px] ${className}`}
      style={{
        left: x,
        top: y,
        width: size,
        height: size,
        transform: 'translate(-50%, -50%)',
        backgroundColor: color,
        opacity
      }} />);


}