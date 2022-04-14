import React from 'react';
import logo from '../../images/logo.png';
import './NavBar.css';
import NavLinks from './NavLink';

const NavBar = () => (
  <div className="nav">
    <div className="nav-bar">
      <header className="logo-title">
        <img className="logo" src={logo} alt="logo" />
        <h1 className="header-title">Space-Travellers&apos; Hub</h1>
      </header>
      <NavLinks />
    </div>
    <hr />
  </div>
);

export default NavBar;
