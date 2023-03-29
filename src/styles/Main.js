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

      a {
        .hvr-grow-shadow {
          display: inline-block;
          vertical-align: middle;
          -webkit-transform: perspective(1px) translateZ(0);
          transform: perspective(1px) translateZ(0);
          box-shadow: 0 0 1px rgba(0, 0, 0, 0);
          -webkit-transition-duration: 0.3s;
          transition-duration: 0.3s;
          -webkit-transition-property: box-shadow, transform;
          transition-property: box-shadow, transform;
        }
        .hvr-grow-shadow:hover, .hvr-grow-shadow:focus, .hvr-grow-shadow:active {
          box-shadow: 0 10px 10px -10px rgba(0, 0, 0, 0.5);
          -webkit-transform: scale(1.1);
          transform: scale(1.1);
        }
      }
    }
  }
`