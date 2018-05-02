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
