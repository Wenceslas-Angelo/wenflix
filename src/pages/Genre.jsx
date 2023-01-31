import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';

import useGenreFetch from '../hooks/useGenreFetch';

import Banner from '../components/Banner';
import Grid from '../components/Grid';
import Thumbnail from '../components/Thumbnail';
import Spinner from '../components/Spinner';

import { BACKDROP_SIZE, IMAGE_BASE_URL, POSTER_SIZE } from '../utils/config';
import noImage from '../images/no_image.jpg';
import Button from '../components/Button';

function Genre({ value }) {
  const { state, loading, setIsLoadingMore } = useGenreFetch(value);
  const { genreName } = useParams();

  return (
    <div className="Home">
      {state.results[0] ? (
        <Banner
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      ) : null}

      <Grid header={`${genreName} Movies`}>
        {state.results.map((movie) => (
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

      {loading && <Spinner />}

      {state.total_pages > state.page && !loading && (
        <Button text="Load More" callback={() => setIsLoadingMore(true)} />
      )}
    </div>
  );
}

Genre.propTypes = {
  value: PropTypes.object,
};

export default Genre;
