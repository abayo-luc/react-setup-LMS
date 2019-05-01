import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import SubNav from './SubNav';

const icon = require('../../assets/icons/lines.svg');

const NavBar = () => (
  <div>
    <div id="nav">
      <div className="menu">
        <img src={icon} alt="-" />
      </div>
      <div className="title">
        <h2>ReadIT</h2>
      </div>
      <div className="nav-links">
        <ul className="links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>About</li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </div>
    </div>
    <SubNav />
  </div>
);
export default NavBar;
