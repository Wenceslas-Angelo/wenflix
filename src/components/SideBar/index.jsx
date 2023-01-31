import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import categories from '../../utils/categories';
import genres from '../../utils/genres';
import './index.scss';

function SideBar({ setCategory, setGenre, setShowSearch }) {
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <Link to="/">
          Netflix<span>.</span>
        </Link>
      </div>

      <div className="sidebar__categories">
        <h2>Categories</h2>
        <ul>
          {categories.map((category) => (
            <li
              key={category.id}
              onClick={() => {
                setGenre({});
                setCategory(category.name);
                category.name === 'Popular'
                  ? setShowSearch(true)
                  : setShowSearch(false);
              }}
            >
              <Link
                to={category.name === 'Popular' ? '/' : `/${category.name}`}
              >
                <span>{category.icon}</span>
                <span>{category.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="sidebar__genres">
        <h2>Genres</h2>
        <ul>
          {genres.map((genre) => (
            <li
              key={genre.id}
              onClick={() => {
                setGenre({ id: genre.id, name: genre.name });
                setCategory('');
                setShowSearch(false);
              }}
            >
              <Link to={`/genre/${genre.name}`}>
                <span>{genre.icon}</span>
                <span>{genre.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

SideBar.propTypes = {
  setCategory: PropTypes.func,
  setGenre: PropTypes.func,
  setShowSearch: PropTypes.func,
};

export default SideBar;
