import React from 'react';
import PropTypes from 'prop-types';
import { calcTime, convertMoney } from '../../utils/helpers';
import MovieInfoBarStyles from './index.styles';

function MovieInfoBar({ time, budget, revenue }) {
  return (
    <MovieInfoBarStyles>
      <div className="content">
        <div className="column">
          <p>
            Running time:
            {`  ${calcTime(time)}`}
          </p>
        </div>
        <div className="column">
          <p>
            Budget:
            {`   ${convertMoney(budget)}`}
          </p>
        </div>
        <div className="column">
          <p>
            Revenue:
            {`   ${convertMoney(revenue)}`}
          </p>
        </div>
      </div>
    </MovieInfoBarStyles>
  );
}

MovieInfoBar.propTypes = {
  time: PropTypes.number.isRequired,
  budget: PropTypes.number.isRequired,
  revenue: PropTypes.number.isRequired,
};

export default MovieInfoBar;
