import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 50px;
  background: radial-gradient(rgba(0, 0, 0, 0.4), #000 100%);
  color: #fff;
  text-align: center;

  position: relative;

  display: flex;
  flex-direction: ${(props) => props.flexDirection || `row`};
  align-items: center;
  justify-content: center;
  gap: 10px;

  h1 {
    width: 100%;
    max-width: 600px;
    margin-bottom: 20px;
    font-size: 3rem;
  }
  h3 {
    width: 100%;
    max-width: 500px;
    margin-bottom: 20px;
    font-size: 1.5rem;
    font-weight: 200;
  }

  @media (max-width: 768px) {
    h1 {
      margin-bottom: 20px;
      font-size: 2rem;
    }
    h3 {
      margin-bottom: 20px;
      font-size: 1.3rem;
      font-weight: 200;
    }

    p {
      max-width: 400px;
      font-size: 1.3rem;
    }
  }

  * {
    position: relative;
  }
`;
