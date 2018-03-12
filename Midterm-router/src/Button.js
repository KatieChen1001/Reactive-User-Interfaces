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
    const activeClass = this.props.filterButtonActive ? 'active' : 'inactive';
    console.log(this.props.filterButtonActive);
    return (
        <button className={'filterButtons ' + activeClass} onClick = {this.onClick}>{this.props.buttonName}</button>

    );
  }
}

export default Contact;
