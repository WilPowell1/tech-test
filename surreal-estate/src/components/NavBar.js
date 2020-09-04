import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../styles/logo.png';

const NavBar = () => (
  <div className="navbar">
    <img src={logo} alt="Logo" />
    <ul className="navbar-links">
      <li className="navbar-links-item">
        <Link className="item" to="/">
          View Properties
        </Link>
      </li>
      <li className="navbar-links-item">
        <Link className="item" to="/AddProperty">
          Add Property
        </Link>
      </li>
    </ul>
  </div>
);

export default NavBar;
