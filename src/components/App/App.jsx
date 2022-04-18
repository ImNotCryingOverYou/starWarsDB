import React, { Component } from 'react';
import Header from '../Header/Header';
import RandomPlanet from '../RandomPlanet/RandomPlanet';
import ErrorBoundry from '../ErrorBoundry/ErrorBoundry';
import SwapiService from '../../services/swapi-service';

import PeoplePage from '../Pages/PeoplePage';
import PlanetsPage from '../Pages/PlanetsPage';
import StarshipsPage from '../Pages/StarshipsPage';
import SecretPage from '../Pages/SecretPage';
import LoginPage from '../Pages/LoginPage';

import { SwapiServiceProvider } from '../SwapiServiceContext/SwapiServiceContext';


import './App.css';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { StarshipDetails } from '../SWComponents';

export default class App extends Component {


  state = {
    swapiService: new SwapiService(),
    isLoggedIn: false,
  };

  onLogin = () => {
    this.setState({ isLoggedIn: true })
  }


  render() {

    const { isLoggedIn } = this.state;

    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService}>
          <Router>
            <div className="stardb-app">
              <Header onServiceChange={this.onServiceChange} />
              <RandomPlanet />
              <Switch>
                <Route path="/" render={() => <h2>Welcome to Star DB</h2>} exact={true} />
                <Route path="/people/:id?" component={PeoplePage} />
                <Route path="/planets" component={PlanetsPage} />
                <Route path="/starships" component={StarshipsPage} exact={true} />
                <Route path="/starships/:id"
                  render={({ match }) => {
                    const { id } = match.params;;
                    return <StarshipDetails itemId={id} />
                  }} />
                <Route
                  path="/login"
                  render={() => <LoginPage isLoggedIn={isLoggedIn} onLogin={this.onLogin} />}
                />
                <Route
                  path="/secret"
                  render={() => <SecretPage isLoggedIn={isLoggedIn} />}
                />
                <Redirect to="/" />
              </Switch>
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}
