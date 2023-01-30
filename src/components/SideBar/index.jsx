import React from 'react';
import { Link } from 'react-router-dom';
import categories from '../../utils/categories';
import genres from '../../utils/genres';
import './index.scss';

function SideBar() {
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
            <li key={category.id}>
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
            <li key={genre.id}>
              <span>{genre.icon}</span>
              <span>{genre.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
