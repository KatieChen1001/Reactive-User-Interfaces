import React, { Component } from 'react';
import Button from './Button';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      selected : null ,
      selectedContent : "You have selected: "
    }

    this.buttonClicked = this.buttonClicked.bind(this);
  }

  buttonClicked(buttonName){
    this.setState({
      selected : buttonName,
      selectedContent : "You have selected the: " + buttonName
    });
  }

  render() {
    const isButton1 = this.state.selected === "First Button";
    const isButton2 = this.state.selected === "Second Button";
    const isButton3 = this.state.selected === "Third Button";

    return (
      <div className="container">
      <div className="btnContainer">
        <Button selected = {isButton1} buttonName="First Button" onClick = {this.buttonClicked} />
        <Button selected = {isButton2} buttonName="Second Button" onClick = {this.buttonClicked} />
        <Button selected = {isButton3} buttonName="Third Button" onClick = {this.buttonClicked} />
      </div>
        <h1>{this.state.selectedContent}</h1>
      </div>
    );
  }
}

export default App;
