import React from 'react';
import './navbar.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
export default class HomeNavbar extends React.Component {
  render() {
    return (
      <div className="nav-container">
        <nav className="navigation" role="navigation">
          <h1 className="title">ImgCom</h1>
          <ul className="navbar">
            <li>
              <Link to="/">
                <button className="nav-button logout">logout</button>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}
