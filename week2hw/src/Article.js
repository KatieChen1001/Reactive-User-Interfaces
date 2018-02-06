import React, { Component } from 'react';
import './Article.css';

class Article extends Component{
  render (){
    return (
        <div className="container">
          <time className="todayDate">{this.props.time}</time>
          <div className = "articleContainer">
            <h2 className = "articleTitle">{this.props.title}</h2>
            <p className = "articleDescription">{this.props.description}</p>
            <p className = "articleAuthor">By <span>{this.props.author}</span></p>
          </div>
          <figure><img src = {this.props.imgURL} /></figure>
        </div>
    )

  }
}

export default Article;
