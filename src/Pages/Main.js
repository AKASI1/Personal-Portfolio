import { motion } from "framer-motion";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Intro from "../Components/Intro";
import Logo from "../Components/Logo";
import Power from "../Components/Power";
import Social from "../Components/Social";
import { YinYang } from "../Components/SVGS";

/*________________________________________________________________*/
const MainContainer = styled(motion.div)`
  background: ${(props) => props.theme.body};
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "karla", sans-serif;
    font-weight: 500;
  }
`;
/*________________________________________________________________*/
const Container = styled.div`
  padding: 2rem;
  /*_____________________________*/
  @media (max-width: 767px) {
    & h2 {
      font-size: 1.1em;
    }
  }
`;
/*________________________________________________________________*/
const Contact = styled.div`
  color: ${(props) =>
    props.isPhone && props.isClicked ? props.theme.body : props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
`;
/*________________________________________________________________*/
const CV = styled.div`
  color: ${(props) =>
    props.isPhone && props.isClicked ? props.theme.body : props.theme.text};
  position: absolute;
  top: 52%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;
  transition: 1s;
  text-shadow: ${(props) =>
    props.isPhone && props.isClicked ? " rgb(0 0 0) 0px 0px 4px" : ""};
`;
/*________________________________________________________________*/
const Work = styled.div`
  color: ${(props) => (props.isClicked ? props.theme.body : props.theme.text)};
  position: absolute;
  top: 50%;
  left: calc(1rem + 2vw);
  transform: translate(-50%, -50%) rotate(-90deg);
  text-decoration: none;
  z-index: 1;
  transition: 1s;
  text-shadow: ${(props) =>
    props.isPhone && props.isClicked ? " rgb(0 0 0) 0px 0px 4px" : ""};
`;
/*________________________________________________________________*/
const BotomBar = styled.div`
  display: flex;
  justify-content: space-evenly;
  position: absolute;
  bottom: 1rem;
  left: 0;
  width: 100%;
  /*_____________________________*/
  & > :first-child {
    color: ${(props) =>
      props.isPhone
        ? props.theme.text
        : props.isClicked
        ? props.theme.body
        : props.theme.text};
    transition: 1s;
  }
  /*_____________________________*/
  & > :last-child {
    color: ${(props) => props.theme.text};
  }
`;
/*________________________________________________________________*/
const rotate = keyframes`
from{
  transform:rotate(0deg)
}
to{
  transform:rotate(360deg)
}`;
/*_______________________________________________*/
const Center = styled.button`
  position: absolute;
  top: ${(props) => (props.isClicked ? "85%" : "50%")};
  left: ${(props) => (props.isClicked ? "92%" : "50%")};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background-color: transparent;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 1s ease;
  /*_____________________________*/
  & > :first-child {
    animation: ${rotate} 1.5s linear infinite;
  }
  /*_____________________________*/
  & > :last-child {
    display: ${(props) => (props.isClicked ? "none" : "inline - block")};
    padding-top: 1rem;
    color: #333;
  }
  /*_____________________________*/
  @media (max-width: 767px) {
    top: ${(props) => (props.isClicked ? "90%" : "50%")};
    left: ${(props) => (props.isClicked ? "90%" : "50%")};
    width: 150px;
    height: 150px;
  }
`;
/*________________________________________________________________*/
const Darkbg = styled.div`
  background-color: #000;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 50%;
  width: ${(props) => (props.isClicked ? "50%" : "4%")};
  height: ${(props) => (props.isClicked ? "100%" : "0")};
  transition: height 0.5s ease, width 1s ease 0.5s;
  /*_____________________________*/
  @media (max-width: 767px) {
    right: 0;
    width: ${(props) => (props.isClicked ? "100%" : "4%")};
    height: ${(props) => (props.isClicked ? "50%" : "0")};
    transition: width 0.5s ease, height 1s ease 0.5s;
  }
`;
/*_______________________________________________________________________________*/

const Main = (props) => {
  const [clicked, setClicked] = useState(false);
  const [ani, setAni] = useState({ y: "-100vh" });

  return (
    <MainContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={ani}
      transition={{ duration: 0.8 }}
    >
      <Darkbg isClicked={+clicked} />

      <Container>
        <Power />
        <Logo theme={+clicked ? "dark" : "light"} />
        <Social
          isPhone={+props.isPhone}
          theme={props.isPhone ? "light" : clicked ? "dark" : "light"}
        />

        <Center isClicked={+clicked} onClick={() => setClicked(!clicked)}>
          <YinYang
            width={props.isPhone ? (clicked ? 40 : 150) : clicked ? 120 : 200}
          />
          <h4>Click here</h4>
        </Center>

        <NavLink
          target="_blank"
          to={{ pathname: "mailto:ahmedkasi777@gmail.com" }}
        >
          <Contact isClicked={+clicked} isPhone={+props.isPhone}>
            <motion.h3
              initial={{
                y: -200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
            >
              Say hi..
            </motion.h3>
          </Contact>
        </NavLink>

        <Link
          to={{
            pathname:
              "https://drive.google.com/file/d/1DARpt8dYAaGHdS8TEpuHwcn2AkyiuZUW/view?usp=sharing",
          }}
          target={"_blank"}
          style={{ fontSize: "14px" }}
        >
          <CV
            isClicked={+clicked}
            isPhone={+props.isPhone}
            onClick={() => setAni({ x: "-200vh" })}
          >
            <motion.h2
              initial={{
                y: -200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
            >
              My CV
            </motion.h2>
          </CV>
        </Link>

        <NavLink to={"/Work"}>
          <Work
            isPhone={+props.isPhone}
            isClicked={+clicked}
            onClick={() => setAni({ x: "200vh" })}
          >
            <motion.h2
              initial={{
                y: -200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
            >
              Work
            </motion.h2>
          </Work>
        </NavLink>

        <BotomBar isPhone={+props.isPhone} isClicked={+clicked}>
          <NavLink to={"/About"}>
            <motion.h2
              initial={{
                y: 200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
            >
              About.
            </motion.h2>
          </NavLink>

          <NavLink to={"/Skills"}>
            <motion.h2
              initial={{
                y: 200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.8 }}
            >
              My Skills.
            </motion.h2>
          </NavLink>
        </BotomBar>

        {clicked && <Intro isPhone={+props.isPhone} />}
      </Container>
    </MainContainer>
  );
};

export default Main;
