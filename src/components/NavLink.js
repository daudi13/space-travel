import React from 'react';
import './NavLink.css';
import { Link } from 'react-router-dom';

const NavLink = () => (
  <div>
    <nav className="nav-links">
      <Link to="/">Rockets</Link>
      <Link to="/missions">Missions</Link>
      <Link to="/profile">My Profile</Link>
    </nav>
  </div>
);

export default NavLink;
