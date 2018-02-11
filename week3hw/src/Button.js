import React, { Component } from 'react';


class Button extends Component {
  
  constructor(props) {
    super(props);
    this.buttonClicked = this.buttonClicked.bind(this);
  }

  buttonClicked() {
     this.props.onClick(this.props.buttonName);
  }

  render() {
    let classes = 'btn';

    if(this.props.selected){
      classes += ' active';
    }


    return <button className = {classes} onClick = {this.buttonClicked}>{this.props.buttonName}</button>;
  }
}

export default Button;
