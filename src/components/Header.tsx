import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header: React.FC = () => {
  return (
    <header className="header">
      <Link to="/" className="header-item" style={{ backgroundColor: 'blue' }}>Accueil</Link>
      <Link to="/immatriculation" className="header-item" style={{ backgroundColor: 'green' }}>Immatriculation</Link>
      <Link to="/login" className="header-item" style={{ backgroundColor: 'coral' }}>Se connecter</Link>
      <Link to="/site-dgi" className="header-item" style={{ backgroundColor: 'yellow' }}>Site DGI</Link>
      <Link to="/contact" className="header-item" style={{ backgroundColor: 'gray' }}>Contact</Link>
    </header>
  );
};

export default Header;
