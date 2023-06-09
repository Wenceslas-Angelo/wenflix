import React from 'react';
import PropTypes from 'prop-types';

import MovieInfoStyles from './index.styles';
import Thumbnail from '../Thumbnail';
import MovieExternalLink from '../MovieExternalLink';

import { IMAGE_BASE_URL, POSTER_SIZE } from '../../utils/config';
import NoImage from '../../assets/images/no_image.jpg';

function MovieInfo({
  backdropPath,
  posterPath,
  title,
  overview,
  voteAverage,
  directors,
  homePage,
}) {
  return (
    <MovieInfoStyles backdrop={backdropPath}>
      <div className="content">
        <Thumbnail
          image={
            posterPath
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${posterPath}`
              : NoImage
          }
          clickable={false}
          alt="movie-poster"
        />
        <div className="text">
          <h1>{title}</h1>
          <h3>PLOT</h3>
          <p>{overview}</p>
          <div className="directors">
            <div className="rating-directors">
              <h3>RATING</h3>
              <div className="score">{voteAverage}</div>
            </div>
            <div className="directors-info">
              <h3>
                DIRECTOR
                {directors.length > 1 ? 'S' : ''}
                {directors.map((director) => (
                  <p key={director.credit_id}>{director.name}</p>
                ))}
              </h3>
            </div>
          </div>

          <MovieExternalLink homePage={homePage} />
        </div>
      </div>
    </MovieInfoStyles>
  );
}

MovieInfo.propTypes = {
  backdropPath: PropTypes.string,
  posterPath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  voteAverage: PropTypes.number.isRequired,
  directors: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.any)).isRequired,
  homePage: PropTypes.string,
};

export default MovieInfo;
