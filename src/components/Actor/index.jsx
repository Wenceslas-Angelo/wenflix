import React from 'react';
import PropTypes from 'prop-types';
import ActorsStyles from './index.styles';

function Actor({ name, character, imageUrl }) {
  return (
    <ActorsStyles>
      <img src={imageUrl} alt="actor-thumb" />
      <h3>{name}</h3>
      <p>{character}</p>
    </ActorsStyles>
  );
}

Actor.propTypes = {
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};

export default Actor;
