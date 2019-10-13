import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { history } from './shared/services/history';
import Login from './components/login/login';
import Dashboard from './components/dashboard/dashboard';
import PrivateRouting from './shared/components/privateRouting';

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          <PrivateRouting exact path="/" component={Dashboard} />
          <Route path='/login' component={Login} />
          <Redirect from="*" to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
