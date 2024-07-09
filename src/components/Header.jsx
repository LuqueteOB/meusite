import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Se houver estilos específicos para o header

const Header = () => {
  return (
    <header className="header">
      <h1>Meu Website</h1>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link> | 
        <Link to="/contact">Contact</Link> | 
        <Link to="/users">Usuários</Link> {/* Link para a página de usuários */}
      </nav>
    </header>
  );
};

export default Header;