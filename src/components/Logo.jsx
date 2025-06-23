// FILE: src/components/Logo.jsx

import React from 'react';

const Logo = ({ hasScrolled }) => (
  <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect 
      width="100" 
      height="100" 
      rx="20" 
      fill={hasScrolled ? '#fff' : '#1e293b'} 
      className="transition-colors duration-300" 
    />
    <text
      x="50"
      y="53"
      fontFamily="Arial, Helvetica, sans-serif"
      fontSize="50"
      fontWeight="bold"
      fill={hasScrolled ? '#1e293b' : '#fff'}
      textAnchor="middle"
      dominantBaseline="middle"
      className="transition-colors duration-300"
    >
      PB
    </text>
  </svg>
);

export default Logo;
