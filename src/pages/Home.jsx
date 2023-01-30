import React from 'react';

import Banner from '../components/Banner';

import { BACKDROP_SIZE, IMAGE_BASE_URL } from '../utils/config';
import useHomeFetch from '../hooks/useHomeFetch';

function Home() {
  const { state } = useHomeFetch();
  return (
    <div className="Home">
      {state.results[0] ? (
        <Banner
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
          title={state.results[0].original_title}
          text={state.results[0].overview}
        />
      ) : null}
    </div>
  );
}

export default Home;
