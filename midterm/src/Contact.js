import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
  render() {
    return (
      <div className = "contactContainer">
        <span className = "contactName">{this.props.firstName}, {this.props.lastName}</span>
        <span className = "contactNumber">{this.props.number}</span>
        <span className = "contactEmail">{this.props.email}</span>
        <address>{this.props.address}, {this.props.country}</address>
      </div>
    );
  }
}

export default Contact;
