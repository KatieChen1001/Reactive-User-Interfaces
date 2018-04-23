import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import HomePage from "./HomePage.js";
import Project from "./Project.js";
import Writing from "./Writing.js";
import Menu from "./Menu.js";
import ProjectDetail from "./ProjectDetail.js";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          title: "title 1",
          description: "some description",
          keywords: "#KeyWords",
          content: "alsjdaksjbcakshbdgiqwuhdkjxbaljs",
          id: 1
        },
        {
          title: "title 2",
          description: "some description",
          keywords: "#KeyWords",
          content: "alsjdaksjbcakshbdgiqwuhdkjxbaljs",
          id: 2
        },
        {
          title: "title 3",
          description: "some description",
          keywords: "#KeyWords",
          content: "alsjdaksjbcakshbdgiqwuhdkjxbaljs",
          id: 3
        },
        {
          title: "title 4",
          description: "some description",
          keywords: "#KeyWords",
          content: "alsjdaksjbcakshbdgiqwuhdkjxbaljs",
          id: 4
        }
      ]
    };
  }
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={HomePage} />
          <Route
            exact
            path="/projects"
            component={props => {
              return <Project projectData={this.state.projects} />;
            }}
          />
          <Route path="/writings" component={Writing} />
          <Route
            path="/projects/:id"
            render={props => {
              const project = this.state.projects.find(
                project => project.id === parseInt(props.match.params.id)
              );
              return <ProjectDetail projectContent={project} />;
            }}
          />

          <Route component={Menu} />
        </div>
      </Router>
    );
  }
}

export default App;
