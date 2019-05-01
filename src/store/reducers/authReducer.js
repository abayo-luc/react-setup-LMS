import {
  AUTH_INPUT_CHANGE,
  AUTH_SUBMITTING,
  AUTH_FAILED,
  AUTH_SUCCESS,
} from '../actions/types';

const INITIAL_STATUS = {
  isSubmitting: false,
  isSuccess: false,
  errors: {},
  currentUser: {},
};

export default (state = INITIAL_STATUS, action) => {
  const { type, payload } = action;
  switch (type) {
  case AUTH_INPUT_CHANGE:
    return {
      ...state,
      errors: {},
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
      isSubmitting: false,
      errors: { ...state.errors, ...payload },
      isSuccess: false,
    };
  case AUTH_SUCCESS:
    return {
      ...state,
      isSubmitting: false,
      isSuccess: false,
      currentUser: { ...payload.user },
    };
  default:
    return state;
  }
};
