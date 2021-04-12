import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 45px;
  padding: 28px 55px;
  background-color: rgba(0, 0, 0, 0.5);
  background: linear-gradient(to top, transparent, #000000);

  position: absolute;
`;

export const NetflixLogo = styled.span`
  fill: #e50914;
  line-height: normal;

  svg {
    min-width: 108px;
    min-height: 32px;
    max-width: 134px;
    max-height: 36px;
  }

  span {
    visibility: hidden;
  }
`;
