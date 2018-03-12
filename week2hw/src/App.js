// Updated on Feb 12th, 2018
// Update content: Dynanmic Component with map() function
import React, { Component } from 'react';
import Article from './Article.js';
// No need to import component css here in the main app //
import './App.css';

// Using ES6 class to define component
// **** Component names needs to start with capital letters ***** //
// React treats components starting with lowercase letters as DOM tags //
// essentially creating my own HTML element tag
// props = HTML attributes


class App extends Component {

  render() {

    const newsFeed = [
      {
        time: "Feb. 01, 2018",
        title: "Facebook Aims to Soothe Wall Street Over News Feed Changes.",
        description: "The social network, which is overhauling what people consume on the site, said its business would remain robust even if some users spent less time on its platform.",
        author: "Sheera Frenkel",
        imgURL: "https://static01.nyt.com/images/2018/02/01/business/01FACEBOOKprint/merlin_131869010_a67bab2f-5fce-4ecc-b528-3a7e84c4cf68-mediumThreeByTwo210.jpg"
      },

      {
        time: "Feb. 02, 2018",
        title: "Facebook Aims to Soothe Wall Street Over News Feed Changes.",
        description: "The social network, which is overhauling what people consume on the site, said its business would remain robust even if some users spent less time on its platform.",
        author: "Sheera Frenkel",
        imgURL: "https://static01.nyt.com/images/2018/02/01/business/01FACEBOOKprint/merlin_131869010_a67bab2f-5fce-4ecc-b528-3a7e84c4cf68-mediumThreeByTwo210.jpg"
      },
    ];

    const newsFeedArticle = newsFeed.map(function(text, i){
      return <Article time={text.time} title={text.title} description={text.description} author={text.author} imgURL={text.imgURL} key={i} />
    })

    return (
      <div>{newsFeedArticle}</div>
    );


  }
}

export default App;
