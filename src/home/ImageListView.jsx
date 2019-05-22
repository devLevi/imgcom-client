import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getImages, deleteImage } from '../images/image-actions';
export class ImageListView extends React.Component {
  componentDidMount() {
    this.props.getImages({
      jwt: this.props.jwt
    });
  }

  deleteImage(imageId) {
    this.props
      .deleteImage({
        jwt: this.props.jwt,
        imageId
      })
      .then(() => {
        alert('That image is toast!');
        this.props.getImages({
          jwt: this.props.jwt
        });
      });
  }

  renderImage(image) {
    return (
      <div className="image-card-continer" key={image.id}>
        <div className="image-card-block">
          <div className="image-card" data-image-id={image.id}>
            <div className="image-wrapper">
              <Link to={`details/${image.id}`}>
                <img src={image.url} alt={image.url} />
              </Link>
            </div>
          </div>
          <div className="delete-button">
            <button
              id="delete-image-button"
              onClick={() => this.deleteImage(image.id)}
            >
              Delete
            </button>
            {/* <div className="comment-bubble"> */}
            <div className="bubble-wrapper">
              <Link to={`/details/${image.id}`}>
                <i className="fas fa-comment" />
              </Link>
            </div>
            {/* </div> */}
          </div>
        </div>
      </div>
    );
  }

  render() {
    const images = this.props.imageList.map(this.renderImage.bind(this));
    return <main className="image-list">{images}</main>;
  }
}

const mapStateToProps = state => ({
  imageList: state.image.imageList,
  jwt: state.auth.jwt
});

const mapDispatchToProps = {
  getImages,
  deleteImage
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageListView);
