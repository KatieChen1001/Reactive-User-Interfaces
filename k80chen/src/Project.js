import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Thumbnail from "./ProjectThumbnail.js";

class Project extends Component {
  render() {
    const projectListing = this.props.projectData.map((projects, i) => {
      return (
        <Link to={"/projects/" + projects.id}>
          <Thumbnail
            projectTitle={projects.title}
            description={projects.description}
            keywords={projects.keywords}
            divID={"number" + i}
          />
        </Link>
      );
    });
    return (
      <div>
        <div className="projectListing-container">{projectListing}</div>
      </div>
    );
  }
}

export default Project;
