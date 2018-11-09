import React from 'react';
import './comment-writer.css';

export default class Comment extends React.Component {
  render() {
    return (
      <div className="comment-writer">
        <form className="comment-form">
          <input type="text" placeholder="Add a comment..." />
          <input type="submit" hidden />
        </form>
      </div>
    );
  }
}
