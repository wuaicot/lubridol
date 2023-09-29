import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import MainView from './components/MainView';
import InfoView from './components/InfoView';
import ContactView from './components/ContactView';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/main" element={<MainView />} />
        <Route path="/info" element={<InfoView />} />
        <Route path="/contact" element={<ContactView />} />
      </Routes>
    </Router>
  );
}

export default App;
