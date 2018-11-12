import React from 'react';
import './navbar.css';
import { connect } from 'react-redux';

import { BrowserRouter as Link } from 'react-router-dom';

export class Navbar extends React.Component {
  logout() {
    this.props.dispatch({
      type: 'LOGOUT_SUCCESS'
    });
    alert('Logout Succesful.');
  }
  render() {
    const homeScreenLinks = !this.props.isLoggedIn ? (
      <React.Fragment>
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
      </React.Fragment>
    ) : null;

    const userLinks = this.props.isLoggedIn ? (
      <React.Fragment>
        <li>
          <Link to="/">
            <button className="nav-button logout">logout</button>
          </Link>
          <Link to="/add-image">
            <button className="nav-button add-image">
              <i class="fas fa-plus" />
            </button>
          </Link>
        </li>
      </React.Fragment>
    ) : null;
    return (
      <div className="nav-container">
        <nav className="navigation" role="navigation">
          <h1 className="title">ImgCom</h1>
          <ul className="navbar">
            {homeScreenLinks}
            {userLinks}
          </ul>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn
});

export default connect(mapStateToProps)(Navbar);
