import React from 'react';
import { connect } from 'react-redux';

export class CommentListView extends React.Component {
  renderComment(comment) {
    return (
      <div className="single-comment">
        <div className="comment-wrapper">
          <div className="username">{comment.username}</div>
          <div className="comment">{comment.comment}</div>
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
  comments: state.imageList.comments
});

export default connect(mapStateToProps)(CommentListView);
