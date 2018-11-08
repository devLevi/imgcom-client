import React from 'react';
import './login-signup-view.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class LoginView extends React.Component {
  render() {
    return (
      <section className="login-page-screen" aria-live="assertive">
        <h1 className="title">ImgCom</h1>
        <form id="login">
          <fieldset name="login-info">
            <p id="notification" />
            <div className="input-field-container">
              <label for="email" required />

              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
              />
            </div>
            <div className="input-field-container">
              <label for="password" required />

              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                required
              />
              <button type="submit" className="login-button">
                Login
              </button>
            </div>
          </fieldset>

          <p>Don't have an account? Sign up (add link)</p>
          {/* <p>
            Don't have an account? <Link>Sign up</Link>
          </p> */}
        </form>
      </section>
    );
  }
}
