import {
  AUTH_INPUT_CHANGE,
  AUTH_SUBMITTING,
  AUTH_FAILED,
  AUTH_SUCCESS,
} from '../actions/types';

const INITIAL_STATUS = {
  isSubmitting: false,
  message: '',
  isSuccess: false,
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
  case AUTH_FAILED:
    return {
      ...state,
      message: payload,
      isSubmitting: false,
      isSuccess: false,
    };
  case AUTH_SUCCESS:
    return {
      ...state,
      message: payload,
      isSubmitting: false,
      isSuccess: false,
    };
  default:
    return state;
  }
};
