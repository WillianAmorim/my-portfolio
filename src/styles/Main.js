import styled from "styled-components";

export const Container = styled.div `
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  #info-home {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  #section-links {
    div {
      display: flex;
      gap: 15px;
    }
  }
`