import React, { Component } from "react";

class WritingThumbnail extends Component {
  render() {
    return (
      <div className="articleThumbnail-wrapper">
        <div className="articleImage-wrapper">
          <img src={this.props.articleHeaderImg} alt="placeholder" />
        </div>
        <div className="articleSnapshot-text-wrapper">
          <h1 className="articleSnapshot">{this.props.articleTitle}</h1>
          <div className="articleThumbnail-icon-container">
            <i className="far fa-calendar-alt" />
            <span className="articleThumbnail-span">
              {this.props.articleDate}
            </span>
          </div>
          <p className="articleSnapshot">{this.props.articleSnapshot}</p>
        </div>
      </div>
    );
  }
}

export default WritingThumbnail;
