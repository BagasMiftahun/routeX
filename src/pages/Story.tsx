// src/pages/Story.tsx
import React, { useEffect, useState } from 'react';
import type { Story } from '../types';
import data from '../data/data.json';
import { Link } from 'react-router-dom';

const Story: React.FC = () => {
  const [stories, setStories] = useState<Story[]>([]);

  useEffect(() => {
    setStories(data.story);
  }, []);

  if (stories.length === 0) return <div>Loading...</div>;

  return (
    <div>
      <h1>Stories</h1>
      <ul>
        {stories.map(story => (
          <li key={story.id}>
            <Link to={`/story/${story.id}`}>{story.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Story;
