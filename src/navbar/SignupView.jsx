import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './login-signup-view.css';

export default class SignupView extends React.Component {
  render() {
    return (
      <section className="signup-page-screen" aria-live="assertive">
        <h1 className="title">ImgCom</h1>
        <form id="signup">
          <fieldset name="signup-info">
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
            </div>
            <div className="input-field-container">
              <label for="password-confirm" required />

              <input
                type="password"
                name="password"
                id="password-confirm"
                placeholder="Confirm Password"
                required
              />
              <button type="submit" className="signup-button">
                Sign up
              </button>
            </div>
          </fieldset>
          <p>Already have an account? Login (add link)</p>
          {/* <p>
            Already have an account? <Link>Log in</Link>
          </p> */}
        </form>
      </section>
    );
  }
}
