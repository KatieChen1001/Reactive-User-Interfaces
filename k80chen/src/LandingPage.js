import React, { Component } from "react";
import { Link } from "react-router-dom";

class LandingPage extends Component {
  render() {
    return (
      <div className="landing-page">
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
      </div>
    );
  }
}

export default LandingPage;
