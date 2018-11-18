import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './auth.css';
import LoginForm from './LoginForm';

export class LoginView extends React.Component {
  login(values) {
    this.props.dispatch({
      type: 'LOGIN_SUCCESS',
      username: values.username,
      jwt: 'alskdjfkdlsalskdjfjdkslal'
    });
    alert('Login Succesful.');
    this.props.history.push('/');
  }
  render() {
    return (
      <section className="login-page-screen" aria-live="assertive">
        {/* <h1 className="title">ImgCom</h1> */}
        <LoginForm onSubmit={this.login.bind(this)} />
        <p className="link-to-signup">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </section>
    );
  }
}

export default connect()(LoginView);
