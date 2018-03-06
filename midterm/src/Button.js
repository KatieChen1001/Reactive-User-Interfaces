import React, { Component } from 'react';
import './Button.css';

class Contact extends Component {

  constructor(props){
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(){
    this.props.onClick(this.props.buttonName);
  }

  render() {
    return (
      <div>
        <button onClick = {this.onClick}>{this.props.buttonName}</button>
      </div>
    );
  }
}

export default Contact;
