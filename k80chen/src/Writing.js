import React, { Component } from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu.js";
import Sidebar from "./Sidebar.js";
import WritingThumbnail from "./WritingThumbnail.js";

class Writing extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = {
      tagClicked: ""
    };
  }
  onClick(tagName) {
    this.setState({
      tagClicked: tagName
    });
  }
  render() {
    let totalArticle = this.props.writingData;
    let filteredArticle;
    if (this.state.tagClicked !== "") {
      filteredArticle = totalArticle.filter(listing => {
        return listing.tag.match(this.state.tagClicked);
      });
    } else {
      filteredArticle = totalArticle;
    }
    let articleListing = filteredArticle.map((articles, i) => {
      return (
        <Link to={"/writings/" + articles.id} key={"/writings/" + articles.id}>
          <WritingThumbnail
            articleTitle={articles.title}
            articleSnapshot={articles.snapshot}
            key={i}
          />
        </Link>
      );
    });

    return (
      <div>
        <nav>
          <Sidebar
            writingData={this.props.writingData}
            onClick={this.onClick}
          />
        </nav>
        <div className="articleListing-container display-area">
          {articleListing}
        </div>
        <Menu />
      </div>
    );
  }
}

export default Writing;
