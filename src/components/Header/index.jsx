import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useLocation, Link } from 'react-router-dom';
import genres from '../../utils/genres';
import categories from '../../utils/categories';
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

function Header({
  setSearchTerm,
  setShowSideBar,
  showSideBar,
  setCategory,
  setGenre,
}) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const location = useLocation();
  let showSearch = false;

  categories.forEach((category) =>
    location.pathname === category.path ? (showSearch = true) : null
  );

  if (!showSearch) {
    genres.forEach((genre) =>
      location.pathname === `/genre/${genre.name}` ? (showSearch = true) : null
    );
  }

  return (
    <header className={showSideBar ? 'header sidebar-open' : 'header'}>
      <div className="header__action">
        <div
          className="sidebar__logo"
          onClick={() => {
            setCategory('Popular');
            setGenre({});
          }}
        >
          <Link to="/">
            Wenflix<span>.</span>
          </Link>
        </div>
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
      </div>

      {showSearch ? <Search setSearchTerm={setSearchTerm} /> : null}

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
  setShowSideBar: PropTypes.func.isRequired,
  showSideBar: PropTypes.bool,
  setCategory: PropTypes.func,
  setGenre: PropTypes.func,
};

export default Header;
