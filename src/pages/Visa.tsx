// src/pages/Visa.tsx
import React, { useEffect, useState } from 'react';
import type { Visa } from '../types';
import data from '../data/data.json';
import { Link } from 'react-router-dom';

const Visa: React.FC = () => {
  const [stories, setStories] = useState<Visa[]>([]);

  useEffect(() => {
    setStories(data.visa);
  }, []);

  if (stories.length === 0) return <div>Loading...</div>;

  return (
    <div>
      <h1>Stories</h1>
      <ul>
        {stories.map(visa => (
          <li key={visa.id}>
            <Link to={`/visa/${visa.id}`}>{visa.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Visa;
