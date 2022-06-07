import { motion } from "framer-motion";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Facebook, Github, LinkedIn, Instgram } from "./SVGS";
import { DarkTheme } from "./Themes";

/*________________________________________________________________*/
const Icons = styled.nav`
  display: flex;
  flex-flow: column;
  align-items: center;
  position: fixed;
  left: 2rem;
  bottom: 0;
  z-index: 3;
  /*_____________________________*/
  @media (max-width: 767px) {
    left: 1rem;
  }
`;
/*________________________________________________________________*/
const Link = styled(motion(NavLink))`
  transition: 0.3s;
  /*_____________________________*/
  &:not(:last-child) {
    margin: 0.5rem 0;
  }
  /*_____________________________*/
  & > * {
    transition: 0.3s;
  }
  /*_____________________________*/
  & > *:hover {
    transform: scale(1.2);
  }
`;
/*________________________________________________________________*/
const Line = styled(motion.span)`
  width: 2px;
  height: 8rem;
  background-color: ${(props) =>
    props.theme === "dark" ? DarkTheme.text : DarkTheme.body};
  /*_____________________________*/
  @media (max-width: 767px) {
    height: 5rem;
  }
`;
/*________________________________________________________________*/

const Social = (props) => {
  return (
    <Icons>
      <Link
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 2, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1 }}
        to={{ pathname: "https://github.com/AKASI1" }}
        target={"-blank"}
      >
        <Github
          width={props.isPhone ? 20 : 25}
          fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
        />
      </Link>

      <Link
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 2, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.2 }}
        to={{
          pathname: "https://www.instagram.com/_akasi__/",
        }}
        target={"-blank"}
      >
        <Instgram
          width={props.isPhone ? 25 : 30}
          fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
        />
      </Link>
      <Link
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 2, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.4 }}
        to={{ pathname: "https://www.facebook.com/AhmedKASI777/" }}
        target={"-blank"}
      >
        <Facebook
          width={props.isPhone ? 20 : 25}
          fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
        />
      </Link>
      <Link
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1, 2, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.6 }}
        to={{ pathname: "https://www.linkedin.com/in/akasi/" }}
        target={"-blank"}
      >
        <LinkedIn
          width={props.isPhone ? 23 : 29}
          fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
        />
      </Link>
      <Line
        initial={{ height: 0 }}
        animate={{ height: `${props.isPhone ? "5rem" : "8rem"}` }}
        transition={{ type: "spring", duration: 1, delay: 0.8 }}
        theme={props.theme}
      />
    </Icons>
  );
};

export default Social;
