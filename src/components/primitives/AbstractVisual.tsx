import React from 'react';
import type { VisualVariant } from '../../types/site';

interface AbstractVisualProps {
  variant: VisualVariant;
  className?: string;
}

const NIGHT = '#05041A';
const DEEP = '#3C0875';
const ACCENT = '#A641F4';
const BORDER = '#241E45';
const LIGHT = '#F7F2FF';

function Frame({ children }: {children: React.ReactNode;}) {
  return (
    <svg
      viewBox="0 0 400 300"
      role="presentation"
      aria-hidden="true"
      className="h-full w-full"
      preserveAspectRatio="xMidYMid slice">
      
      <defs>
        <radialGradient id="sr-halo" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={DEEP} stopOpacity="0.85" />
          <stop offset="100%" stopColor={DEEP} stopOpacity="0" />
        </radialGradient>
        <pattern
          id="sr-dots"
          width="14"
          height="14"
          patternUnits="userSpaceOnUse">
          
          <circle cx="1.5" cy="1.5" r="1" fill={LIGHT} opacity="0.16" />
        </pattern>
      </defs>
      <rect width="400" height="300" fill={NIGHT} />
      {children}
    </svg>);

}

function TasksVisual() {
  return (
    <Frame>
      <circle cx="90" cy="70" r="150" fill="url(#sr-halo)" opacity="0.5" />
      <rect x="0" y="0" width="400" height="300" fill="url(#sr-dots)" />
      <g transform="translate(56 58)">
        {[0, 1, 2, 3].map((i) =>
        <g key={i} transform={`translate(0 ${i * 46})`}>
            <rect
            width="230"
            height="34"
            rx="8"
            fill={LIGHT}
            fillOpacity={i === 1 ? 0.07 : 0.03}
            stroke={i === 1 ? ACCENT : BORDER}
            strokeOpacity={i === 1 ? 0.7 : 1} />
          
            <rect
            x="14"
            y="13"
            width="8"
            height="8"
            rx="2"
            fill={i < 2 ? ACCENT : 'none'}
            stroke={i < 2 ? 'none' : BORDER} />
          
            <rect
            x="34"
            y="14"
            width={130 - i * 22}
            height="6"
            rx="3"
            fill={LIGHT}
            fillOpacity="0.34" />
          
          </g>
        )}
      </g>
      <g transform="translate(310 72)">
        <rect
          width="54"
          height="54"
          rx="14"
          fill={DEEP}
          fillOpacity="0.5"
          stroke={BORDER} />
        
        <rect
          y="76"
          width="54"
          height="90"
          rx="14"
          fill="none"
          stroke={ACCENT}
          strokeOpacity="0.45" />
        
      </g>
    </Frame>);

}

function ContentVisual() {
  return (
    <Frame>
      <circle cx="330" cy="240" r="170" fill="url(#sr-halo)" opacity="0.55" />
      <g transform="translate(48 50)">
        <rect width="132" height="8" rx="4" fill={ACCENT} />
        <rect y="24" width="196" height="8" rx="4" fill={LIGHT} fillOpacity="0.5" />
        <rect y="44" width="164" height="8" rx="4" fill={LIGHT} fillOpacity="0.32" />
        <rect y="64" width="184" height="8" rx="4" fill={LIGHT} fillOpacity="0.18" />
        <rect y="84" width="96" height="8" rx="4" fill={LIGHT} fillOpacity="0.12" />
      </g>
      <g transform="translate(48 178)">
        {[0, 1, 2, 3, 4, 5, 6].map((i) =>
        <rect
          key={i}
          x={i * 42}
          width="30"
          height="30"
          rx="7"
          fill={i === 2 ? ACCENT : LIGHT}
          fillOpacity={i === 2 ? 1 : 0.05}
          stroke={i === 2 ? 'none' : BORDER} />

        )}
      </g>
      <path
        d="M300 20 L380 20 L380 100"
        fill="none"
        stroke={BORDER}
        strokeWidth="1" />
      
    </Frame>);

}

function AutomationVisual() {
  return (
    <Frame>
      <circle cx="200" cy="150" r="160" fill="url(#sr-halo)" opacity="0.45" />
      <rect x="0" y="0" width="400" height="300" fill="url(#sr-dots)" />
      <g stroke={BORDER} fill="none">
        <path d="M92 96 H180 A16 16 0 0 1 196 112 V188 A16 16 0 0 0 212 204 H300" />
        <path d="M92 204 H150 A16 16 0 0 0 166 188 V128" />
      </g>
      <path
        d="M196 112 V188"
        stroke={ACCENT}
        strokeWidth="2"
        strokeLinecap="round" />
      
      <g>
        <rect
          x="36"
          y="76"
          width="58"
          height="40"
          rx="10"
          fill={LIGHT}
          fillOpacity="0.05"
          stroke={BORDER} />
        
        <rect
          x="36"
          y="184"
          width="58"
          height="40"
          rx="10"
          fill={LIGHT}
          fillOpacity="0.05"
          stroke={BORDER} />
        
        <rect
          x="298"
          y="182"
          width="66"
          height="44"
          rx="12"
          fill={DEEP}
          fillOpacity="0.6"
          stroke={ACCENT}
          strokeOpacity="0.55" />
        
        <circle cx="166" cy="122" r="7" fill={ACCENT} />
      </g>
    </Frame>);

}

