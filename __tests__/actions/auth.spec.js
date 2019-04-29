import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../src/store/actions/auth';
import * as types from '../../src/store/actions/types';

const mockStore = configureMockStore([thunk]);
describe('Authentication action creator', () => {
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
  // test('should create action to handle user login', () => {
  //   const payload = { email: 'luc.bayo@gmail.com', password: 'password' };
  //   const expectedActions = {
  //     type: types.AUTH_SUBMITTING,
  //   };
  //   const store = mockStore({});
  //   return store.dispatch(actions.handleLogin(payload)).then(() => {
  //     expect(store.getActions()).toEqual(expectedActions);
  //   });
  // });
});
