import React from 'react';
import './comment-writer.css';
import CreateCommentForm from './CreateCommentForm';
import { reset } from 'redux-form';
import { connect } from 'react-redux';
import './comment-writer.css';

export class CommentWriter extends React.Component {
  createComment(values) {
    console.log(values);
    alert('Comment created!');
    this.props.dispatch(reset('createComment'));
  }
  render() {
    return (
      <div className="comment-writer">
        <CreateCommentForm onSubmit={this.createComment.bind(this)} />
      </div>
    );
  }
}

export default connect()(CommentWriter);
