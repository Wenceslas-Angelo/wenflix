import styled from 'styled-components';

const MovieInfoBarStyles = styled.div`
  display: flex;
  align-items: center;
  min-height: 100px;
  background-color: #333;
  padding: 0 20px;

  .content {
    display: flex;
    @media screen and (max-width: 600px) {
      flex-direction: column;
    }
    max-width: 80%;
    width: 100%;
    margin: 0 auto;

    .column {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      background-color: #181818;
      border-radius: 20px;
      margin: 10px 0;
      padding: 20px 10px;
      flex: 1;
      color: #fff;

      @media screen and (min-width: 601px) {
        margin: 0 20px;
        :first-child {
          margin-left: 0;
        }
        :last-child {
          margin-right: 0;
        }
      }
    }
  }
`;

export default MovieInfoBarStyles;
