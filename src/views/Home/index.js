import React from 'react';

import Header from '../../components/Header';
import Sections from '../../components/Sections';

import { Container } from './styles';

import WallPaperNetflix from '../../assets/img/wallpaper-netflix.jpg';

function Home() {
  return (
    <Container>
      <img src={WallPaperNetflix} alt="wallpaper-netflix" />
      <Header />
      <Sections>
        <ul>
          <li>asd</li>
          <li>asd</li>
          <li>asd</li>
          <li>asd</li>
          <li>asd</li>
        </ul>
      </Sections>
    </Container>
  );
}

export default Home;
