import React from 'react';
import HomeNavbar from '../navbar/HomeNavbar.jsx';
import Photo from '../image-card/Photo.jsx';
export default class HomeView extends React.Component {
  render() {
    return (
      <div>
        <HomeNavbar />
        <Photo />
        <Photo />
        <Photo />
        <Photo />
        <Photo />
      </div>
    );
  }
}
