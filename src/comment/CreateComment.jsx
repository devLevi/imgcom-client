import React from 'react';
import './comment-writer.css';
import AuthProtectedComponent from '../auth/auth-protected-component';
import CreateCommentForm from './CreateCommentForm';

import { createComment } from './comment-actions';
import { reset } from 'redux-form';
import { connect } from 'react-redux';
import './comment-writer.css';

export class CommentWriter extends React.Component {
  createComment(values) {
    this.props
      .createComment({
        comment: values,
        jwt: this.props.jwt
      })
      .then(comment => {
        alert('Comment created!');
        this.props.dispatch(reset('createComment'));
      });
  }
  render() {
    return (
      <div className="comment-writer">
        <CreateCommentForm onSubmit={this.createComment.bind(this)} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  jwt: state.auth.jwt
});

const mapDispatchToProps = {
  createComment
};
export default AuthProtectedComponent(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CommentWriter)
);
