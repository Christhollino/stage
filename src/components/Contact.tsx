// src/components/Contact.tsx

import React from 'react';
import './Contact.scss';

const Contact: React.FC = () => {
  return (
    <div className="contact">
      <h2>Contact</h2>
      <p>Pour nous contacter, veuillez remplir le formulaire ci-dessous.</p>
      <form>
        <div>
          <label htmlFor="name">Nom:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
        </div>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default Contact;
