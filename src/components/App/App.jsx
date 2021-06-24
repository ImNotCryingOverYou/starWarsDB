import React, { Component } from 'react';
import Header from '../Header/Header';
import RandomPlanet from '../RandomPlanet/RandomPlanet';
import ErrorBoundry from '../ErrorBoundry/ErrorBoundry';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';

import PeoplePage from '../Pages/PeoplePage';
import PlanetsPage from '../Pages/PlanetsPage';
import StarshipsPage from '../Pages/StarshipsPage';

import { SwapiServiceProvider } from '../SwapiServiceContext/SwapiServiceContext';


import './App.css';


export default class App extends Component {


  state = {
    swapiService: new SwapiService(),
  };

  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const Service = swapiService instanceof SwapiService ?
        DummySwapiService : SwapiService;
      return {
        swapiService: new Service()
      };
    })
  };



  render() {

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <div className="stardb-app">
            <Header onServiceChange={this.onServiceChange} />

            <RandomPlanet />
            <PeoplePage />
            <PlanetsPage />
            <StarshipsPage />

          </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
