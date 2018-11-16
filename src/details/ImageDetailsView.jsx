import React from 'react';
import { connect } from 'react-redux';
import CommentListView from '../comment/CommentListView.jsx';

export class ImageDetailsView extends React.Component {
  render() {
    const { image } = this.props;
    return (
      <main className="img-preview">
        <div className="image-card">
          <div className="image-wrapper">
            <img src={image.url} alt={image.url} />
          </div>
        </div>
        <CommentListView />
      </main>
    );
  }
}

const mapStateToProps = state => ({
  image: state.image.imageDetails
});

export default connect(mapStateToProps)(ImageDetailsView);
