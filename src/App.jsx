import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Routers from './containers';

export default () => (
  <Provider store={store}>
    <Routers />
  </Provider>
);
