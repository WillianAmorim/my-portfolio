import styled from "styled-components";

export const Container = styled.div `
  display: flex;
  justify-content: space-evenly;
  align-items: center;


  #info-home {
    display: flex;
    flex-direction: column;
    gap: 20px;

    h1 {
      font-size: 35px;
      text-align: center;
      font-weight: normal;
      line-height: 1.2;
    }

    p {
      font-size: 35px;
      text-align: center;
    }

    section {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }

  #section-links {
    div {
      display: flex;
      gap: 15px;
    }
  }
`