import React from 'react';
import PropTypes from 'prop-types';

function Display({ props }) {
  return (
    <div className="display">{props}</div>
  );
}

Display.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Display;
