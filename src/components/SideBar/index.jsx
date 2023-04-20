import React from 'react';
import PropTypes from 'prop-types';
import categories from '../../utils/categories';
import genres from '../../utils/genres';
import './index.scss';

function SideBar({ setCategory, setGenre, showSideBar }) {
  return (
    <div className={showSideBar ? 'sidebar open' : 'sidebar'}>
      <div className="sidebar__categories">
        <h2>Categories</h2>
        <ul>
          {categories.map((category) => (
            <li
              key={category.id}
              onClick={() => {
                setGenre({});
                setCategory(category.name);
              }}
            >
              <span>{category.icon}</span>
              <span>{category.name}</span>
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
              }}
            >
              <span>{genre.icon}</span>
              <span>{genre.name}</span>
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
  showSideBar: PropTypes.bool,
};

export default SideBar;
