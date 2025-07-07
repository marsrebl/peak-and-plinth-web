
import React from 'react';

export const Logo = ({ className = "h-10 w-auto" }: { className?: string }) => {
  return (
    <svg className={className} viewBox="0 0 200 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Mountain peak */}
      <path
        d="M20 60 L40 20 L60 40 L80 15 L100 50 L120 60 Z"
        fill="url(#mountainGradient)"
        className="drop-shadow-md"
      />
      
      {/* Building structure */}
      <rect
        x="130"
        y="30"
        width="25"
        height="30"
        fill="url(#buildingGradient)"
        className="drop-shadow-md"
      />
      <rect
        x="155"
        y="20"
        width="25"
        height="40"
        fill="url(#buildingGradient2)"
        className="drop-shadow-md"
      />
      
      {/* Building windows */}
      <rect x="135" y="35" width="4" height="4" fill="#1a365d" opacity="0.3" />
      <rect x="141" y="35" width="4" height="4" fill="#1a365d" opacity="0.3" />
      <rect x="135" y="42" width="4" height="4" fill="#1a365d" opacity="0.3" />
      <rect x="141" y="42" width="4" height="4" fill="#1a365d" opacity="0.3" />
      
      <rect x="160" y="25" width="4" height="4" fill="#1a365d" opacity="0.3" />
      <rect x="166" y="25" width="4" height="4" fill="#1a365d" opacity="0.3" />
      <rect x="160" y="32" width="4" height="4" fill="#1a365d" opacity="0.3" />
      <rect x="166" y="32" width="4" height="4" fill="#1a365d" opacity="0.3" />
      <rect x="160" y="39" width="4" height="4" fill="#1a365d" opacity="0.3" />
      <rect x="166" y="39" width="4" height="4" fill="#1a365d" opacity="0.3" />
      
      {/* Gradients */}
      <defs>
        <linearGradient id="mountainGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#d69e2e" />
          <stop offset="100%" stopColor="#b7791f" />
        </linearGradient>
        <linearGradient id="buildingGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2d3748" />
          <stop offset="100%" stopColor="#1a365d" />
        </linearGradient>
        <linearGradient id="buildingGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1a365d" />
          <stop offset="100%" stopColor="#2d3748" />
        </linearGradient>
      </defs>
    </svg>
  );
};
