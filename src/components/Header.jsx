import React from 'react';
import '../styles/Header.css';

export default function Header() {
  return (
    <header className="site-header">
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item"><a href="#about">Sobre mi</a></li>
          <li className="nav-item"><a href="#skills">Mis conocimientos</a></li>
          <li className="nav-item"><a href="#projects">Mis proyectos</a></li>
          <li className="nav-item"><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}
