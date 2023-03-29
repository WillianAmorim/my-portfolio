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
      cursor: pointer;
    }

    .hvr-underline-from-left {
      display: inline-block;
      vertical-align: middle;
      -webkit-transform: perspective(1px) translateZ(0);
      transform: perspective(1px) translateZ(0);
      box-shadow: 0 0 1px rgba(0, 0, 0, 0);
      position: relative;
      overflow: hidden;
    }
    .hvr-underline-from-left:before {
      content: "";
      position: absolute;
      z-index: -1;
      left: 0;
      right: 100%;
      bottom: 0;
      background: #FFFFFF;
      height: 4px;
      -webkit-transition-property: right;
      transition-property: right;
      -webkit-transition-duration: 0.3s;
      transition-duration: 0.3s;
      -webkit-transition-timing-function: ease-out;
      transition-timing-function: ease-out;
    }
    .hvr-underline-from-left:hover:before, .hvr-underline-from-left:focus:before, .hvr-underline-from-left:active:before {
      right: 0;
    }
  }
`