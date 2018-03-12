import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Link } from 'react-router-dom';
import homePage from './homePage'
import aboutPage from './aboutPage'
import classesPage from './classesPage'

class App extends Component {
  render() {
    return (
      <Router>
        <div className = "App">
          <nav>
            <Link to = '/'>Home</Link> 
            <Link to = "/about">About</Link>
            <Link to = "/classes/capstone"> Capstone </Link>
            <Link to = "/classes/reactive-user-interface"> RUI </Link>
          </nav>

          <Route exact path = "/" component = {homePage} />
          <Route exact path = "/about" component = {aboutPage} />
          <Route path = "/classes/:id" component = {classesPage} />
        </div>
      </Router>
    );
  }
}

export default App;
