import React from 'react';
import { connect } from 'react-redux';
import ImageListView from './ImageListView.jsx';
import './home.css';

export const LandingView = props => {
  const defaultView = (
    <React.Fragment>
      <div className="logo-image-wrapper">
        <img
          className="imgcom-logo"
          src="https://i.imgur.com/2DJKXL8.png)"
          alt="imagecom logo"
        />
      </div>
      <div className="image-card">
        <div className="image-wrapper">
          <img
            className="home-page-image"
            src="https://i.imgur.com/DtLvEey.jpg"
            alt="home-page-img"
          />
        </div>
      </div>
    </React.Fragment>
  );

  const authView = <ImageListView />;

  return props.isLoggedIn ? authView : defaultView;
};

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn
});

export default connect(mapStateToProps)(LandingView);
