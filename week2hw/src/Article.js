import React, { Component } from 'react';
import './Article.css';

class Article extends Component{
  render (){
    return (
        <div className = "articleContainer">
          <h2 className = "articleTitle">{this.props.title}</h2>
          <p className = "articleDescription">{this.props.description}</p>
          <p className = "articleAuthor">{this.props.author}</p>
        </div>
    )

  }
}

export default Article;
