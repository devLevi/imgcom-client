import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import HomeView from './home/HomeView.jsx';
import TempNavbar from './temp-navbar/TempNavbar.jsx';
import ImagePreview from './image-card/ImagePreview.jsx';
import CommentWriter from './image-card/CommentWriter.jsx';
import Comment from './image-card/Comment.jsx';
import LoginView from './navbar/LoginView.jsx';
import SignupView from './navbar/SignupView.jsx';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <TempNavbar />
          <Route exact path="/" component={HomeView} />
          <Route exact path="/image-preview" component={ImagePreview} />
          <Route exact path="/comment-writer" component={CommentWriter} />
          <Route exact path="/comment" component={Comment} />
          <Route exact path="/login" component={LoginView} />
          <Route exact path="/signup" component={SignupView} />
          {/* <Route exact path="/image-submit" component={ImageSubmitView} />
          <Route exact path="/comment-writer" component={CommentWriter} />
          <Route exact path="/image-card" component={ImageCard} />
           */}
        </div>
      </Router>
    );
  }
}

export default App;
