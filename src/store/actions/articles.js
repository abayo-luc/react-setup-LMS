import _ from 'lodash';
import axios from 'axios';
import {
  ARTICLES_FETCH_FAILED,
  ARTICLES_FETCH_SUCCESS,
  FETCHING_ARTICLES,
} from './types';

const fetchArticles = () => async (dispatch) => {
  dispatch({
    type: FETCHING_ARTICLES,
  });
  try {
    const response = await axios.get(`${process.env.BASE_URL}/articles`);

    const { articles } = response.data;
    dispatch({
      type: ARTICLES_FETCH_SUCCESS,
      payload: { articles: _.keyBy(articles, article => article.id) },
    });
  } catch (error) {
    const { message, errors = {} } = error.response.data;
    dispatch({
      type: ARTICLES_FETCH_FAILED,
      payload: { message, errors },
    });
  }
};
export default fetchArticles;
