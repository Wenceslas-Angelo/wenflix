import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import PropTypes from 'prop-types';
import Actor from '../Actor';
import { IMAGE_BASE_URL, POSTER_SIZE } from '../../utils/config';

function Actors({ actors }) {
  return (
    <div style={{ margin: '20px' }}>
      <h1 style={{ padding: '20px' }}>Actors</h1>
      <Splide
        options={{
          perMove: 1,
          type: 'loop',
          perPage: 5,
          breakpoints: {
            1024: {
              perPage: 4,
            },
          },
          width: `${100}%`,
          gap: '1rem',
          autoplay: true,
          interval: 2000,
          pauseOnHover: true,
        }}
      >
        {actors.map(
          (actor) =>
            actor.profile_path && (
              <SplideSlide key={actor.credit_id}>
                <Actor
                  name={actor.name}
                  character={actor.character}
                  imageUrl={`${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`}
                />
              </SplideSlide>
            )
        )}
      </Splide>
    </div>
  );
}

Actors.propTypes = {
  actors: PropTypes.array.isRequired,
};

export default Actors;
