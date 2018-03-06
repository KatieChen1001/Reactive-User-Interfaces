import React, {
  Component
} from 'react';
import Contact from './Contact.js'
import Button from './Button.js'
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.onSearch = this.onSearch.bind(this);
    this.sortAsc = this.sortAsc.bind(this);
    this.sortDes = this.sortDes.bind(this);
    this.countryFilter = this.countryFilter.bind(this);

    this.state = {
      // sorting
      sort: 'asc',
      // search
      search: '',
      // filter by country
      filterCountry: '',
      // Contact Info as part of the state
      data: [{
          firstName: 'Aalvador',
          lastName: 'Dali',
          number: '(+86)18321798868',
          email: 'mac@nyu.edu',
          address: 'Calle 43 #44, Barcelona',
          country: 'Spain'
        },

        {
          firstName: 'Cablo',
          lastName: 'Picasso',
          number: '(+86)18321798868',
          email: 'mac@nyu.edu',
          address: 'Calle 43 #44, Barcelona',
          country: 'Spain'
        },

        {
          firstName: 'Bacques-Louis',
          lastName: 'David',
          number: '(+86)18321798868',
          email: 'mac@nyu.edu',
          address: 'Calle 43 #44, Barcelona',
          country: 'Spain'
        },

        {
          firstName: 'Dacques-Louis',
          lastName: 'David',
          number: '(+86)18321798868',
          email: 'mac@nyu.edu',
          address: 'Calle 43 #44, Barcelona',
          country: 'Spain'
        },

        {
          firstName: 'Facques-Louis',
          lastName: 'David',
          number: '(+86)18321798868',
          email: 'mac@nyu.edu',
          address: 'Calle 43 #44, Barcelona',
          country: 'Spain'
        },

        {
          firstName: 'Dazcques-Louis',
          lastName: 'David',
          number: '(+86)18321798868',
          email: 'mac@nyu.edu',
          address: 'Calle 43 #44, Barcelona',
          country: 'Denmark'
        },

        {
          firstName: 'Hacques-Louis',
          lastName: 'David',
          number: '(+86)18321798868',
          email: 'mac@nyu.edu',
          address: 'Calle 43 #44, Barcelona',
          country: 'Moldova'
        },
      ]
    }
  }







  onSearch(e) {
    this.setState({
      search: e.target.value
    });
  }

  sortAsc(){
    this.setState({
      sort:'asc'
    })
  }

  sortDes(){
    this.setState({
      sort: 'des'
    })
  }

  countryFilter(label){
    // console.log("i'm a country");
    this.setState({
      filterCountry: label
    })
  }



  render() {
    let searchedContact = this.state.data;
    let filteredContact = this.state.data;

    // ========== disregard the order of the original data ========= //
    // ========== default sort A -> Z ========= //
    // ========== default sort by firstName ========= //

    searchedContact = searchedContact.sort(function (a, b){
      var firstNameA = a.firstName.toUpperCase();
      var firstNameB = b.firstName.toUpperCase();
      if (firstNameA < firstNameB){
        return -1;
      }
      if (firstNameA > firstNameB){
        return 1;
      }
      return 0;
    });

    // SORTING

    if (this.state.sort === 'asc') {
      searchedContact = searchedContact.sort();
    }

    if (this.state.sort === 'des') {
      searchedContact = searchedContact.slice().reverse();
    }

    // SEARCHING

    if (this.state.search !== '') {
      searchedContact = searchedContact.filter(contact =>
        contact.firstName.toLowerCase().match(this.state.search.toLowerCase()) ||
        contact.lastName.toLowerCase().match(this.state.search.toLowerCase()) ||
        contact.number.toLowerCase().match(this.state.search.toLowerCase()) ||
        contact.email.toLowerCase().match(this.state.search.toLowerCase()) ||
        contact.address.toLowerCase().match(this.state.search.toLowerCase()) ||
        contact.country.toLowerCase().match(this.state.search.toLowerCase())

        // ADD "NO MATCH"
      );
    }

    // FILTER BY COUNTRY
    function onlyUnique(value, index, self) {
      return self.indexOf(value) === index;
    }

    // get country names and put them in a new array
    const btn = searchedContact.map(contacts => contacts.country);
    // rule out duplicates
    const newbtn = btn.filter(onlyUnique);
    // return button elements
    const buttonNames = newbtn.map((countries, i) => (
      <Button key = {i} onClick = {this.countryFilter} buttonName = {countries} />
    ))

    if (this.state.filterCountry !== ''){
      searchedContact = searchedContact.filter(contact => {
        return contact.country.match(this.state.filterCountry)
      })
    }

    // contacts to be shown
    const contactData = searchedContact.map((contacts, i) => (
      <Contact firstName = {
        contacts.firstName
      }
      lastName = {
        contacts.lastName
      }
      number = {
        contacts.number
      }
      email = {
        contacts.email
      }
      address = {
        contacts.address
      }

      country = {
        contacts.country
      }

      key = {
        i
      }
      />
    ));

    return (
      <div className = "App" >
      <input type = "text" placeholder = "Search" onChange = {this.onSearch}/>
      <Button onClick = {this.sortAsc} buttonName = "A to Z" />
      <Button onClick = {this.sortDes} buttonName = "Z to A" />
      {buttonNames}
      {contactData}
      </div>
    );
  }
}

export default App;
