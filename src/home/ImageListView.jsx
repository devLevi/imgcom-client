import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export class ImageListView extends React.Component {
  renderImage(image) {
    return (
      <React.Fragment>
        <div className="image-card">
          <div className="image-wrapper">
            <img src={image.url} alt="" />
          </div>
        </div>
        <div className="comment-bubble">
          <div className="bubble-wrapper">
            <Link to={`/details/${image.id}`}>
              <i className="fas fa-comment" />
            </Link>
          </div>
        </div>
      </React.Fragment>
    );
  }

  render() {
    const images = this.props.imageList.map(this.renderImage);
    return <main className="image-list">{images}</main>;
  }
}

const mapStateToProps = state => ({
  imageList: state.image.imageList
});

export default connect(mapStateToProps)(ImageListView);
