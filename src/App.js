import React from "react";
import { Main, Header, Div } from './styled'
import Gif from './assets/giphy.gif'
import Image from './assets/Willian.jpeg'

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
        <img id="gif-computer" src={Gif} alt="" />
        <section>
          <h1>Willian SIlva Amorim</h1>
          <h2>Desenvolvedor Front-End</h2>
        </section>
      </Div>
    </Main>
  );
}

export default App;
