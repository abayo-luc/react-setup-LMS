import '@babel/polyfill';
import jwt from 'jsonwebtoken';
import axios from 'axios';
import {
  AUTH_INPUT_CHANGE,
  AUTH_SUBMITTING,
  AUTH_SUCCESS,
  AUTH_FAILED,
} from './types';

export const handleOnChange = (name, value) => ({
  type: AUTH_INPUT_CHANGE,
  payload: { name, value },
});
export const setCurrentUser = (token, message) => {
  const user = jwt.decode(token);
  return {
    type: AUTH_SUCCESS,
    payload: { message, user },
  };
};

export const handleLogin = (
  { email, password },
  callback,
) => async (dispatch) => {
  dispatch({
    type: AUTH_SUBMITTING,
  });
  try {
    const response = await axios.post(`${process.env.BASE_URL}/users/login`, {
      email,
      password,
    });
    const { token, message } = response.data;
    await localStorage.setItem('token', token);
    dispatch(setCurrentUser(token, message));
    callback();
  } catch (error) {
    const { message, errors } = error.response.data;
    dispatch({
      type: AUTH_FAILED,
      payload: { message, errors },
    });
  }
};
