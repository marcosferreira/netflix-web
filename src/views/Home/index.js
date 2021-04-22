import React from 'react';

import Header from '../../components/Header';

import { Container, Section } from './styles';

import WallPaperNetflix from '../../assets/img/wallpaper-netflix.jpg';

function Home() {
  return (
    <Container>
      <img src={WallPaperNetflix} alt="wallpaper-netflix" />
      <Header />
      <Section flexDirection="column">
        <h1>Filmes, séries e muito mais. Sem limites.</h1>
        <h3>Assista onde quiser. Cancele quando quiser.</h3>

        <p>Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.</p>

        <form>
          <input type="email" name="search" placeholder="Email" />
          <button type="submit">Vamos lá </button>
        </form>
      </Section>
    </Container>
  );
}

export default Home;
