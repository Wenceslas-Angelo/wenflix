import React from 'react';
import PropTypes from 'prop-types';

import Banner from '../components/Banner';
import Grid from '../components/Grid';
import Thumbnail from '../components/Thumbnail';
import Spinner from '../components/Spinner';

import { BACKDROP_SIZE, IMAGE_BASE_URL, POSTER_SIZE } from '../utils/config';
import useHomeFetch from '../hooks/useHomeFetch';
import noImage from '../assets/images/no_image.jpg';
import Button from '../components/Button';
import Error from '../components/Error';

function Home({ searchTerm, category, genre }) {
  const { state, loading, setIsLoadingMore, error } = useHomeFetch(
    searchTerm,
    category,
    genre
  );

  if (error) return <Error />;

  return (
    <div className="Home">
      {!searchTerm && state.results[0] ? (
        <Banner
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      ) : null}

      <Grid
        header={
          genre.id
            ? `${genre.name} Movies`
            : searchTerm
            ? 'Search Result'
            : `${category} Movies`
        }
      >
        {state.results.map((movie) => (
          <Thumbnail
            key={movie.id}
            image={
              movie.poster_path
                ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                : noImage
            }
            movieId={movie.id}
            voteAverage={movie.vote_average}
            title={movie.title}
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

Home.defaultProps = {
  searchTerm: '',
};

Home.propTypes = {
  searchTerm: PropTypes.string,
  category: PropTypes.string,
  genre: PropTypes.object,
  setCategory: PropTypes.func,
};

export default Home;
