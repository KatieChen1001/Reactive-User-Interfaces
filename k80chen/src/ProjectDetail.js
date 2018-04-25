import React, { Component } from "react";

class ProjectDetail extends Component {
  render() {
    return (
      <div className="project-detail-wrapper">
        <h1>{this.props.projectContent.title}</h1>
        <div
          dangerouslySetInnerHTML={{ __html: this.props.projectContent.body }}
        />
      </div>
    );
  }
}

export default ProjectDetail;
