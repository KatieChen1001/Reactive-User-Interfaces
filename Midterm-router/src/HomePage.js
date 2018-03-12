import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

class HomePage extends Component {
  render() {

    const contactList = this.props.contacts.map(c => (
      <Link to={'/contacts/' + c.id}>
        <div className="contactContainer" key={'contact' + c.id}>
          <div className = "text-wrapper">
            <span className = "contactName">{c.firstName}, {c.lastName}</span>
            <span className = "contactNumber">{c.number}</span>
            <span className = "contactEmail">{c.email}</span>
            <address>{c.address}, {c.country}</address>
          </div>
          <img src = {"http://localhost:3000/img/" + c.lastName + ".png"} />
        </div>
      </Link>

    ));
    return <div className="HomePage">{contactList}</div>;
  }
}

export default HomePage;
