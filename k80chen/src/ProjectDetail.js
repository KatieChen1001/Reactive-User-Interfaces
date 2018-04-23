import React, { Component } from "react";

class ProjectDetail extends Component {
  render() {
    return (
      <div className="project-detail-wrapper">
        <h1>{this.props.projectContent.title}</h1>
        <p>{this.props.projectContent.content}</p>
      </div>
    );
  }
}

export default ProjectDetail;
