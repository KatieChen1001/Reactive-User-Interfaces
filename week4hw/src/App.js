import React, { Component } from 'react';
import './App.css';
import Input from './Input.js'


class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      tag: '',
      content: '',
    };

    let eventName = '';
    let eventLoc = '';
    let eventTime = '';

    this.onEventDetailChange = this.onEventDetailChange.bind(this);
  }

  onEventDetailChange(tag, content){
    this.setState({
      tag: tag,
      content: content,
    })
  }

  render() {

    if (this.state.tag === "Event Name"){
      this.eventName = this.state.content;
    }

    if (this.state.tag === "Event Location"){
      this.eventLoc = this.state.content;
    }

    if (this.state.tag === "Event Time"){
      this.eventTime= this.state.content;
    }



    return (
      <div className="App">
        <div className="leftContainer">
          <Input tag = "Event Name" onChange = {this.onEventDetailChange}/>
          <Input tag = "Event Location" onChange = {this.onEventDetailChange}/>
          <Input tag = "Event Time" onChange = {this.onEventDetailChange}/>
        </div>

        <div className = "rightContainer">
          <h1 className="title">{this.eventName}</h1>
          <p className="loc">{this.eventLoc}</p>
          <p className="time">{this.eventTime}</p>
        </div>
      </div>
    );
  }
}

export default App;
