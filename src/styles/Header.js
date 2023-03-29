import styled from "styled-components";

export const Container = styled.div `
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 50px;
  padding-right: 50px;
  background-color: #101638;
  color: #FFFFFF;

  div {
    font-size: 40px;
  }

  ul {
    display: flex;
    list-style: none;
    gap: 40px;

    li {
      font-size: 25px;
    }
  }
`