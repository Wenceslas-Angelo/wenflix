import React from 'react';
import PropTypes from 'prop-types';
import { FaArrowLeft } from 'react-icons/fa';
// import { MdMovie } from 'react-icons/md';
// import { BiMoviePlay } from 'react-icons/bi';
import { CgWebsite } from 'react-icons/cg';
import { Link } from 'react-router-dom';
import './index.scss';

function MovieExternalLink({ homePage }) {
  return (
    <div className="external-link">
      <Link to={homePage} target="_blank">
        <span>WEBSITE</span> <CgWebsite />
      </Link>
      {/* <Link to="/">
        <span>IMDB</span> <MdMovie />
      </Link>
      <Link to="/">
        <span>FAVORITE</span> <FaHeart />
      </Link>
      <Link to="/">
        <span>TRAILER</span> <BiMoviePlay />
      </Link> */}
      <Link to="/">
        <span>BACK</span> <FaArrowLeft />
      </Link>
    </div>
  );
}

MovieExternalLink.propTypes = {
  homePage: PropTypes.string,
};

export default MovieExternalLink;
