import React from 'react';
interface AfedLogoProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}
export function AfedLogo({ size = 'md', className = '' }: AfedLogoProps) {
  const heightMap = {
    sm: 'clamp(24px, 4vh, 36px)',
    md: 'clamp(32px, 5vh, 48px)',
    lg: 'clamp(48px, 8vh, 72px)'
  };
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src="./afed-logo.svg"
        alt="AFED Logo"
        style={{
          height: heightMap[size],
          width: 'auto',
          objectFit: 'contain'
        }} />
      
    </div>);

}