import React from 'react';
import Photo from './Photo.jsx';
import CommentWriter from './CommentWriter.jsx';

export default class ImagePreview extends React.Component {
  render() {
    return (
      <div className="image-preview">
        <Photo />
        <CommentWriter />
      </div>
    );
  }
}
