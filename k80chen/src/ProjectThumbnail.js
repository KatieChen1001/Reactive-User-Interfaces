import React, { Component } from "react";

class ProjectThumbnail extends Component {
  render() {
    let idName = this.props.divID;
    return (
      <div className={"project-thumbnail " + idName}>
        <div className="project-text-wrapper">
          <h1>{this.props.projectTitle}</h1>
          <p className="project-text-wrapper">{this.props.description}</p>
          <span className="project-text-wrapper">{this.props.keywords}</span>
        </div>
      </div>
    );
  }
}

export default ProjectThumbnail;
