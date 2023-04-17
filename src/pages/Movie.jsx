import React from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import MovieInfo from '../components/MovieInfo';
import MovieInfoBar from '../components/MovieInfoBar';
import Spinner from '../components/Spinner';
import useMovieFetch from '../hooks/useMovieFetch';
import Error from '../components/Error';
import Grid from '../components/Grid';
import Thumbnail from '../components/Thumbnail';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../utils/config';
import NoImage from '../assets/images/no_image.jpg';
import Actors from '../components/Actors';
import noImage from '../assets/images/no_image.jpg';

function Movie() {
  const { movieId } = useParams();
  const { state: movie, loading, error, similar } = useMovieFetch(movieId);
  if (loading) return <Spinner />;
  if (error) return <Error />;
  return (
    <div>
      {movie.directors ? (
        <>
          {/* Movie Informations */}
          <MovieInfo
            backdropPath={movie.backdrop_path}
            posterPath={movie.poster_path ? movie.poster_path : NoImage}
            title={movie.title}
            overview={movie.overview}
            voteAverage={movie.vote_average}
            directors={movie.directors}
          />
          <MovieInfoBar
            time={movie.runtime}
            budget={movie.budget}
            revenue={movie.revenue}
          />

          {/* Actors */}
          <Actors actors={movie.actors} />

          {/* Movie Similar */}
          <div>
            <Grid header="Similar Movie">
              {similar.results.map((movie) => (
                <Thumbnail
                  key={movie.id}
                  image={
                    movie.poster_path
                      ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                      : noImage
                  }
                  movieId={movie.id}
                  clickable
                />
              ))}
            </Grid>
          </div>
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
}

Movie.propTypes = {
  setShowSearch: PropTypes.func,
};

export default Movie;
