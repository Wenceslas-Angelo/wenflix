import styled from 'styled-components';

const BannerStyles = styled.div`
  margin: 30px 20px 20px 20px;
  border-radius: 10px;
  overflow: hidden;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 41%,
      rgba(0, 0, 0, 0.65) 100%
    ),
    url(${({ image }) => image});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 500px;
  position: relative;
  animation: animateBanner 1s;
  @keyframes animateBanner {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  .content {
    padding: 20px;
    margin: 0 auto;
  }
  .text {
    z-index: 50;
    max-width: 700px;
    position: absolute;
    bottom: 40px;
    margin-right: 20px;
    min-height: 100px;
    h1 {
      font-size: 45px;
      color: #fff;
    }
    p {
      font-size: 20px;
      color: #a3a696;
    }
  }

  @media screen and (max-width: 600px) {
    margin: 80px 10px 10px 10px;
  }
`;

export default BannerStyles;
