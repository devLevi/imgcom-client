import React from 'react';
import './navbar.css';

import { BrowserRouter as Link } from 'react-router-dom';

export default class HomeNavbar extends React.Component {
  render() {
    return (
      <div className="nav-container">
        <nav className="navigation" role="navigation">
          <h1 className="title">ImgCom</h1>
          <ul className="navbar">
            <li>
              <Link to="/login">
                <button className="nav-button login">login</button>
              </Link>
            </li>
            <li>
              <Link to="/signup">
                <button className="nav-button signup">signup</button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
