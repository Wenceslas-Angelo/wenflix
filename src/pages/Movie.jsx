import React from 'react';
import { useParams } from 'react-router-dom';

import MovieInfo from '../components/MovieInfo';
import MovieInfoBar from '../components/MovieInfoBar';
import Spinner from '../components/Spinner';
import useMovieFetch from '../hooks/useMovieFetch';
import Grid from '../components/Grid';
import Actors from '../components/Actors';
import Error from '../components/Error';

import NoImage from '../assets/images/no_image.jpg';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../utils/config';

function Movie() {
  const { movieId } = useParams();
  const { state: movie, loading, error } = useMovieFetch(movieId);
  if (loading) return <Spinner />;
  if (error) return <Error />;
  return (
    <div>
      {movie.directors ? (
        <>
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
          <Grid header="Actors">
            {movie.actors.map(
              (actor) =>
                actor.profile_path && (
                  <Actors
                    key={actor.credit_id}
                    name={actor.name}
                    character={actor.character}
                    imageUrl={`${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`}
                  />
                )
            )}
          </Grid>
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
}

export default Movie;
