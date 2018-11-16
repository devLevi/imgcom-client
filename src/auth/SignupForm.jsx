import React from 'react';
import { Field, reduxForm } from 'redux-form';

export const SignupForm = props => (
  <form id="signup" onSubmit={props.handleSubmit}>
    <div className="input-field-container">
      <label>
        <Field
          className="field"
          type="email"
          name="email"
          placeholder="Email"
          component="input"
        />
      </label>
    </div>
    <div className="input-field-container">
      <label>
        <Field
          className="field"
          type="username"
          name="username"
          placeholder="Username"
          component="input"
        />
      </label>
    </div>
    <div className="input-field-container">
      <label>
        <Field
          className="field"
          type="password"
          name="password"
          placeholder="Password"
          component="input"
        />
      </label>
    </div>
    <div className="input-field-container">
      <label>
        <Field
          className="field"
          type="password"
          name="password"
          placeholder="Confirm password"
          component="input"
        />
      </label>
      <button type="submit" className="signup-button" value="Create Account">
        Sign up
      </button>
    </div>
  </form>
);

export default reduxForm({
  form: 'signup'
})(SignupForm);
