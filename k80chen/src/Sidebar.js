import React, { Component } from "react";
import SidebarItem from "./SidebarItem.js";

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick(tagName) {
    this.props.onClick(tagName);
  }
  render() {
    const tags = this.props.writingData.map((tags, i) => {
      return <SidebarItem tagName={tags.tag} onClick={this.onClick} key={i} />;
    });
    return (
      <div className="article-listing-sidebar">
        <ul>{tags}</ul>
      </div>
    );
  }
}

export default Sidebar;
