import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);

    this.ascendsort = this.ascendsort.bind(this);
    this.descendsort = this.descendsort.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.state = {
      sort: 'asc',
      search: '',
      tweets: [
        {username: 'Dali', body: 'this is a Dali painting1'},
        {username: 'Picasso', body: 'this is a Picasso painting2'},
        {username: 'Miro', body: 'this is a Miro painting3'},
        {username: 'Dali', body: 'this is a Dali painting4'},
      ]
    };
  };

  ascendsort(){
    this.setState({
      sort:'asc'
    })
  }

  descendsort(){
    this.setState({
      sort:'des'
    })
  }

  onSearch(e){
    this.setState({
      search: e.target.value,
    });
  };

  render() {
    let arrayCopy = this.state.tweets.slice();

    if (this.state.search !== ''){
      arrayCopy = arrayCopy.filter(tweet => {
        // eliminate case sensitivity
        return tweet.body.toLowerCase().match(this.state.search.toLowerCase());
      })
    }

    if( this.state.sort === 'des'){
      // arrayCopy.reverse();
      arrayCopy = arrayCopy.filter(tweet => {
        return tweet.body.match('painting3');
      })
    }

    const tags = arrayCopy.map((tweet, i) => {
      return(
        <div key = {i} className = "tweetContainer">
        <h1>{tweet.username}</h1>
        <h4>{tweet.body}</h4>
        </div>
      )
    })

    return (
      <div className="App">
      <input type = "text" onChange = {this.onSearch} />
      <button onClick={this.ascendsort}>A to Z</button>
      <button onClick={this.descendsort}>Z to A</button>
        {tags}
      </div>
    );
  }
}

export default App;
