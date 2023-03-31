import React from 'react';
import PropTypes from 'prop-types';
import './index.scss';

function Grid({ header, children }) {
  return (
    <div className="grid">
      <h1>{header}</h1>
      <div className="content">{children}</div>
    </div>
  );
}

Grid.propTypes = {
  header: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
};

export default Grid;
