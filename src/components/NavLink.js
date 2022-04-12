import React from 'react';
import './NavLink.css';
import { NavLink } from 'react-router-dom';

const NavLinks = () => (
  <div>
    <nav className="nav-links">
      <NavLink className="nav-link" to="/">
        Rockets
      </NavLink>
      <NavLink className="nav-link" to="/missions">
        Missions
      </NavLink>
      <NavLink className="nav-link" to="/profile">
        My Profile
      </NavLink>
    </nav>
  </div>
);

export default NavLinks;
