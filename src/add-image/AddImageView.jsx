import React from 'react';
import './add-image-view.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class AddImageView extends React.Component {
  render() {
    return (
      <div className="add-image-container">
        <h3>
          Select an image to upload, or navigate to the links above to view some
          pictures!
        </h3>
        <form class="upload-photo">
          {/* <input
            type="file"
            name="file-upload"
            value="file-upload"
            id="file-upload"
            accept="image/*"
          /> */}
          <label for="fileupload">Select Image</label>
          <button type="submit">Upload</button>
        </form>
      </div>
    );
  }
}
