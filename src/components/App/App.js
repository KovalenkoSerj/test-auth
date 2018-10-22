import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { history } from '../../utils/history';
import { PrivateRoute } from '../../utils/PrivateRoute'
import RegistrationPage from '../RegistrationPage/RegistrationPage';
import LoginPage from '../LoginPage/LoginPage';
import HomePage from '../HomePage/HomePage';
import { configureFakeBackend } from '../../utils/fake_backend'

configureFakeBackend();

export default class App extends Component {
  render() {
    return (
      <div>
        <Router history={ history }>
          <Switch>
            <PrivateRoute exact path='/' component={ HomePage } />
            <Route exact path='/register' component={ RegistrationPage }/>
            <Route exact path='/login' component={ LoginPage }/>
          </Switch>
        </Router>
      </div>
    );
  }
}

