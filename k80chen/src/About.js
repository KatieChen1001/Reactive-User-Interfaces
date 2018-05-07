import React, { Component } from "react";

class About extends Component {
  render() {
    return (
      <div className="display-area">
        <h1 className="project-title">¡Hola! 你好 Hello!</h1>
        <div className="intro-container">
          <div className="intro-img-container">
            <img src="./assets/about/me.jpg" width="100%" />
          </div>
          <div className="intro-text-container">
            <p className="project-text">
              Katie Chen (陈梦竹) is a NYU Shanghai graduate, majoring in B.S.
              Interactive Media Arts with a minor of Business and Finance. She
              is on her way of becoming a coder and writer. Katie is broadly
              interestd in how technology shapes the human society and
              data-driven policy making.
            </p>
            <br />
            <p className="project-text">
              Katie enjoys learning languages on the road in her spare time.{" "}
              <a href="https://view.publitas.com/p222-13380/mengzhu-chen-katie-resume/">
                Here
              </a>’s the link to her resume.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
