import React from 'react';
import { connect } from 'react-redux';
import Navbar from '../navbar/Navbar.jsx';
import Photo from '../image-card/Photo.jsx';
import { ADD_COMMENT } from '../redux/actions.js';
class HomeView extends React.Component {
  testMethod() {
    this.props.dispatch({ type: ADD_COMMENT });
  }
  render() {
    return (
      <div>
        <Navbar />
        <Photo />
        <Photo />
        <Photo />
        <Photo />
        <Photo />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  images: state.images
});

export default connect(mapStateToProps)(HomeView);
