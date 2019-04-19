import { AUTH_INPUT_CHANGE, AUTH_SUBMITTING } from '../actions/types';

const INITIAL_STATUS = {
  isSubmitting: false,
};

export default (state = INITIAL_STATUS, action) => {
  const { type, payload } = action;
  switch (type) {
  case AUTH_INPUT_CHANGE:
    return {
      ...state,
      [payload.name]: payload.value,
    };
  case AUTH_SUBMITTING:
    return {
      ...state,
      isSubmitting: true,
    };
  default:
    return state;
  }
};
