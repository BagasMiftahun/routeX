// src/pages/StoryDetail.tsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import type { Story } from '../types';
import data from '../data/data.json';

const StoryDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [story, setStory] = useState<Story | null>(null);

  useEffect(() => {
    const foundStory = data.story.find(s => s.id.toString() === id);
    setStory(foundStory || null);
  }, [id]);

  if (!story) return <div>Story not found.</div>;

  return (
    <div>
      <h1>{story.title}</h1>
      <p>{story.description}</p>
    </div>
  );
};

export default StoryDetail;
