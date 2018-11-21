import React from 'react';
import Dropzone from 'react-dropzone';

class ImageInput extends React.Component {
  state = {
    filesToUpload: []
  };

  renderImagePreview(image, index) {
    return (
      <div key={index}>
        <p className="image-name">{image.name}</p>
      </div>
    );
  }

  render() {
    return (
      <div className="dropzone-container">
        <Dropzone
          className="dropzone"
          multiple={false}
          onDrop={filesToUpload => {
            this.setState({ filesToUpload });
            return this.props.input.onChange(filesToUpload);
          }}
        >
          <div>
            Drag and drop
            <br />
            <strong>OR</strong>
            <br />
            click here to upload an image!
          </div>
        </Dropzone>
        {this.state.filesToUpload.map(this.renderImagePreview)}
      </div>
    );
  }
}

export default ImageInput;
