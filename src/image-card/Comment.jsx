import React from 'react';
import './comment.css';

export default class Comment extends React.Component {
  render() {
    return (
      <div className="single-comment">
        <div className="comment-wrapper">
          <div className="username">levi</div>
          <div className="comment">Lorem ipsum dolor</div>
        </div>
      </div>
    );
  }
}
