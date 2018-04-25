import React, { Component } from "react";

class WritingThumbnail extends Component {
  render() {
    return (
      <div className="articleThumbnail-wrapper">
        <div className="articleImage-wrapper">
          <img src="/assets/0.jpg" alt="placeholder Image" />
        </div>

        <h1>{this.props.articleTitle}</h1>
        <div className="articleThumbnail-icon-container">
          <i className="far fa-calendar-alt" />
          <span>Jan 8th, 2018 </span>
        </div>
        <div className="articleSnapshot-text-wrapper">
          <p>{this.props.articleSnapshot}</p>
        </div>
      </div>
    );
  }
}

export default WritingThumbnail;
