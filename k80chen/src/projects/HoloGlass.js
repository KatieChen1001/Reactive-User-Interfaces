import React, { Component } from "react";

class HoloGlass extends Component {
  render() {
    const iFrameStyle = {
      width: "100%",
      height: "600px"
    };
    return (
      <div className="display-area project-wrapper">
        <h1 className="project-title">Microsoft HoloGlass</h1>
        <div className="project-img">
          <a href="https://placeholder.com">
            <img
              src="http://via.placeholder.com/2052x1252"
              width="80%"
              alt="placeholder"
            />
          </a>
        </div>

        <h2 className="project-section-title">Project Challenge</h2>
        <p className="project-text">
          Design a proof of concept for a holographic portfolio that covers the
          end-to-end experience of an artist’s portfolio to be viewed on the
          HoloLens. This is not about creating an “artwork” for the HoloLens,
          but rather a way to interact with different works in mixed reality on
          the HoloLens. For the purpose of the demo, the user is a curator. The
          approach should be based on the experience of a studio visit.
        </p>
        <br />
        <p className="project-text">
          The holographic portfolio proof of concept must include experiences
          for the following types of artwork: 1) Painting or Photograph; 2)
          Sculpture; 3) Performance Art (this can include theatre, dance, and
          other performance art works) or Interactive Installation or Game; 4)
          Film/Video.{" "}
        </p>
        <br />
        <p className="project-text">
          The portfolio must also include a way to access the following items:
          1) Artist Bio; 2) Contact; 3) Artist Statement; 4) Upcoming
          Exhibitions and Exhibition History.{" "}
        </p>
        <br />
        <p className="project-text">
          The core of the challenge is to investigate how to present, enhance,
          and augment artwork experientially. By adding layers of information
          and data into reality, the mixed reality platform of the HoloLens
          creates opportunities to combine interactive objects with the real
          environment, to augment and extend human sensing.
        </p>
        <h2 className="project-section-title">Design Process</h2>
        <h3 className="project-subsection-title">Research and Brainstorming</h3>
        <p className="project-text">
          We started off with interviewing curators and visiting artists’
          studios to understand the curatorial process and art studio visit
          process. We were in conversation with:
        </p>
        <br />
        <h3 className="project-subsection-title">Affinity Diagram</h3>
        <a href="https://placeholder.com">
          <img
            className="project-img"
            src="http://via.placeholder.com/500x600"
            height="80%"
            alt="placeholder"
          />
        </a>
        <h3 className="project-subsection-title">Defining Concept</h3>
        <p className="project-text">
          We final proof of concept is called the “Immersive Web”. Inspired by a
          scene in the Iron Man movie, the Immersive Web shows a web diagram of
          artists, with visualizations of their work connected to their name in
          a web format.
        </p>
        <div className="project-img-container">
          <a href="https://placeholder.com">
            <img
              className="project-img"
              src="http://via.placeholder.com/400x300"
              height="80%"
              alt="placeholder"
            />
          </a>
          <span className="project-img-description">A picture</span>
        </div>

        <h2 className="project-section-title">Special Thanks</h2>
        <p className="project-text" id="specialThanks">
          Dana Karwas, professor at Integrated Digital Media at NYU
          <br />
          Joshua Walton, Principal Interaction Designer at Microsoft HoloLens
          <br />
          Nicholas Kamuda, Creative Director for Microsoft HoloLens
        </p>
        <h2 className="project-section-title">Acknowledgement</h2>
        <p className="project-text">
          This project was completed by an interdisciplinary team of 7, with
          background in design, programming and psychology. Team members are
          Anuj Bakshi, Mengzhu Chen (Katie), Lu Dai, Yifan Hu(Cindy), Levi
          Mollison, Akshay Narvekar, Lillian Warner.
        </p>
        <div>
          <iframe
            style={iFrameStyle}
            src="//e.issuu.com/embed.html#27303575/60833938"
            frameBorder={0}
            allowFullScreen
            title="HoloGlass Production Booklet"
          />
        </div>
      </div>
    );
  }
}

export default HoloGlass;
