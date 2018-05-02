import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
// import template components
import Menu from "./Menu.js";
import About from "./About.js";
import LandingPage from "./LandingPage.js";
import Project from "./Project.js";
import Writing from "./Writing.js";
import WritingDetail from "./WritingDetail.js";
import ProjectData from "./ProjectData.js";
import WritingData from "./WritingData.js";
// import project pages
import MiniatureArtists from "./projects/MiniatureArtists.js";
import TheHungerGames from "./projects/TheHungerGames.js";
import HoloGlass from "./projects/HoloGlass.js";
import Tornado from "./projects/Tornado.js";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: ProjectData,
      writings: WritingData
    };
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/about" component={About} />
            <Route
              exact
              path="/projects"
              component={props => {
                return <Project projectData={this.state.projects} />;
              }}
            />
            <Route
              exact
              path="/writings"
              component={props => {
                return <Writing writingData={this.state.writings} />;
              }}
            />
            <Route
              path="/projects/miniature-artists"
              component={MiniatureArtists}
            />
            <Route
              path="/projects/the-hunger-games"
              component={TheHungerGames}
            />
            <Route path="/projects/hologlass" component={HoloGlass} />
            <Route path="/projects/tornado-simulation" component={Tornado} />
            <Route
              path="/writings/:id"
              render={props => {
                const article = this.state.writings.find(
                  article => article.id === props.match.params.id
                );
                return <WritingDetail articleContent={article} />;
              }}
            />
          </Switch>

          <Route component={Menu} />
        </div>
      </Router>
    );
  }
}

export default App;
