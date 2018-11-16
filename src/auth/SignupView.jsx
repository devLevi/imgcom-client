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
        <h1 className="title">ImgCom</h1>
        <SignupForm onSubmit={this.signup.bind(this)} />
        <p className="link-to-login">
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </section>
    );
  }
}

export default SignupView;
