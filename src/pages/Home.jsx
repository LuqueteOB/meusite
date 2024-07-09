import React from 'react';
import { Link } from 'react-router-dom';
import './Page.css'; // Importando o arquivo CSS

const Home = () => (
  <div className="page">
    <h1>Home Page</h1>
    <nav>
      <Link to="/about">About</Link> | <Link to="/contact">Contact</Link>
    </nav>
  </div>
);

export default Home;