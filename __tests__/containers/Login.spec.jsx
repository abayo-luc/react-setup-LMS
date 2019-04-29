import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Login } from '../../src/containers/Login/Login';
import SimpleButton from '../../src/components/Buttons/SimpleButton';
import SimpleInput from '../../src/components/TextInputs/SimpleInput';

const [handleOnChange, handleLogin] = new Array(2).fill(jest.fn());
const props = {
  handleOnChange,
  handleLogin,
  email: '',
  password: '',
  isSubmitting: false,
};
const warper = shallow(<Login {...props} />);
describe('Login component', () => {
  beforeEach(() => {});
  describe('component rendered', () => {
    test('should match the snapshot', () => {
      expect(toJson(warper)).toMatchSnapshot();
    });
  });
  describe('component methods', () => {
    let instance;
    beforeEach(() => {
      instance = warper.instance();
      jest.spyOn(instance, 'handleSubmit');
    });
    afterEach(() => {
      instance.handleSubmit.mockClear();
      handleOnChange.mockClear();
      handleLogin.mockClear();
    });
    test('should handle email field input change', () => {
      warper
        .find(SimpleInput)
        .at(0)
        .simulate('change', {
          target: {
            name: 'email',
            value: 'jean.abayo@gmail.com',
          },
        });
      expect(handleOnChange).toBeCalledWith('email', 'jean.abayo@gmail.com');
    });
    test('should handle password field input change', () => {
      warper
        .find(SimpleInput)
        .at(1)
        .simulate('change', {
          target: {
            name: 'password',
            value: '12345',
          },
        });
      expect(handleOnChange).toBeCalledWith('password', '12345');
    });
    test('should dispatch login action', () => {
      const payload = {
        email: 'jean.abayo@gmail.com',
        password: 'password',
      };
      warper.setProps({ ...payload });
      warper
        .find(SimpleButton)
        .at(0)
        .simulate('click');
      expect(handleLogin).toBeCalledWith({
        ...payload,
      });
    });
  });
});
