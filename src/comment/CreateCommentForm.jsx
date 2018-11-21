import React from 'react';
import { Field, reduxForm } from 'redux-form';

export const CreateCommentForm = props => {
  return (
    <form id="new-comment-form" onSubmit={props.handleSubmit}>
      <label>
        <Field
          name="comment"
          component="input"
          type="text"
          character-limit="70"
          className="form-field"
          placeholder="Say something awesome!"
        />
      </label>
      <br />
      <input type="submit" value="Add Comment" />
    </form>
  );
};

export default reduxForm({
  form: 'createComment'
})(CreateCommentForm);
