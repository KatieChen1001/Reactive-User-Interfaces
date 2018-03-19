import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      email: ''
    }
    this.onClick = this.onClick.bind(this);
    this.nameChange = this.nameChange.bind(this);
    this.emailChange = this.emailChange.bind(this);
  }

  nameChange(e){
    this.setState({
      name: e.target.value
    })
  }

  emailChange(e){
    this.setState({
      email: e.target.value
    })
  }

  onClick(e){
    e.preventDefault();
    this.props.onSubmit(this.state.name, this.state.email);
    this.setState({
      name:'',
      email:''
    })


  };


  render() {

    return (
      <div className="App">
      <form>
        <input type = "text" value = {this.state.name} onChange = {this.nameChange}/>
        <input type = "text" value = {this.state.email} onChange = {this.emailChange}/>
        <button onClick = {this.onClick}>Add new person</button>
      </form>

      </div>
    );
  }
}

export default App;
