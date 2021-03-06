import React from 'react';
import './temp-navbar.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class TempNavbar extends React.Component {
  render() {
    return (
      <div>
        <div className="extra-space" />
        <nav className="temp-nav" role="navigation">
          <ul className="temp-list">
            <li>
              <Link to="/">Home View</Link>
            </li>
            <li>
              <Link to="/add-image">Add Image View</Link>
            </li>
            <li>
              <Link to="/image-preview">Image Preview View</Link>
            </li>
            <li>
              <Link to="/login">Login View</Link>
            </li>
            <li>
              <Link to="/signup">Signup View</Link>
            </li>
            {/* <li>
            <Link to="/image-submit">Image Submit View</Link>
          </li>
          <li>
            <Link to="/comment-writer">Comment Writer View</Link>
          </li>
          <li>
            <Link to="/image-card">Image Card View</Link>
          </li>
          */}
          </ul>
        </nav>
      </div>
    );
  }
}
