import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LandingPage from './LandingPage';
import FeaturePage from './FeaturePage';
import About from './About';
import FAQSection from './FAQSection';
import Footer from './Footer';
import Working from './Working';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/features" element={<FeaturePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<FAQSection />} />
        <Route path="/working" element={<Working />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;