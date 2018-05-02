import React, { Component } from "react";

class ArtistBtn extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  onClick() {
    this.props.onClick(this.props.sketchName);
  }
  render() {
    return (
      <div className="artist-btn" onClick={this.onClick}>
        <a href="https://placeholder.com">
          <img
            src="http://via.placeholder.com/100x100"
            alt={this.props.sketchName}
          />
        </a>
        <span>{this.props.btnName}</span>
      </div>
    );
  }
}

export default ArtistBtn;
