import React, { Component } from 'react';
import './App.css';
import Form from './Form.js'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      contacts: [
        {name: "aslkdja", email: "aslkdja"},
        {name: "aslkdja", email: "aslkdsdaja"},
        {name: "aslkdja", email: "q2"}
      ]
    }
    this.addPerson = this.addPerson.bind(this);
  }

  addPerson(name, email){
    let dataCopy = this.state.contacts.slice();
    dataCopy.push({name: name, email: email});

    console.log(name);
    console.log(email);


    this.setState({
      contacts: dataCopy,
    })

  }


  render() {

    const contactList = this.state.contacts.map(p => {
      return <p key = {p.email}>{p.name} + {p.email}</p>
    });

    return (
      <div className="App">
          <h1> This is a contact list </h1>
          {contactList}
          <Form onSubmit = {this.addPerson} />
      </div>
    );
  }
}

export default App;
