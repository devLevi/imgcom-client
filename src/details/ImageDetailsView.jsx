import React from 'react';
import { connect } from 'react-redux';
import CommentListView from '../comment/CommentListView.jsx';
import CreateComment from '../comment/CreateComment.jsx';

export class ImageDetailsView extends React.Component {
  render() {
    const { image } = this.props;
    const { imageId } = this.props.match.params;
    return (
      <main className="img-preview">
        <div className="image-card">
          <div className="image-wrapper">
            <img src={image.url} alt={image.url} />
          </div>
        </div>
        <CommentListView imageId={imageId} />
        <CreateComment />
      </main>
    );
  }
}

const mapStateToProps = state => ({
  image: state.image.imageDetails
});

export default connect(mapStateToProps)(ImageDetailsView);
