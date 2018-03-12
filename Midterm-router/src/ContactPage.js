import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ContactPage.css';

class ContactPage extends Component {
  render() {
    const imgName = this.props.contact.lastName;
    return (
      <div className="ContactPage">
        <img src = {"http://localhost:3000/img/" + imgName + ".png"} />
        <h1>
          {this.props.contact.firstName}, {this.props.contact.lastName}
        </h1>
        <i class="fas fa-envelope"></i><span>Email Address: </span>
        <p>{this.props.contact.email}</p>
        <i class="fas fa-phone"></i><span>Phone Number: </span>
        <p>{this.props.contact.number}</p>
        <i class="fas fa-briefcase"></i><span>Art Style: </span>
        <p>{this.props.contact.style}</p>
        <i class="fas fa-dollar-sign"></i><span>Popularity: </span>
        <p>$$$$</p>
        <br></br>
        <Link to="/" className="backLink"><i class="fas fa-arrow-left"></i> Back to contact list</Link>
      </div>
    );
  }
}

export default ContactPage;
