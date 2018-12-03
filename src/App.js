import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LandingView from './home/LandingView.jsx';
import Navbar from './navbar/Navbar.jsx';
import ImageDetailsView from './images/ImageDetailsView.jsx';
import AddImageView from './images/AddImageView.jsx';
import LoginView from './auth/LoginView.jsx';
import SignupView from './auth/SignupView.jsx';

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Navbar />
          <Route exact path="/" component={LandingView} />
          <Route path="/login" component={LoginView} />
          <Route path="/signup" component={SignupView} />
          <Route path="/add-image" component={AddImageView} />
          <Route path="/details/:imageId" component={ImageDetailsView} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
