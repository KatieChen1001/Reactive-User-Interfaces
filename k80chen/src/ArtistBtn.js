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
        <img
          src={"../assets/projects/mini/" + this.props.sketchName + ".png"}
          alt={this.props.sketchName}
          width="100px"
        />

        <span>{this.props.btnName}</span>
      </div>
    );
  }
}

export default ArtistBtn;
