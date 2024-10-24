// src/pages/VisaDetail.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import type { Visa } from '../types';
import data from '../data/data.json';

const VisaDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [visa, setVisa] = useState<Visa | null>(null);

  useEffect(() => {
    const foundVisa = data.visa.find(s => s.id.toString() === id);
    setVisa(foundVisa || null);
  }, [id]);

  if (!visa) return <div>Visa not found.</div>;

  return (
    <div>
      <h1>{visa.title}</h1>
      <p>{visa.description}</p>
    </div>
  );
};

export default VisaDetail;
