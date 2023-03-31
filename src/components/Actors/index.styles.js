const { default: styled } = require('styled-components');

const ActorsStyles = styled.div`
  color: #fff;
  background-color: #333;
  border-radius: 20px;
  padding: 5px;
  text-align: center;

  img {
    display: block;
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 15px;
  }

  h3 {
    margin: 10px 0 0 0;
  }

  p {
    margin: 5px 0;
  }
`;

export default ActorsStyles;
