import React, { useState, useEffect } from 'react';
import '../styles/Header.css';
import logo from '../images/projects/WEB/WebLogo.png'

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) setOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="site-header">
      <img src={logo} style={{height: '100%'}}/>
      <nav className={`nav ${open ? 'open' : ''}`}>
        <ul className={`nav-list ${open ? 'open' : ''}`}>
          <li className="nav-item"><a href="#about" onClick={() => setOpen(false)}>Sobre mi</a></li>
          <li className="nav-item"><a href="#skills" onClick={() => setOpen(false)}>Mis conocimientos</a></li>
          <li className="nav-item"><a href="#projects" onClick={() => setOpen(false)}>Mis proyectos</a></li>
          <li className="nav-item"><a href="#contact" onClick={() => setOpen(false)}>Dónde encontrarme</a></li>
        </ul>
      </nav>
      <button
        className={`menu-toggle ${open ? 'open' : ''}`}
        aria-expanded={open}
        aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
        onClick={() => setOpen(!open)}
      >
        <span className="hamburger" />
      </button>
    </header>
  );
}
