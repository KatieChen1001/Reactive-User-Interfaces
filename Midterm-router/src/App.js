import React, { Component } from "react";
import "./App.css";
import HomePage from "./HomePage";
import ContactPage from "./ContactPage";
import Button from "./Button.js";
import Form from "./Form.js";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  constructor(props) {
    super(props);

    this.onSearch = this.onSearch.bind(this);
    this.sortFirstName = this.sortFirstName.bind(this);
    this.sortLastName = this.sortLastName.bind(this);
    this.styleFilter = this.styleFilter.bind(this);
    this.filterButtonClicked = this.filterButtonClicked.bind(this);
    this.openForm = this.openForm.bind(this);
    this.onNewContact = this.onNewContact.bind(this);

    this.state = {
      // sorting
      sort: "firstName",
      // search
      search: "",
      // filter by style
      filterStyle: "",
      // toggle: filter menu
      filterActive: "",
      // toggle highlight filter button
      filterButtonActive: "Most Expensive",
      // Contact Info as part of the state
      form: "inactive",
      data: [
        {
          firstName: "Jackson",
          lastName: "Pollock",
          number: "(+1) 718-877-3710",
          email: "alcoholicAtLarge@ISpalshPaint.com",
          address: "Cody, Wyoming, U.S.A.",
          style: "Abstract",
          id: "J.Pollock"
        },

        {
          firstName: "Henri",
          lastName: "Matisse",
          number: "(+33) 5 09-75-83-51",
          email: "loveNudes@snobbyFrenchie.com",
          address: "Nice, France",
          style: "Fauvism",
          id: "H.Matisse"
        },

        {
          firstName: "Salvador",
          lastName: "Dali",
          number: "(+34) 923232323",
          email: "bestBeard@catalunyaIndependence.com",
          address: "Figueres, Catalonia, Spain",
          style: "Surrealism",
          id: "S.Dali"
        },

        {
          firstName: "Gustav",
          lastName: "Klimt",
          number: "(+43) 923232323",
          email: "JapaneseFever@AustriaNoMore.com",
          address: "Baumgarten, Austrian Empire",
          style: "Symbolism",
          id: "G.Klimt"
        },

        {
          firstName: "Wassily",
          lastName: "Kandinsky",
          number: "(+7) 789 103-22-77",
          email: "messingWithYa@election.us",
          address: "Moscow, Russian Empire",
          style: "Abstract",
          id: "W.Kandinsky"
        },

        {
          firstName: "Umberto",
          lastName: "Boccioni",
          number: "(+39) 06-69878635",
          email: "futureFromThePast@met.com",
          address: "Reggio Calabria, Italy",
          style: "Futurism",
          id: "U.Boccioni"
        },

        {
          firstName: "Paul",
          lastName: "Klee",
          number: "(+41) 31-318-8829",
          email: "dryHumor@design.bauhaus",
          address: "Münchenbuchsee near Bern, Switzerland",
          style: "Abstract",
          id: "P.Klee"
        },

        {
          firstName: "Piet",
          lastName: "Mondrian",
          number: "(+316) 23-31-78-09",
          email: "squares&grids@dissPicasso.com",
          address: "Amersfoort, Netherlands",
          style: "Abstract",
          id: "P.Mondrian"
        },

        {
          firstName: "Joan",
          lastName: "Miro",
          number: "(+34) 876125378",
          email: "randomAF@justAnotherSpinard.com",
          address: "Barcelona, Catalonia, Spain",
          style: "Surrealism",
          id: "J.Miro"
        },

        {
          firstName: "Pablo",
          lastName: "Picasso",
          number: "(+34) 278094562 ",
          email: "kingOfArt@narcissistSquad.com",
          address: "Barcelona, Catalonia, Spain",
          style: "Cubism",
          id: "P.Picasso"
        }
      ]
    };

    let initialState = localStorage.getItem("newContactData");
    if (initialState) {
      this.state.data.push(JSON.parse(initialState));
    }
  }

  onSearch(e) {
    this.setState({
      search: e.target.value
    });
  }

  // toggle on and off the filter menu
  filterButtonClicked() {
    if (this.state.filterActive === "active") {
      this.setState({
        filterActive: "inactive"
      });
    } else {
      this.setState({
        filterActive: "active"
      });
    }
  }

  // toggle on and off the add new contact form
  openForm() {
    if (this.state.form === "active") {
      this.setState({
        form: "inactive"
      });
    } else {
      this.setState({
        form: "active"
      });
    }
  }

  sortFirstName(buttonName) {
    this.setState({
      sort: "firstName",
      filterButtonActive: buttonName
    });
  }

  sortLastName(buttonName) {
    this.setState({
      sort: "lastName",
      filterButtonActive: buttonName
    });
  }

  styleFilter(label) {
    this.setState({
      filterStyle: label,
      filterButtonActive: label
    });
  }
  // ======================== Adding New Contact ======================== //
  onNewContact() {
    const copy = this.state.data.slice();
    let isThereNewContact = localStorage.getItem("newContactData");
    let newContactData = JSON.parse(isThereNewContact);

    copy.push(newContactData);
    this.setState({
      data: copy
    });

    this.setState({
      form: "inactive"
    });
  }

  render() {
    let searchedContact = this.state.data;

    // SORTING

    if (this.state.sort === "firstName") {
      searchedContact = searchedContact.sort(function(a, b) {
        var firstNameA = a.firstName.toUpperCase();
        var firstNameB = b.firstName.toUpperCase();
        if (firstNameA < firstNameB) {
          return -1;
        }
        if (firstNameA > firstNameB) {
          return 1;
        }
        return 0;
      });
    }

    if (this.state.sort === "lastName") {
      searchedContact = searchedContact.sort(function(a, b) {
        var lastNameA = a.lastName.toUpperCase();
        var lastNameB = b.lastName.toUpperCase();
        if (lastNameA < lastNameB) {
          return -1;
        }
        if (lastNameA > lastNameB) {
          return 1;
        }
        return 0;
      });
    }

    // SEARCHING

    if (this.state.search !== "") {
      searchedContact = searchedContact.filter(
        contact =>
          contact.firstName
            .toLowerCase()
            .match(this.state.search.toLowerCase()) ||
          contact.lastName
            .toLowerCase()
            .match(this.state.search.toLowerCase()) ||
          contact.number.toLowerCase().match(this.state.search.toLowerCase()) ||
          contact.email.toLowerCase().match(this.state.search.toLowerCase()) ||
          contact.address
            .toLowerCase()
            .match(this.state.search.toLowerCase()) ||
          contact.style.toLowerCase().match(this.state.search.toLowerCase())

        // ADD "NO MATCH"
      );
    }

    // FILTER BY style
    function onlyUnique(value, index, self) {
      return self.indexOf(value) === index;
    }

    // get style names and put them in a new array
    const btn = searchedContact.map(contacts => contacts.style);
    // rule out duplicates
    const newbtn = btn.filter(onlyUnique);
    // return button elements
    const buttonNames = newbtn.map((styles, i) => (
      <Button
        key={i}
        onClick={this.styleFilter}
        buttonName={styles}
        filterButtonActive={this.state.filterButtonActive === styles}
      />
    ));

    if (this.state.filterStyle !== "") {
      searchedContact = searchedContact.filter(contact => {
        return contact.style.match(this.state.filterStyle);
      });
    }

    let active = this.state.filterActive === "active";
    let activeClass = active ? "active" : "inactive";

    let formActive =
      this.state.form === "active" ? "formActive" : "formInactive";

    return (
      <Router>
        <div className="App">
          <input type="text" placeholder="Search" onChange={this.onSearch} />
          <i className="fas fa-filter" onClick={this.filterButtonClicked} />
          <i className="fas fa-plus" onClick={this.openForm} />

          <div className={"filterMenuContainer " + activeClass}>
            <div className="filterBox">
              <span>By Popularity: </span>
              <Button
                onClick={this.sortFirstName}
                buttonName="Most Expensive"
                filterButtonActive={
                  this.state.filterButtonActive === "Most Expensive"
                }
              />
              <Button
                onClick={this.sortLastName}
                buttonName="Least Expensive"
                filterButtonActive={
                  this.state.filterButtonActive === "Least Expensive"
                }
              />
            </div>
            <div className="filterBox">
              <span>By Style: </span>
              {buttonNames}
            </div>
          </div>

          <div className={formActive}>
            <Form onSubmit={this.onNewContact} />
          </div>

          <Route
            exact
            path="/"
            component={props => {
              return <HomePage contacts={searchedContact} />;
            }}
          />
          <Route
            path="/contacts/:id"
            render={props => {
              const contact = this.state.data.find(
                c => c.id === props.match.params.id
              );
              return <ContactPage contact={contact} />;
            }}
          />
        </div>
      </Router>
    );
  }
}

export default App;
