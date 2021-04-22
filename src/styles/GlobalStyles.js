import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    font-family: 'Roboto Regular'
  }

  button {
    background: transparent;
    border:none;
    cursor: pointer;
  }
`;

export const ButtonPrimary = styled.button`
  background-color: #e50914;
  color: #fff;
  line-height: normal;
  padding: 7px 17px;
  font-weight: 400;
  font-size: 1rem;

  @media (max-width: 425px) {
    max-width: 80px;
    font-size: 0.8rem;
    padding: 7px;
  }
`;

export const ButtonSecondary = styled.button`
  background-color: transparent;
  border: 1px solid #333;
  color: #999;
  line-height: normal;
  padding: 7px 17px;
  font-weight: 400;
  font-size: 1rem;

  @media (max-width: 425px) {
    max-width: 80px;
    font-size: 0.8rem;
    padding: 7px;
  }
`;
