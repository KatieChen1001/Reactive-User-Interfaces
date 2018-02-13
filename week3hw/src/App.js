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

    this.buttonNames = [
      "First Button", "Second Button", "Third Button"
    ]

    this.buttonClicked = this.buttonClicked.bind(this);
  }

  buttonClicked(buttonName){
    this.setState({
      selected : buttonName,
      selectedContent : "You have selected the: " + buttonName
    });
  }

  render() {
    const buttonElement = this.buttonNames.map(function(buttonNames, i){
      return (<Button isSelected = {this.state.selected === buttonNames} buttonName = {buttonNames} onClick = {this.buttonClicked} key = {i} />);
    }.bind(this));

    return (
      <div className="container">
      <div className="btnContainer">{buttonElement}
      </div>
        <h1>{this.state.selectedContent}</h1>
      </div>
    );
  }
}

export default App;
