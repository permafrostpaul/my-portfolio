// FILE: src/components/Logo.jsx

import React from 'react';

const Logo = () => (
  <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#2563eb', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <rect width="100" height="100" rx="20" fill="url(#logo-gradient)" />
    <path
      d="M30 25 V 75 H 45 V 55 C 55 55 65 45 65 35 S 55 25 45 25 H 30 Z M 40 35 H 45 C 50 35 55 35 55 45 S 50 55 45 55 H 40 V 35 Z"
      fill="white"
    />
     <path 
      d="M45 50 H 50 C 65 50 70 55 70 62.5 S 65 75 50 75 H 45 V 50 Z" 
      fill="white"
    />
  </svg>
);

export default Logo;
