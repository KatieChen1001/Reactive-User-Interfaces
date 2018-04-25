import React, { Component } from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu.js";
import WritingThumbnail from "./WritingThumbnail.js";

class Writing extends Component {
  render() {
    const articleListing = this.props.writingData.map((articles, i) => {
      return (
        <Link to={"/writings/" + articles.id}>
          <WritingThumbnail
            articleTitle={articles.title}
            articleSnapshot={articles.snapshot}
          />
        </Link>
      );
    });
    return (
      <div>
        <div className="articleListing-container">{articleListing}</div>
        <Menu />
      </div>
    );
  }
}

export default Writing;
