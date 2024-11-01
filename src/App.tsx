import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Immatriculation from './components/Immatriculation';
import Login from './components/Login';
import Contact from './components/Contact';
import SiteDGI from './components/SiteDGI';
import './App.scss'; // Ton fichier SCSS principal

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/immatriculation" element={<Immatriculation />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/site-dgi" element={<SiteDGI />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
