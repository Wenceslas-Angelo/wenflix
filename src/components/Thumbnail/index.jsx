import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './index.scss';

function Thumbnail({ image, movieId, clickable, setShowSearch }) {
  return (
    <div className="thumbnail" onClick={() => setShowSearch(false)}>
      {clickable ? (
        <Link to={`/movie/${movieId}`}>
          <img src={image} alt="movie-thumb" />
        </Link>
      ) : (
        <img src={image} alt="movie-thumb" />
      )}
    </div>
  );
}

Thumbnail.defaultProps = {
  movieId: 0,
};

Thumbnail.propTypes = {
  image: PropTypes.string.isRequired,
  movieId: PropTypes.number,
  clickable: PropTypes.bool.isRequired,
  setShowSearch: PropTypes.func,
};

export default Thumbnail;
