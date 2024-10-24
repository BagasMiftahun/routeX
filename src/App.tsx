// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Story from './pages/Story';
import StoryDetail from './pages/StoryDetail';
import Visa from './pages/Visa';
import VisaDetail from './pages/VisaDetail';
import Contact from './pages/Contact';
import Layout from './components/Layout';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/story" element={<Story />} />
          <Route path="/story/:id" element={<StoryDetail />} />
          <Route path="/visa" element={<Visa />} />
          <Route path="/visa/:id" element={<VisaDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
