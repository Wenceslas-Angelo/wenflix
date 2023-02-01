import React from 'react';
import PropTypes from 'prop-types';
import {
  FaChevronLeft,
  FaChevronRight,
  FaUserCircle,
  FaBars,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Search from '../Search';
import './index.scss';

function Header({ setSearchTerm, showSearch, setShowSideBar, showSideBar }) {
  return (
    <header className={showSideBar ? 'header sidebar-open' : 'header'}>
      <div className="header__sidebar-action">
        <span
          className={showSideBar ? 'action-close active' : 'action-close'}
          onClick={() => setShowSideBar(false)}
        >
          <FaChevronLeft />
        </span>
        <span
          className={!showSideBar ? 'action-open active' : 'action-open'}
          onClick={() => setShowSideBar(true)}
        >
          <FaChevronRight />
        </span>
      </div>

      <div
        className="bars-icon"
        onClick={() => setShowSideBar((prev) => (prev ? false : true))}
      >
        <FaBars />
      </div>

      {showSearch && <Search setSearchTerm={setSearchTerm} />}
      <div className="header__user">
        <FaUserCircle color="#fff" fontSize={20} />
        <Link to="/">LOGIN</Link>
      </div>
    </header>
  );
}

Header.propTypes = {
  setSearchTerm: PropTypes.func.isRequired,
  showSearch: PropTypes.bool,
  setShowSideBar: PropTypes.func.isRequired,
  showSideBar: PropTypes.bool,
};

export default Header;
