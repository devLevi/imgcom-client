import React from 'react';
import { connect } from 'react-redux';
import CommentListView from '../comment/CommentListView.jsx';
import CreateComment from '../comment/CreateComment.jsx';

import { getImage } from './image-actions';

export class ImageDetailsView extends React.Component {
  componentDidMount() {
    this.props.getImage({
      jwt: this.props.jwt,
      imageId: this.props.match.params.imageId
    });
  }

  render() {
    const { image } = this.props;
    if (!image) {
      return <p>Warming up the time machine!</p>;
    }
    return (
      <main className="img-preview">
        <div className="image-card">
          <div className="image-wrapper">
            <img src={image.url} alt={image.url} />
          </div>
        </div>
        {/* <CommentListView imageId={image.imageId} />
        <CreateComment /> */}
      </main>
    );
  }
}

const mapStateToProps = state => ({
  jwt: state.auth.jwt,
  image: state.image.imageDetails
});

const mapDispatchToProps = {
  getImage
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ImageDetailsView);
