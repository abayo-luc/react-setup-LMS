import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Login/Login';
import Home from './Home/Home';

export default () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/articles" component={Home} />
      <Route exact path="/login" component={Login} />
    </Switch>
  </Router>
);
