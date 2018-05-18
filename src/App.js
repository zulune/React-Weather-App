import React, { Component } from 'react';
import Navbar from "./component/Header";
import WeatherDisplay from './component/Weather';
import { BottomNavigation, BottomNavigationItem } from 'material-ui/BottomNavigation';
import Grid from 'material-ui/Grid';
import List, { ListItem, ListItemText } from 'material-ui/List';
import { Collection, CollectionItem } from 'react-materialize';

const PLACES = [
  { name: "Khmelnytskyi", zip: "29015"},
  { name: "Palo Alto", zip: "94303" },
  { name: "San Jose", zip: "94088" },
  { name: "Santa Cruz", zip: "95062" },
  { name: "Honolulu", zip: "96803" }
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      activePlace: 0,
    };
  }
  render() {
    const activePlace = this.state.activePlace;
    return (
      <div>
        <Navbar />
        <Grid container>
          <Grid item md={4} sm={4}>
            <h3>Select a city</h3>
            
          </Grid>
          <Grid item md={8} sm={8}>
            <WeatherDisplay key={activePlace} zip={PLACES[activePlace].zip} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
