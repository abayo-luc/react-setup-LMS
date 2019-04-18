import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';

export default () => (
  <Router>
    <div>
      <Route exact to="/" component={Home} />
    </div>
  </Router>
);
