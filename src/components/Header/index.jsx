import React from 'react';
import PropTypes from 'prop-types';
import { FaChevronLeft, FaChevronRight, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Search from '../Search';
import './index.scss';

function Header({ setSearchTerm }) {
  return (
    <header className="header">
      <div className="header__sidebar-action">
        <FaChevronLeft color="#fff" fontSize={20} />
        <FaChevronRight color="#a3a696" fontSize={20} />
      </div>
      <Search setSearchTerm={setSearchTerm} />
      <div className="header__user">
        <FaUserCircle color="#fff" fontSize={20} />
        <Link to="/">LOGIN</Link>
      </div>
    </header>
  );
}

Header.propTypes = {
  setSearchTerm: PropTypes.func.isRequired,
};

export default Header;
