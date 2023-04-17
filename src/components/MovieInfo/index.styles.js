import styled from 'styled-components';
import { BACKDROP_SIZE, IMAGE_BASE_URL } from '../../utils/config';

const MovieInfoStyles = styled.div`
  background: ${({ backdrop }) =>
    backdrop ? `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop})` : '#000'};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  padding: 40px 20px;
  animation: animateMovieInfo 1s;

  @keyframes animateMovieInfo {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .content {
    @media screen and (min-width: 768px) {
      display: flex;
    }

    margin: 0 auto;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 20px;

    .text {
      width: 100%;
      padding: 20px 40px;
      overflow: hidden;

      h1 {
        padding: 30px 0;
        color: #fff;
      }

      h3 {
        padding-bottom: 10px;
        color: #7b818a;
      }

      p {
        font-size: 20px;
        line-height: 30px;
        padding-bottom: 30px;
        color: #a3a696;
      }

      .rating-directors {
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
      }

      .score {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        background-color: #fff;
        color: #000;
        font-weight: 800;
        border-radius: 50%;
        margin: 0;
      }

      .directors-info {
        margin: 0 0 0 40px;

        p {
          margin: 0;
        }
      }

      .directors {
        display: flex;
        justify-content: space-around;
      }
    }
  }
`;

export default MovieInfoStyles;
