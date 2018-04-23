import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Menu from "./Menu.js";

class HomePage extends Component {
  render() {
    return (
      <div className="HomePage">
        <div className="landing-page-container left">
          <h1>
            <Link to="/projects">Code</Link>
          </h1>
        </div>
        <div className="landing-page-container right">
          <h1>
            <Link to="/writings">Write</Link>
          </h1>
        </div>
        <Menu />
      </div>
    );
  }
}

export default HomePage;
