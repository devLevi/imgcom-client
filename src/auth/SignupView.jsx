import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './auth.css';
import SignupForm from './SignupForm';
import { signUp } from './auth-actions';
export class SignupView extends React.Component {
  signup(formValues) {
    this.props.signUp(formValues).then(createdUser => {
      alert(`Congratulations ${createdUser.username}. Taking you home now...`);
      this.props.history.push('/login');
    });
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

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  signUp
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupView);
