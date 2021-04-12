import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 45px;
  padding: 28px 55px;
  background: linear-gradient(to top, transparent, #000000);

  position: absolute;
  z-index: 1;
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
