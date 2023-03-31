import React from 'react';
import PropTypes from 'prop-types';
import BannerStyles from './index.styles';

function Banner({ image, title, text }) {
  return (
    <BannerStyles image={image}>
      <div className="content">
        <div className="text">
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
      </div>
    </BannerStyles>
  );
}

Banner.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  text: PropTypes.string,
};

export default Banner;
