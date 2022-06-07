import React from "react";
import styled from "styled-components";
import { DarkTheme } from "./Themes";

/*___________________________________________________*/
const Box = styled.h1`
  position: relative;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  margin: 0;
  background-color: ${DarkTheme.body};
  color: ${DarkTheme.text};
  display: flex;
  justify-content: center;
  align-items: center;
`;
/*___________________________________________________*/

const Loading = () => {
  return <Box>Loading...</Box>;
};

export default Loading;
