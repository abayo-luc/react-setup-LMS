import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import dotenv from 'dotenv';
import axios from 'axios';
import * as actions from '../../src/store/actions/auth';
import * as types from '../../src/store/actions/types';
import { user } from '../data';

dotenv.config();
const mockStore = configureMockStore([thunk]);
let store;
const callback = jest.fn();
const stubRequest = (status, response) => moxios.stubRequest(`${process.env.BASE_URL}/users/login`, {
  status,
  response: {
    ...response,
  },
});
describe('Authentication action creator', () => {
  beforeEach(() => {
    moxios.install(axios);
  });

  afterEach(() => {
    moxios.uninstall(axios);
  });
  test('should create action to handle text input change', () => {
    const payload = { name: 'email', value: 'luc.bayo@gmail.com' };
    const expectedActions = {
      type: types.AUTH_INPUT_CHANGE,
      payload,
    };
    expect(actions.handleOnChange(payload.name, payload.value)).toEqual(
      expectedActions,
    );
  });
  test('should create action to handle user login', (done) => {
    const payload = { email: user.email, password: user.password };
    const response = {
      message: 'Login success',
      token: 'qwer1234e5dxcvbn',
    };
    const expectedActions = [
      {
        type: types.AUTH_SUBMITTING,
      },
      {
        type: types.AUTH_SUCCESS,
        payload: { message: response.message, user },
      },
    ];
    stubRequest(200, { ...response });
    store = mockStore({});
    return store.dispatch(actions.handleLogin(payload, callback)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
  test('should create action to handle user login failure', (done) => {
    const payload = { email: user.email, password: user.password };
    const failurePayload = { errors: {}, message: 'Invalid email or password' };
    const expectedActions = [
      {
        type: types.AUTH_SUBMITTING,
      },
      {
        type: types.AUTH_FAILED,
        payload: { ...failurePayload },
      },
    ];
    stubRequest(400, { ...failurePayload });
    store = mockStore({});
    return store.dispatch(actions.handleLogin(payload, callback)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      done();
    });
  });
});
