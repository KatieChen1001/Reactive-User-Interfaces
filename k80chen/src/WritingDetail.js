import React, { Component } from "react";

class WritingDetail extends Component {
  render() {
    return (
      <div className="writing-detail-wrapper display-area">
        <h1 className="article-title">{this.props.articleContent.title}</h1>
        <img
          src="../assets/articles/botero/articleHeaderImg.jpg"
          width="100%"
        />

        <div
          className="article-text-wrapper"
          dangerouslySetInnerHTML={{ __html: this.props.articleContent.body }}
        />
      </div>
    );
  }
}

export default WritingDetail;
