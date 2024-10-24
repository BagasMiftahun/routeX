// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} RouteX. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
