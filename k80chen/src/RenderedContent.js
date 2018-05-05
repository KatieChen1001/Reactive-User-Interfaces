import React, { Component } from "react";
import P5Wrapper from "react-p5-wrapper";

import WarholSketch from "./sketches/WarholSketch.js";
import PicassoSketch from "./sketches/PicassoSketch.js";
import MalevinchSketch from "./sketches/MalevinchSketch.js";
import MondrianSketch from "./sketches/MondrianSketch.js";

class RenderedContent extends Component {
  render() {
    // Andy Warhol
    let WarholramBgClr = getRandomInt(5);
    // Pablo Picasso
    let PicassoRam1 = getRandomInt(4);
    let PicassoRam2 = getRandomInt(2);
    let PicassoRam3 = Math.random(0.9);
    let PicassoRam4 = getRandomInt(5);

    if (this.props.sketchFileName === "WarholSketch") {
      return <P5Wrapper sketch={WarholSketch} ramBgClr={WarholramBgClr} />;
    } else if (this.props.sketchFileName === "PicassoSketch")
      return (
        <P5Wrapper
          sketch={PicassoSketch}
          ramBgClr={PicassoRam1}
          ramBodyClr={PicassoRam2}
          ramHat={PicassoRam3}
          ramNoseClr={PicassoRam4}
        />
      );
    else if (this.props.sketchFileName === "MalevinchSketch")
      return <P5Wrapper sketch={MalevinchSketch} />;
    else if (this.props.sketchFileName === "MondrianSketch")
      return <P5Wrapper sketch={MondrianSketch} />;
    else {
      return <div />;
    }
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export default RenderedContent;
