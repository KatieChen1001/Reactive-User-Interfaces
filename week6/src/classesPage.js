import React, { Component } from 'react';

class classesPage extends Component {
  render() {
    return (
        <div>
          <h1>I am a {this.props.match.params.id}</h1>
        </div>
    );
  }
}

export default classesPage;
