import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  position: relative;

  img {
    width: 100%;
    height: 100%;

    position: absolute;
    object-fit: cover;
  }
`;

export const Section = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 50px 10px;
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

  form,
  input,
  button {
    width: 100%;
    max-width: 600px;
    padding: 15px 10px;
    border: none;
    border-radius: 0;
  }

  form {
    display: flex;
  }

  form > input {
    border: none;
  }

  form > button {
    max-width: 140px;
    border: none;
    background-color: #e50914;
    color: #fff;
    font-size: 1.3rem;
  }

  @media (max-width: 768px) {
    form {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;

      input,
      button {
        padding: 10px;
        font-size: 1rem;
      }
    }
  }
  @media (max-width: 425px) {
    h1 {
      margin-bottom: 20px;
      font-size: 1.8rem;
    }
    h3 {
      margin-bottom: 20px;
      font-size: 1.2rem;
      font-weight: 200;
    }

    p {
      max-width: 400px;
      font-size: 1.2rem;
    }
  }

  * {
    position: relative;
  }
`;
