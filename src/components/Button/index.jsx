import React from 'react';
import { FaArrowDown } from 'react-icons/fa';
import PropTypes from 'prop-types';
import './index.scss';

function Button({ text, callback }) {
  return (
    <div onClick={callback} className="btn">
      <span>{text}</span>
      <FaArrowDown />
    </div>
  );
}

Button.propTypes = {
  text: PropTypes.string,
  callback: PropTypes.func,
};

export default Button;
