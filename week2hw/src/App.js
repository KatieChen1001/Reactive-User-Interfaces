import React, { Component } from 'react';

import Article from './Article.js';
import Date from './Date.js';
// No need to import component css here in the main app //
import './App.css';

// Using ES6 class to define component
// **** Component names needs to start with capital letters ***** //
// React treats components starting with lowercase letters as DOM tags //
// essentially creating my own HTML element tag
// props = HTML attributes


class App extends Component {
  // const = newFeed {
  //   title: "this is a title",
  //   description: "this is a description",
  //   author: "I am the author"
  // }

  render() {


    return (
      <div className = "container">
        <div className = "newsFeed">
          <Date date = "Feb. 02, 2018" />
          <Article
          title="Facebook Aims to Soothe Wall Street Over News Feed Changes"
          description = "For a generation, Britain has eagerly enlisted private contractors to provide social services. But the model may be cracking under the pressure of austerity."
          author = "By SHEERA FRENKEL"
          />
          <img className = "myImg" src = "https://static01.nyt.com/images/2018/02/01/business/01FACEBOOKprint/merlin_131869010_a67bab2f-5fce-4ecc-b528-3a7e84c4cf68-mediumThreeByTwo210.jpg" />
        </div>

        <div className = "newsFeed">
          <Date date = "Feb. 02, 2018" />
          <Article
          title="What’s the Craziest Thing You’ve Ever Found in a Xerox Machine?"
          description = "The bulky copiers could soon become an office relic. Tell us your stories of documents that made you laugh, blush or learn something new."
          author = "By LARA TAKENAGA"
          />
          <img className = "myImg" src = "https://static01.nyt.com/images/2018/02/01/world/01Xerox/01Xerox-mediumThreeByTwo210-v2.jpg" />
        </div>

        <div className = "newsFeed">
          <Date date = "Feb. 02, 2018" />
          <Article
          title="Trump’s Environmental Rollbacks Were Fast. It Could Get Messy in Court."
          description = "Legal experts say many were made without fully considering the laws and procedures governing changes, making them vulnerable to legal challenges."
          author = "By CORAL DAVENPORT"
          />
          <img className = "myImg" src = "https://static01.nyt.com/images/2018/02/01/climate/01CLI-INTERIOR2/01CLI-INTERIOR2-mediumThreeByTwo210.jpg" />
        </div>

      </div>

    );


  }
}

export default App;
