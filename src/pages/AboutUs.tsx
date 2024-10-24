// src/pages/AboutUs.tsx
import React, { useEffect, useState } from 'react';
import type { AboutData } from '../types';
import data from '../data/data.json';

const AboutUs: React.FC = () => {
  const [aboutData, setAboutData] = useState<AboutData | null>(null);

  useEffect(() => {
    setAboutData(data.aboutUs);
  }, []);

  if (!aboutData) return <div>Loading...</div>;

  return (
    <div>
      <h1>{aboutData.title}</h1>
      <p>{aboutData.content}</p>
    </div>
  );
};

export default AboutUs;
