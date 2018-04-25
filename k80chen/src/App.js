import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Menu from "./Menu.js";
import About from "./About.js";
import HomePage from "./HomePage.js";
import Project from "./Project.js";
import Writing from "./Writing.js";
import ProjectDetail from "./ProjectDetail.js";
import WritingDetail from "./WritingDetail.js";
import ProjectData from "./ProjectData.js";
import WritingData from "./WritingData.js";
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
            <Route exact path="/" component={HomePage} />
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
              path="/projects/:id"
              render={props => {
                const project = this.state.projects.find(
                  project => project.id === props.match.params.id
                );
                return <ProjectDetail projectContent={project} />;
              }}
            />
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
