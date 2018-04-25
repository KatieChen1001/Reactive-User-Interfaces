import React, { Component } from "react";

class WritingDetail extends Component {
  render() {
    return (
      <div className="writing-detail-wrapper">
        <h1>{this.props.articleContent.title}</h1>
        <div
          dangerouslySetInnerHTML={{ __html: this.props.articleContent.body }}
        />
      </div>
    );
  }
}

export default WritingDetail;
