import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Menu from "./Menu.js";

class Writing extends Component {
  render() {
    return (
      <div>
        <h1>Writing Listing</h1>
        <Menu />
      </div>
    );
  }
}

export default Writing;
