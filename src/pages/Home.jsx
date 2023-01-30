import React from 'react';

import Banner from '../components/Banner';
import Grid from '../components/Grid';
import Thumbnail from '../components/Thumbnail';
import Spinner from '../components/Spinner';

import { BACKDROP_SIZE, IMAGE_BASE_URL, POSTER_SIZE } from '../utils/config';
import useHomeFetch from '../hooks/useHomeFetch';
import noImage from '../images/no_image.jpg';

function Home() {
  const { state, loading } = useHomeFetch();
  return (
    <div className="Home">
      {state.results[0] ? (
        <Banner
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      ) : null}

      <Grid header={'Popular Movies'}>
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
    </div>
  );
}

export default Home;
