import React from 'react';
import {
  FaChevronLeft,
  FaChevronRight,
  FaSearch,
  FaUserCircle,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './index.scss';

function Header() {
  return (
    <header className="header">
      <div className="header__sidebar-action">
        <FaChevronLeft color="#fff" fontSize={20} />
        <FaChevronRight color="#a3a696" fontSize={20} />
      </div>
      <form className="header__search">
        <FaSearch className="search-icon" />
        <input type="text" name="search" id="search" placeholder="Search..." />
      </form>
      <div className="header__user">
        <FaUserCircle color="#fff" fontSize={20} />
        <Link to="/">LOGIN</Link>
      </div>
    </header>
  );
}

export default Header;
