import { createGlobalStyle } from 'styled-components';

import RobotoRegular from '../assets/fonts/Roboto-Regular.ttf';

export default createGlobalStyle`
  @font-face {
    font-family: 'Roboto Regular' ;
    src: url(${RobotoRegular});
  }
`;
