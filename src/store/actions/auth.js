import { AUTH_INPUT_CHANGE, AUTH_SUBMITTING } from './types';

export const handleOnChange = (name, value) => ({
  type: AUTH_INPUT_CHANGE,
  payload: { name, value },
});

export const handleLogin = () => (dispatch) => {
  dispatch({
    type: AUTH_SUBMITTING,
  });
};
