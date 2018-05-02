import React, { Component } from "react";

class WritingDetail extends Component {
  render() {
    return (
      <div className="writing-detail-wrapper display-area">
        <h1>{this.props.articleContent.title}</h1>
        <span>{this.props.articleContent.tag}</span>
        <div
          className="article-text-wrapper"
          dangerouslySetInnerHTML={{ __html: this.props.articleContent.body }}
        />
      </div>
    );
  }
}

export default WritingDetail;
