import React from 'react';
import './comment-bubble.css';

export default class CommentBubble extends React.Component {
  render() {
    return (
      <div className="comment-bubble">
        <div className="bubble-wrapper">
          <i class="fas fa-comment" />
        </div>
      </div>
    );
  }
}
