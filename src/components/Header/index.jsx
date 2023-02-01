import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import {
  FaChevronLeft,
  FaChevronRight,
  FaBars,
  FaSun,
  FaMoon,
} from 'react-icons/fa';
import Search from '../Search';
import { ThemeContext } from '../../contexts/themeContext';
import './index.scss';

function Header({ setSearchTerm, showSearch, setShowSideBar, showSideBar }) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <header className={showSideBar ? 'header sidebar-open' : 'header'}>
      <div className="header__sidebar-action">
        <span
          className={showSideBar ? 'action close active' : 'action close'}
          onClick={() => setShowSideBar(false)}
        >
          <FaChevronLeft />
        </span>
        <span
          className={!showSideBar ? 'action open active' : 'action open'}
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

      <div className="switch-theme" onClick={() => toggleTheme()}>
        <input type="checkbox" className="checkbox" />
        <span className="label">
          <FaSun color="#f39c12" />
          <FaMoon color="#f1c40f" />
          <div className="ball" id={theme} />
        </span>
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
