import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ArtGallery from './assets/Pages/ArtGallery.jsx';
import LightBox from './assets/Pages/LightBox.jsx';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ArtGallery />} />
        <Route path="/art/:id" element={<LightBox />} />
      </Routes>
    </Router>
  );
}

export default App;

