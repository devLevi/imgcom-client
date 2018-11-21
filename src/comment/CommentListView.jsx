import React from 'react';
import { connect } from 'react-redux';
import './comment.css';

export class CommentListView extends React.Component {
  renderComment(comment, index) {
    return (
      <div key={index} className="single-comment">
        <div className="comment-wrapper">
          <div className="username">{comment.username}</div>
          <div className="comment">{comment.content}</div>
        </div>
      </div>
    );
  }

  render() {
    const comments = this.props.comments.map(this.renderComment);
    return <div className="comment-list">{comments}</div>;
  }
}

const mapStateToProps = state => ({
  comments: state.image.imageDetails.comments
});

export default connect(mapStateToProps)(CommentListView);
