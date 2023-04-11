import React from "react";
import Header from "../src/pages/Home/Header";
import Main from "../src/pages/Home/Main";
import Footer from "../src/pages/Home/Footer";
import { Container } from "./styles/App";

function App() {
  return (
    <Container>
      <Header />
      <Main />
      <Footer />
    </Container>
  );
}

export default App;
