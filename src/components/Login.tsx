// src/components/Login.tsx

import React from 'react';
import './Login.scss';

const Login: React.FC = () => {
  return (
    <div className="login">
      <h2>Se connecter</h2>
      <form>
        <div>
          <label htmlFor="username">Nom d'utilisateur:</label>
          <input type="text" id="username" name="username" required />
        </div>
        <div>
          <label htmlFor="password">Mot de passe:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Connexion</button>
      </form>
    </div>
  );
};

export default Login;
