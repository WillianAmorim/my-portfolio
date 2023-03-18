import React from "react";
import { Main, Header, Div } from './styled'
import Gif from './assets/giphy.gif'

function App() {
  return (
    <Main>
      <Header>
        <p>Portfolio</p>
        <ul>
          <li>Home</li>
          <li>Sobre Mim</li>
          <li>Projetos</li>
          <li>Contate-me</li>
        </ul>
      </Header>
      <Div>
        <img src={Gif} alt="" />
      </Div>
    </Main>
  );
}

export default App;
