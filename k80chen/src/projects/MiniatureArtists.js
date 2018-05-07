import React, { Component } from "react";
import ArtistBtn from "../ArtistBtn.js";
import RenderedContent from "../RenderedContent.js";

class MiniatureArtists extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSketchName: "",
      display: ""
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(sketchFileName) {
    this.setState({
      activeSketchName: sketchFileName
    });
  }

  render() {
    return (
      <div className="display-area project-wrapper">
        <h1 className="project-title">Miniature Artists</h1>

        <div className="project-img" id="mini-poster">
          <img
            src="/assets/projects/mini/poster.png"
            width="80%"
            alt="placeholder"
          />
        </div>

        <p className="project-text">
          This project was born from "Programming Design Systems" class at
          Interative Media Arts program at NYU Shanghai.
        </p>

        <h2 className="project-section-title">Inspiration</h2>
        <p className="project-text">
          A spontaneous decision to spend a summer in the heart of the
          Renaissance, Florence, combined with a serendipitous discovery of an
          Interactive Media Arts major, has some how steered me toward a journey
          of art — arguably a doomed lifestyle of impoverishment [SARCASM].
        </p>

        <h2 className="project-section-title">Design Process</h2>
        <p className="project-text">
          Step 1 Research artists art creation process
        </p>

        <p className="project-text">
          Step 2 Identify artistic elements, such as color palette, recurring
          elements, stylistic choices, etc
        </p>

        <p className="project-text">
          Step 3 Determine which aspect(s) can / should be done in code
        </p>

        <h2 className="project-section-title">Live Demo</h2>
        <span className="artist-btn-panel-span">
          Click to see miniature artists come to life
        </span>

        <div className="artist-btn-panel">
          <ArtistBtn
            sketchName="WarholSketch"
            btnName="Andy Warhol"
            onClick={this.onClick}
          />

          <ArtistBtn
            sketchName="PicassoSketch"
            btnName="Pablo Picasso"
            onClick={this.onClick}
          />

          <ArtistBtn
            sketchName="MalevinchSketch"
            btnName="Malevinch"
            onClick={this.onClick}
          />

          <ArtistBtn
            sketchName="MondrianSketch"
            btnName="Piet Mondrian"
            onClick={this.onClick}
          />
        </div>

        <RenderedContent sketchFileName={this.state.activeSketchName} />
      </div>
    );
  }
}

export default MiniatureArtists;
