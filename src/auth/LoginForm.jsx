import React from 'react';
import { Field, reduxForm } from 'redux-form';

export const LoginForm = props => (
  <form id="login" onSubmit={props.handleSubmit}>
    <div className="input-field-container">
      <label>
        <Field
          className="field"
          type="text"
          name="username"
          id="username"
          component="input"
          placeholder="Username"
        />
      </label>
    </div>
    <div className="input-field-container">
      <label>
        <Field
          className="field"
          type="password"
          name="password"
          id="password"
          component="input"
          placeholder="Password"
        />
      </label>
      <button type="submit" className="login-button" value="Login">
        Login
      </button>
    </div>
  </form>
);

export default reduxForm({
  form: 'login'
})(LoginForm);
