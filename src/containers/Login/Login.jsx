import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SimpleInput from '../../components/TextInputs/SimpleInput';
import './login.scss';
import SimpleButton from '../../components/Buttons/SimpleButton';
import { handleOnChange, handleLogin } from '../../store/actions/auth';

export class Login extends Component {
  state = {};

  handleSubmit = () => {
    const {
      handleLogin: sendCredential,
      email,
      password,
      history,
    } = this.props;
    sendCredential({ email, password }, () => history.push('/'));
  };

  render() {
    const {
      handleOnChange: handleOnChangeText,
      email,
      password,
      isSubmitting,
      errors,
    } = this.props;
    return (
      <div id="login">
        <form>
          <SimpleInput
            type="email"
            placeholder="Email"
            name="email"
            label="Email"
            value={email}
            onChange={e => handleOnChangeText(e.target.name, e.target.value)}
          />
          <SimpleInput
            type="password"
            placeholder="Password"
            name="password"
            label="Password"
            value={password}
            onChange={e => handleOnChangeText(e.target.name, e.target.value)}
          />
          {errors.message ? (
            <div className="invalid-feedback" data-test="error">
              {errors.message}
            </div>
          ) : (
            ''
          )}
          <SimpleButton
            title="Login"
            onClick={this.handleSubmit}
            disabled={isSubmitting}
          />
        </form>
      </div>
    );
  }
}

Login.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  email: PropTypes.string,
  password: PropTypes.string,
  isSubmitting: PropTypes.bool,
  handleLogin: PropTypes.func.isRequired,
  errors: PropTypes.shape({
    message: PropTypes.string,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
Login.defaultProps = {
  email: '',
  password: '',
  isSubmitting: false,
};
export const mapStateToProps = (state) => {
  const { auth } = state;
  return {
    ...auth,
  };
};
export default connect(
  mapStateToProps,
  { handleOnChange, handleLogin },
)(Login);
