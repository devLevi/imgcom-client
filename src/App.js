import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import HomeView from './home/HomeView.jsx';
import Navbar from './navbar/Navbar.jsx';
import ImagePreview from './image-card/ImagePreview.jsx';
import AddImageView from './add-image/AddImageView.jsx';
import LoginView from './auth/LoginView.jsx';
import SignupView from './auth/SignupView.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Navbar />
          <Route exact path="/" component={HomeView} />
          <Route path="/add-image" component={AddImageView} />
          <Route path="/image-preview" component={ImagePreview} />
          <Route path="/login" component={LoginView} />
          <Route path="/signup" component={SignupView} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
