import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      number: "",
      email: "",
      address: "",
      style: "",
      id: "",
      active: "inactive"
    };
    this.emailChanged = this.emailChanged.bind(this);
    this.firstNameChanged = this.firstNameChanged.bind(this);
    this.lastNameChanged = this.lastNameChanged.bind(this);
    this.numberChanged = this.numberChanged.bind(this);
    this.styleChanged = this.styleChanged.bind(this);
    this.addressChanged = this.addressChanged.bind(this);
    this.buttonClicked = this.buttonClicked.bind(this);
  }

  firstNameChanged(e) {
    this.setState({
      firstName: e.target.value
    });
  }

  lastNameChanged(e) {
    this.setState({
      lastName: e.target.value
    });
  }

  emailChanged(e) {
    this.setState({
      email: e.target.value
    });
  }

  numberChanged(e) {
    this.setState({
      number: e.target.value
    });
  }
  styleChanged(e) {
    this.setState({
      style: e.target.value
    });
  }
  addressChanged(e) {
    this.setState({
      address: e.target.value
    });
  }

  buttonClicked() {
    this.props.onSubmit();
  }

  componentDidUpdate() {
    localStorage.setItem("newContactData", JSON.stringify(this.state));
  }

  render() {
    return (
      <div className={"Form " + this.state.active}>
        <input
          value={this.state.firstName}
          type="text"
          placeholder="fistName"
          onChange={this.firstNameChanged}
        />
        <input
          value={this.state.email}
          type="email"
          placeholder="Email"
          onChange={this.emailChanged}
        />
        <input
          value={this.state.lastName}
          type="text"
          placeholder="lastName"
          onChange={this.lastNameChanged}
        />
        <input
          value={this.state.number}
          type="number"
          placeholder="Number"
          onChange={this.numberChanged}
        />
        <input
          value={this.state.style}
          type="text"
          placeholder="Style"
          onChange={this.styleChanged}
        />
        <input
          value={this.state.address}
          type="text"
          placeholder="Address"
          onChange={this.addressChanged}
        />
        <button onClick={this.buttonClicked}>Save</button>
      </div>
    );
  }
}

export default Form;
