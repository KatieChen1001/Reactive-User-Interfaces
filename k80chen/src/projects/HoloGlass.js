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
          <img
            src="../assets/projects/hologlass/headerImg.jpg"
            width="80%"
            alt="HoloGlass Header Image"
          />
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

        <img
          className="project-img"
          src="../assets/projects/hologlass/AffinityDiagram.png"
          width="60%"
          alt="Affinity Diagram"
        />

        <h3 className="project-subsection-title">Defining Concept</h3>
        <p className="project-text">
          We final proof of concept is called the “Immersive Web”. Inspired by a
          scene in the Iron Man movie, the Immersive Web shows a web diagram of
          artists, with visualizations of their work connected to their name in
          a web format.
        </p>
        <div className="project-img-container">
          <img
            className="project-img"
            src="../assets/projects/hologlass/ironman.jpg"
            width="50%"
            alt="Iron Man Element Scene"
          />
          <span className="project-img-description">
            Element Scene from Iron Man
          </span>
        </div>

        <h3 className="project-subsection-title">Design Principles</h3>
        <p className="project-text">
          1. Minimalism:
          <ul>
            <li className="hologlass-listing">
              <p className="project-text">
                Minimal Instructions: We took a minimalistic approach to giving
                instructions, because we want to teach the user to use the
                HoloLens, and get them accustomed to using it. To achieve that,
                we chose to have instructional audio over step by step guidance.
              </p>
            </li>
            <br />
            <li className="hologlass-listing">
              <p className="project-text">
                Minimal Aesthetics: We choose to keep text display at the
                minimum and maintain a clean and clear interface.
              </p>
            </li>
            <br />
            <li className="hologlass-listing">
              <p className="project-text">
                Minimal Distraction: We want the users to be able to stay
                focused with the artwork. To do that, we designed a collapsible
                toolbar, which will only expanded when user airtaps it. In
                addition, since we have decided to communicate artists and
                artwork information via audio, we have also designed a email
                function, which allows the user to email the audio transcript to
                themselves, so that they don’t have to worry about remembering
                that information when they experience the artwork.
              </p>
            </li>
          </ul>
          2. Intuition: We want the user to be able to navigate in our
          application with their intuition. And we want to provide the users
          with a smooth transition from the 2D world of Internet browsing to the
          3D world of the HoloLens, where they could transfer some of their 2D
          navigating experience.
          <br />
          <br />
          3. Consistency: We want to maintain consistency in terms of
          functionality design, meaning that inputs and features generally stays
          the same across the application.
          <br />
          <br />
          4. Scalability: We see the immersive web with the potential scale and
          we designed it with that idea that in the future curators will be able
          to access a database of artists in mind.
        </p>

        <h2 className="project-section-title">Prototypes</h2>
        <h3 className="project-subsection-title">
          Prototyping Round 1 – BodyStorming
        </h3>
        <p className="project-text">
          Using post-it notes to represent elements in our application, a
          sandwich box as the HoloLens to experience a field of view, classroom
          whiteboards as our application interface, one of our teammates acting
          as artworks, we acted out the flow of our application.
        </p>
        <div className="project-img-container">
          <img
            className="project-img"
            src="../assets/projects/hologlass/prototype1.1.png"
            width="50%"
            alt="Paper Prototype Photo 1"
          />
          <span className="project-img-description">
            Lu rotating as a sculpture
          </span>
        </div>
        <div className="project-img-container">
          <img
            className="project-img"
            src="../assets/projects/hologlass/prototype1.2.png"
            width="50%"
            alt="Paper Prototype Photo 2"
          />
          <span className="project-img-description">
            Levi with a sandwich box as the user
          </span>
        </div>

        <h3 className="project-subsection-title">
          Prototyping Round 2 – Marvel Pop
        </h3>
        <p className="project-text">
          After we have defined our concept and discussed our features and
          functionalities, we decided to prototype in{" "}
          <a href="https://marvelapp.com/433bg1g/screen/27149809">
            Marvel Pop app
          </a>{" "}
          in order to test out the the logic of the application.
        </p>
        <div className="project-img-container">
          <img
            className="project-img"
            src="../assets/projects/hologlass/prototype2.1.png"
            width="50%"
            alt="Marvel Pop Prototype Photo 1"
          />
          <span className="project-img-description">
            Painting (with highlighted areas to showcase art-making process)
          </span>
        </div>
        <div className="project-img-container">
          <img
            className="project-img"
            src="../assets/projects/hologlass/prototype2.2.jpg"
            width="50%"
            alt="Marvel Pop Prototype Photo 2"
          />
          <span className="project-img-description">
            Sculpture interface (after user email himself the audio transcript)
          </span>
        </div>

        <h3 className="project-subsection-title">
          Prototyping Round 3 – HoloLens
        </h3>
        <p className="project-text">
          Using Unity and Microsoft Emulator, we began prototyping for the
          HoloLens. We were able to implement some voice commands and include
          gesture inputs.
        </p>
        <div className="project-img-container">
          <img
            className="project-img"
            src="../assets/projects/hologlass/prototype3.1.jpg"
            width="50%"
            alt="Unity Development"
          />
          <span className="project-img-description">Unity Development</span>
        </div>
        <div className="project-img-container">
          <img
            className="project-img"
            src="../assets/projects/hologlass/prototype3.2.jpg"
            width="50%"
            alt="Code Snippet"
          />
          <span className="project-img-description">Code Snippet</span>
        </div>

        <h2 className="project-section-title">User Testing</h2>
        <p className="project-text">
          We user tested both our Marvel Pop prototype and our HoloLens
          prototype. Here is our user testing results compiled.{" "}
        </p>
        <div className="project-img-container">
          <img
            className="project-img"
            src="../assets/projects/hologlass/usertest1.jpg"
            width="50%"
            alt="User Testing with the HoloLens"
          />
          <span className="project-img-description">
            User Testing with the HoloLens
          </span>
        </div>
        <div className="project-img-container">
          <img
            className="project-img"
            src="../assets/projects/hologlass/usertest2.jpg"
            width="50%"
            alt="User Testing with the HoloLens"
          />
          <span className="project-img-description">
            User Testing with the HoloLens
          </span>
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
