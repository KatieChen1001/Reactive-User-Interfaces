import React, { Component } from "react";
import { Link } from "react-router-dom";

class Menu extends Component {
  render() {
    return (
      <div className="menu-container">
        <nav>
          <ul>
            <li>
              <Link to="/">Logo</Link>
            </li>
            <li>
              <Link to="/about">I am</Link>
            </li>
            <li>
              <Link to="/projects">a wanna-be programmer / </Link>
            </li>
            <li>
              <Link to="/writings">a wanne-be writer</Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Menu;
