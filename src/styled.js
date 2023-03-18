import styled from "styled-components";

export const Main = styled.main `
  height: 100vh;
  width: 100vw;
`

export const Header = styled.header `
  background-color: yellow;
  display: flex;
  justify-content: space-between;
  padding: 0 15px;
  align-items: center;

  ul {
    display: flex;
    list-style: none;
    gap: 30px;
  }
`

export const Div = styled.div `
  display: flex;
  height: 100%;
  padding: 50px 50px;
  background-color: bisque;

  img {
    border-radius: 25px;
  }
`