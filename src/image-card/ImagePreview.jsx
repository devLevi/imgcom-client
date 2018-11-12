import React from 'react';
import Photo from './Photo.jsx';
import CommentBubble from '../comment/CommentBubble.jsx';
import Comment from '../comment/Comment.jsx';
import CommentWriter from '../comment/CommentWriter.jsx';

class ImagePreview extends React.Component {
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
export default ImagePreview;
