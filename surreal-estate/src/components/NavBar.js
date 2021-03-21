import React from 'react';
import { Link } from 'react-router-dom';
import FacebookLogin from 'react-facebook-login';
import logo from '../styles/logo.png';

const NavBar = ({ onLogout, onLogin, userID }) => {
  const signoutButton = (
    <button
      type="button"
      className="my-facebook-button-class"
      onClick={onLogout}
    >
      Sign Out
    </button>
  );

  return (
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
        <FacebookLogin
          appId="1088597931155576"
          autoLoad={true}
          fields="name,email,picture"
          callback={onLogin}
          cssClass="my-facebook-button-class"
          icon="fa-facebook"
        />
      </ul>
    </div>
  );
};

export default NavBar;
