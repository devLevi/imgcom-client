import React from 'react';
import './photo.css';
export default class Photo extends React.Component {
  render() {
    return (
      <div className="single-photo">
        <div className="img-wrapper">
          <img src="https://picsum.photos/500/375" alt="title" />
        </div>
      </div>
    );
  }
}
