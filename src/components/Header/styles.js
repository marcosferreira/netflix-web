import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 45px;
  padding: 28px 55px;
  background: linear-gradient(to top, transparent, #000000);

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  position: absolute;
  z-index: 1;

  @media (max-width: 425px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.8rem;
    padding: 25px 20px;
  }
`;

export const NetflixLogo = styled.span`
  fill: #e50914;
  line-height: normal;

  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    min-width: 135px;
  }

  span {
    visibility: hidden;
  }

  @media (max-width: 768px) {
    svg {
      min-width: 108px;
    }
  }

  @media (max-width: 425px) {
    svg {
      min-width: 90px;
    }
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
