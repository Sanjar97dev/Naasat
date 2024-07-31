import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './navbar.css';

const Navbar = ({ setmMenuOpen, menuOpen }) => {
  return (
    <nav>
      <Link to="/" className='title'>Илим булагы</Link>

      <div className="menu" onClick={() => setmMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? 'open' : ""}>
        <li><NavLink to="/" end>Үй</NavLink></li>
        <li><NavLink to="/test">Сынак</NavLink></li>
        <li><NavLink to="/about">Хадистер</NavLink></li>
        <li><NavLink to="/contact">Байланыш</NavLink></li>
        <li><NavLink to="/register">Катталуу</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navbar;
