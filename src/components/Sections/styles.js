import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 50px;
  background: radial-gradient(transparent, #000 90%);
  color: #fff;
  text-align: center;

  position: relative;

  display: flex;
  flex-direction: ${(props) => props.flexDirection || `row`};
  align-items: center;
  justify-content: center;

  h1 {
    width: 500px;
    margin-bottom: 20px;
    font-size: 3rem;
  }
  h3 {
    width: 500px;
    margin-bottom: 20px;
    font-size: 1.5rem;
    font-weight: 200;
  }

  * {
    position: relative;
  }
`;
