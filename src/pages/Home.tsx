// src/pages/Home.tsx
import React, { useEffect, useState } from 'react';
import type { HomeData } from '../types';
import data from '../data/data.json';

const Home: React.FC = () => {
  const [homeData, setHomeData] = useState<HomeData | null>(null);

  useEffect(() => {
    setHomeData(data.home);
  }, []);

  if (!homeData) return <div>Loading...</div>;

  return (
    <div>
      <h1>{homeData.title}</h1>
      <p>{homeData.description}</p>
    </div>
  );
};

export default Home;
