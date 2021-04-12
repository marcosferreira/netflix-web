import React from 'react';

import { Container } from './styles';

function Sections(props) {
  return <Container>{props.children}</Container>;
}

export default Sections;
