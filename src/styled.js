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
  gap: 50px;
  justify-content: space-around;
  height: 100%;
  background-color: bisque;
  padding-top: 70px;

  #gif-computer{
    border-radius: 25px;
    width: 500px;
    height: 300px;
  }
`