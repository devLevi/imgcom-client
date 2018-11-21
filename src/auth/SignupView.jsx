import React from 'react';
import { Link } from 'react-router-dom';
import './auth.css';
import SignupForm from './SignupForm';

export class SignupView extends React.Component {
  signup(formValues) {
    alert(`User ${formValues.username} created. Redirecting you to login ...`);
    this.props.history.push('/login');
  }
  render() {
    return (
      <section className="signup-page-screen" aria-live="assertive">
        <Link to="/">
          <img
            className="imgcom-logo"
            src="https://i.imgur.com/2DJKXL8.png)"
            alt="imagecom logo"
          />
        </Link>
        <SignupForm onSubmit={this.signup.bind(this)} />
        <p className="link-to-login">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </section>
    );
  }
}

export default SignupView;
