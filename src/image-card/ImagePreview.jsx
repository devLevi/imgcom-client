import React from 'react';
import Photo from './Photo.jsx';
import CommentBubble from './CommentBubble.jsx';
import Comment from './Comment.jsx';
import CommentWriter from './CommentWriter.jsx';

export default class ImagePreview extends React.Component {
  render() {
    return (
      <div className="img-preview">
        <Photo />
        <CommentBubble />
        <Comment />
        <CommentWriter />
      </div>
    );
  }
}
