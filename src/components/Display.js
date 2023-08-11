import React from 'react';
import PropTypes from 'prop-types';

function Display({ props }) {
  return (
    <div className="display">{props}</div>
  );
}

Display.propTypes = {
  props: PropTypes.string.isRequired,
};

export default Display;
