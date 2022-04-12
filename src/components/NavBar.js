import React from 'react';
import logo from '../images/logo.png';
import './NavBar.css';
import NavLink from './NavLink';

const NavBar = () => (
  <div className="nav">
    <div className="nav-bar">
      <header className="logo-title">
        <img className="logo" src={logo} alt="logo" />
        <h1 className="header-title">Space Travels&apos; Hub</h1>
      </header>
      <NavLink />
    </div>
    <hr />
  </div>
);

export default NavBar;
