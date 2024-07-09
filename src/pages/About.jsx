import React from 'react';
import { Link } from 'react-router-dom';

const About = () => (
  <div>
    <h1>About Page</h1>
    <nav>
      <Link to="/">Home</Link> | <Link to="/contact">Contact</Link>
    </nav>
  </div>
);

export default About;