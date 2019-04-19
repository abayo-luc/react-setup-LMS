import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Login/Login';

export default () => (
  <Router>
    <div>
      <Route exact to="/" component={Login} />
    </div>
  </Router>
);
