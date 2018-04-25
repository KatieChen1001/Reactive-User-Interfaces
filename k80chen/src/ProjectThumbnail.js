import React, { Component } from "react";

class ProjectThumbnail extends Component {
  render() {
    let idName = this.props.divID;
    return (
      <div className={"project-thumbnail " + idName}>
        <div className="project-text-wrapper">
          <h1>{this.props.projectTitle}</h1>
          <p>{this.props.description}</p>
          <p>{this.props.keywords}</p>
        </div>
      </div>
    );
  }
}

export default ProjectThumbnail;
