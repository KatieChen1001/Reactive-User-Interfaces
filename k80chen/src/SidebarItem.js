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
    return <li onClick={this.onClick}>{this.props.tagName}</li>;
  }
}

export default SidebarItem;
