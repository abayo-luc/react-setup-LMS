import {
  ARTICLES_FETCH_FAILED,
  FETCHING_ARTICLES,
  ARTICLES_FETCH_SUCCESS,
} from '../actions/types';

const INITIAL_STATE = {
  articles: {},
  isLoading: false,
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
  case FETCHING_ARTICLES:
    return {
      ...state,
      isLoading: true,
    };
  case ARTICLES_FETCH_SUCCESS:
    return {
      ...state,
      isLoading: false,
      articles: { ...state.articles, ...payload.articles },
    };
  case ARTICLES_FETCH_FAILED:
    return {
      ...state,
      isLoading: false,
      errors: {
        ...payload.errors,
        message: payload.message,
      },
    };
  default:
    return state;
  }
};
