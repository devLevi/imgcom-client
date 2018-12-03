import React from 'react';
import './navbar.css';
import { connect } from 'react-redux';
import { logout } from '../auth/auth-actions';
import { Link, withRouter } from 'react-router-dom';

export class Navbar extends React.Component {
  logout() {
    this.props.logout();
    alert("You've been logged out. Catch ya on the flip side.");
    this.props.history.push('/');
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
            <button
              onClick={this.logout.bind(this)}
              className="nav-button logout"
            >
              logout
            </button>
          </Link>
          <Link to="/add-image">
            <button className="nav-button add-image">
              <i className="fas fa-plus" />
            </button>
          </Link>
        </li>
      </React.Fragment>
    ) : null;
    return (
      <div className="nav-container">
        <nav className="navigation" role="navigation">
          <Link to="/" className="home-link">
            <h1 className="title">ImgCom</h1>
          </Link>
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

const mapDispatchToProps = {
  logout
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Navbar));
