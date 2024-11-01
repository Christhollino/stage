import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../components/Home';
import Immatriculation from '../components/Immatriculation';
import Login from '../components/Login';
import Contact from '../components/Contact';
import SiteDGI from '../components/SiteDGI';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/immatriculation" element={<Immatriculation />} />
      <Route path="/login" element={<Login />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/site-dgi" element={<SiteDGI />} />
    </Routes>
  );
};

export default AppRoutes;
