import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ratingStar, truncateText } from '../../utils/helpers';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { AiOutlineStar } from 'react-icons/ai';
import './index.scss';

function Thumbnail({ image, movieId, clickable, voteAverage, title }) {
  return (
    <div className="thumbnail">
      {clickable ? (
        <Link to={`/movie/${movieId}`}>
          <img src={image} alt="movie-thumb" />
          <h3>{truncateText(title, 20)}</h3>
          <div className="star-container">
            {ratingStar(voteAverage).map((star, index) =>
              star === 'full' ? (
                <span key={index}>
                  <FaStar />
                </span>
              ) : star === 'half' ? (
                <span key={index}>
                  <FaStarHalfAlt />
                </span>
              ) : (
                <span key={index}>
                  <AiOutlineStar />
                </span>
              )
            )}
          </div>
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
  voteAverage: PropTypes.number,
  title: PropTypes.string,
};

export default Thumbnail;
