import React from 'react';

import { Container } from './styles';

function Sections(props) {
  return <Container flexDirection={props.flexDirection}>{props.children}</Container>;
}

export default Sections;
