import React from 'react';
import Fonts from './styles/Fonts';
import GlobalStyles from './styles/GlobalStyles';
import Home from './views/Home';

function App() {
  return (
    <React.Fragment>
      <Fonts />
      <GlobalStyles />

      <Home />
    </React.Fragment>
  );
}

export default App;
