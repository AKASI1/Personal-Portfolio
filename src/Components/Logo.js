import React from "react";
import styled from "styled-components";
import { DarkTheme } from "./Themes";

/*________________________________________________________________*/
const Name = styled.h1`
  display: inline-block;
  margin: 0;
  position: fixed;
  top: 2rem;
  left: 2rem;
  color: ${(props) =>
    props.color === "dark" ? DarkTheme.text : DarkTheme.body};
  font-family: "Pacifico", cursive;
  z-index: 3;
  transition: 1s;
  @media (max-width: 767px) {
    font-size: 1.5em;
    left: 1rem;
    top: 2rem;
  }
`;
/*________________________________________________________________*/

const Logo = (props) => {
  return <Name color={props.theme}>KASI</Name>;
};

export default Logo;