function PresenceVisual() {
  return (
    <Frame>
      <circle cx="120" cy="250" r="170" fill="url(#sr-halo)" opacity="0.5" />
      <g transform="translate(60 46)">
        <rect
          width="200"
          height="150"
          rx="14"
          fill={LIGHT}
          fillOpacity="0.05"
          stroke={BORDER} />
        
        <rect x="18" y="20" width="70" height="7" rx="3.5" fill={ACCENT} />
        <rect
          x="18"
          y="40"
          width="150"
          height="7"
          rx="3.5"
          fill={LIGHT}
          fillOpacity="0.4" />
        
        <rect
          x="18"
          y="56"
          width="118"
          height="7"
          rx="3.5"
          fill={LIGHT}
          fillOpacity="0.22" />
        
        <rect
          x="18"
          y="84"
          width="76"
          height="46"
          rx="9"
          fill={DEEP}
          fillOpacity="0.55" />
        
        <rect
          x="104"
          y="84"
          width="76"
          height="46"
          rx="9"
          fill={LIGHT}
          fillOpacity="0.06"
          stroke={BORDER} />
        
      </g>
      <g transform="translate(238 150)">
        <rect
          width="112"
          height="112"
          rx="20"
          fill={NIGHT}
          stroke={ACCENT}
          strokeOpacity="0.5" />
        
        <path
          d="M22 88 L56 30 L90 88"
          fill="none"
          stroke={LIGHT}
          strokeOpacity="0.35"
          strokeWidth="8"
          strokeLinejoin="round" />
        
      </g>
    </Frame>);

}

function SignalVisual() {
  return (
    <Frame>
      <circle cx="220" cy="120" r="180" fill="url(#sr-halo)" opacity="0.45" />
      <g fill="none" stroke={BORDER}>
        <circle cx="200" cy="150" r="42" />
        <circle cx="200" cy="150" r="76" />
        <circle cx="200" cy="150" r="112" />
      </g>
      <circle
        cx="200"
        cy="150"
        r="42"
        fill="none"
        stroke={ACCENT}
        strokeOpacity="0.75" />
      
      <circle cx="200" cy="150" r="9" fill={ACCENT} />
      <circle cx="276" cy="150" r="5" fill={LIGHT} fillOpacity="0.6" />
      <circle cx="200" cy="38" r="5" fill={LIGHT} fillOpacity="0.35" />
      <circle cx="112" cy="196" r="5" fill={LIGHT} fillOpacity="0.35" />
      <g transform="translate(30 236)">
        {[0, 1, 2, 3, 4, 5].map((i) =>
        <rect
          key={i}
          x={i * 24}
          y={-i * 6}
          width="10"
          height={16 + i * 6}
          rx="5"
          fill={i > 3 ? ACCENT : LIGHT}
          fillOpacity={i > 3 ? 0.9 : 0.16} />

        )}
      </g>
    </Frame>);

}

function GridVisual() {
  return (
    <Frame>
      <circle cx="300" cy="70" r="170" fill="url(#sr-halo)" opacity="0.45" />
      <rect x="0" y="0" width="400" height="300" fill="url(#sr-dots)" />
      <g transform="translate(46 44)">
        {[0, 1, 2, 3].map((row) =>
        [0, 1, 2, 3].map((col) => {
          const active = row === 1 && col === 2;
          return (
            <rect
              key={`${row}-${col}`}
              x={col * 78}
              y={row * 54}
              width="62"
              height="40"
              rx="9"
              fill={active ? DEEP : LIGHT}
              fillOpacity={active ? 0.7 : 0.04}
              stroke={active ? ACCENT : BORDER}
              strokeOpacity={active ? 0.7 : 1} />);


        })
        )}
      </g>
      <path
        d="M46 262 L354 262"
        stroke={ACCENT}
        strokeOpacity="0.45"
        strokeWidth="1.5" />
      
    </Frame>);

}

export function AbstractVisual({ variant, className = '' }: AbstractVisualProps) {
  return (
    <div className={`h-full w-full overflow-hidden ${className}`}>
      {variant === 'tasks' && <TasksVisual />}
      {variant === 'content' && <ContentVisual />}
      {variant === 'automation' && <AutomationVisual />}
      {variant === 'presence' && <PresenceVisual />}
      {variant === 'signal' && <SignalVisual />}
      {variant === 'grid' && <GridVisual />}
    </div>);

}