import React from 'react';
import './NavLink.css';
import { Link } from 'react-router-dom';

const NavLink = () => (
  <div>
    <nav className="nav-links">
      <Link className="nav-link" to="/">
        Rockets
      </Link>
      <Link className="nav-link" to="/missions">
        Missions
      </Link>
      <Link className="nav-link" to="/profile">
        My Profile
      </Link>
    </nav>
  </div>
);

export default NavLink;
