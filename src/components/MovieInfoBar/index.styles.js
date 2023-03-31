import styled from 'styled-components';

const MovieInfoBarStyles = styled.div`
  display: flex;
  align-items: center;
  min-height: 100px;
  background-color: #333;
  padding: 0 20px;

  .content {
    display: flex;
    max-width: 80%;
    width: 100%;
    margin: 0 auto;

    .column {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #181818;
      border-radius: 20px;
      margin: 0 20px;
      padding-top: 20px;
      padding-bottom: 20px;
      flex: 1;
      color: #fff;

      :first-child {
        margin-left: 0;
      }
      :last-child {
        margin-right: 0;
      }
    }
  }
`;

export default MovieInfoBarStyles;
