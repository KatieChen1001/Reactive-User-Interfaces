import React, { Component } from 'react';
import './Input.css'

class Input extends Component {
  constructor(props){
    super(props);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e){
    this.props.onChange(this.props.tag, e.target.value)
  }
  render() {
    return (
      <div className="inputContainer">
        <p>{this.props.tag}</p>
        <input type="text" onChange={this.onChange} value = {this.props.myValue} ></input>
      </div>
    );
  }
}

export default Input;
