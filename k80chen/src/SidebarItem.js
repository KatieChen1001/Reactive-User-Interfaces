import React, { Component } from "react";

class SidebarItem extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    this.props.onClick(this.props.tagName);
  }
  render() {
    return (
      <li onClick={this.onClick}>
        <a href="#">{this.props.tagName}</a>
      </li>
    );
  }
}

export default SidebarItem;
