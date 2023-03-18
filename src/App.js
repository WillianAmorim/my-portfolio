import React from "react";
import { Header } from './styled'
import Gif from './assets/giphy.gif'

function App() {
  return (
    <>
      <Header>
        <p>Portfolio</p>
        <ul>
          <li>Home</li>
          <li>Sobre Min</li>
          <li>Projetos</li>
          <li>Contate-me</li>
        </ul>
      </Header>
      <div>
        <img src={Gif} alt="" />
      </div>
    </>
  );
}

export default App;
