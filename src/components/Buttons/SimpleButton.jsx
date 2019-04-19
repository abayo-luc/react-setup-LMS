import React from 'react';
import PropTypes from 'prop-types';

const SimpleButton = (props) => {
  const { title, onClick, disabled } = props;
  return (
    <button
      type="button"
      className="btn btn-primary btn-lg btn-block"
      onClick={onClick}
      disabled={disabled}
    >
      {title}
    </button>
  );
};
SimpleButton.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};
SimpleButton.defaultProps = {
  onClick: () => null,
  disabled: false,
};
export default SimpleButton;
