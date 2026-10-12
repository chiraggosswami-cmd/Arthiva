import React from 'react';

interface NaomiLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  theme?: 'light' | 'dark' | 'brand';
  accentDotColor?: string;
}

export function NaomiLogo({ className = '', size = 'md', theme = 'dark', accentDotColor }: NaomiLogoProps) {
  const height = size === 'sm' ? 22 : size === 'lg' ? 38 : 28;
  const textColor = theme === 'light' ? '#0e3b43' : theme === 'brand' ? 'currentColor' : '#ffffff';
  const dotColor = accentDotColor || (theme === 'light' ? '#f5a524' : '#f5a524');

  return (
    <div className={`inline-flex items-center gap-1.5 select-none ${className}`} style={{ color: textColor }}>
      <span
        style={{
          fontFamily: "'Bricolage Grotesque', sans-serif",
          fontSize: `${height}px`,
          fontWeight: 800,
          letterSpacing: '-0.045em',
          lineHeight: 1,
          display: 'inline-flex',
          alignItems: 'baseline'
        }}
      >
        <span>naom</span>
        <span style={{ position: 'relative', display: 'inline-block' }}>
          <span>i</span>
          <span
            style={{
              position: 'absolute',
              top: `${height * 0.04}px`,
              left: `${height * 0.08}px`,
              width: `${height * 0.22}px`,
              height: `${height * 0.22}px`,
              borderRadius: '50%',
              backgroundColor: dotColor,
              display: 'inline-block',
              transition: 'background-color 0.2s ease'
            }}
          />
        </span>
      </span>
    </div>
  );
}
