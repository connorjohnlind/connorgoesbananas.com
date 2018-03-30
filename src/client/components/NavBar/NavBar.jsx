import React from 'react';
import { NavLink } from 'react-router-dom';

import './NavBar.scss';

export default () => {
  return (
    <nav>
      <div className="title">
        <h1>connor goes bananas</h1>
        <div className="caption">
          <p>just another travel blog</p>
        </div>
      </div>
      <div className="links">
        <NavLink exact className="NavLink" activeClassName="NavLinkActive" to="/">Home</NavLink>
        <NavLink className="NavLink" activeClassName="NavLinkActive" to="/about">About</NavLink>
        <NavLink className="NavLink" activeClassName="NavLinkActive" to="/contact">Contact</NavLink>
      </div>
    </nav>
  );
};
