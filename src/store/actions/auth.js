import '@babel/polyfill';
import {
  AUTH_INPUT_CHANGE,
  AUTH_SUBMITTING,
  AUTH_SUCCESS,
  AUTH_FAILED,
} from './types';
import axios from '../../helpers/axios';

export const handleOnChange = (name, value) => ({
  type: AUTH_INPUT_CHANGE,
  payload: { name, value },
});

export const handleLogin = (
  { email, password },
  callback,
) => async (dispatch) => {
  dispatch({
    type: AUTH_SUBMITTING,
  });
  try {
    const response = await axios.post('/users/login', {
      email,
      password,
    });
    const { token, message } = response.data;
    await localStorage.setItem('token', token);
    dispatch({
      type: AUTH_SUCCESS,
      payload: message,
    });
    callback();
  } catch (error) {
    const { message, errors } = error.response.data;
    dispatch({
      type: AUTH_FAILED,
      payload: { message, errors },
    });
  }
};
