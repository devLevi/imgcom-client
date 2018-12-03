import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './auth.css';
import LoginForm from './LoginForm';
import { logIn } from './auth-actions';
export class LoginView extends React.Component {
  login(values) {
    this.props.logIn(values).then(loginData => {
      alert(
        `Welcome ${loginData.user.username} you have succesfully logged in.`
      );
      this.props.history.push('/');
    });
  }
  render() {
    return (
      <section className="login-page-screen" aria-live="assertive">
        <Link to="/">
          <img
            className="imgcom-logo"
            src="https://i.imgur.com/2DJKXL8.png)"
            alt="imagecom logo"
          />
        </Link>
        <LoginForm onSubmit={this.login.bind(this)} />
        <p className="link-to-signup">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </section>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {
  logIn
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginView);
