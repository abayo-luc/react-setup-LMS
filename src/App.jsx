import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Routers from './containers';
import { setCurrentUser } from './store/actions/auth';

if (localStorage.getItem('token')) {
  store.dispatch(setCurrentUser(localStorage.getItem('token'), ''));
}
export default () => (
  <Provider store={store}>
    <Routers />
  </Provider>
);
