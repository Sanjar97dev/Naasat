import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './navbar.css';

const Navbar = ({ setMenuOpen, menuOpen }) => {
  return (
    <nav>
      <Link to="/" className="title">Илим булагы</Link>

      <div 
        className="menu" 
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        role="button"
        tabIndex={0}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      
      <ul className={menuOpen ? 'open' : ''}>
        <li><NavLink to="/" end>Үй</NavLink></li>
        <li><NavLink to="test">Сынак</NavLink></li>
        <li><NavLink to="/zikr">Зикр</NavLink></li>
        <li><NavLink to="/contact">Байланыш</NavLink></li>
        <li><NavLink to="/register">Катталуу</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;

