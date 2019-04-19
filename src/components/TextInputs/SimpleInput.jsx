import React from 'react';
import PropTypes from 'prop-types';
import './input.scss';

const SimpleInput = (props) => {
  const {
    type, name, value, id, onChange, placeholder, label,
  } = props;
  return (
    <label htmlFor="inputEmail4">
      {label}

      <input
        type={type}
        className="form-control"
        name={name}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </label>
  );
};
SimpleInput.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
SimpleInput.defaultProps = {
  id: '',
};
export default SimpleInput;
