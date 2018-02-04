import React, { Component } from 'react';
import './Date.css';

class Article extends Component{
  render (){
    return (
        <div className = "dateContainer">
          <span>{this.props.date}</span>
        </div>
    )

  }
}

export default Article;
