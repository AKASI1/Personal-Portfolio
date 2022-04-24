import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import me from "../assets/Images/profile-img.png";
/*________________________________________________________________*/

const Box = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 65vw;
  height: 55vh;
  display: flex;

  background: linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      bottom,
    linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      top;
  background-repeat: no-repeat;
  background-size: 100% 2px;
  border-left: 2px solid ${(props) => props.theme.body};
  border-right: 2px solid ${(props) => props.theme.text};

  z-index: 1;
  /*________________________________*/
  @media (max-width: 767px) {
    height: 70vh;
    width: 70vw;
    flex-direction: column;
    background: linear-gradient(rgb(252, 246, 244) 50%, rgb(0, 0, 0) 50%) 0px
        0px / 2px 100% no-repeat,
      linear-gradient(rgb(252, 246, 244) 50%, rgb(0, 0, 0) 50%) 100% 0px;
    border-style: solid none;
    border-top: 2px solid rgb(252, 246, 244);
    border-bottom: 2px solid rgb(0, 0, 0);
    background-repeat: no-repeat;
    background-size: 2px 100%;
  }
`;
/*________________________________________________________________*/
const SubBox = styled(motion.div)`
  width: 50%;
  position: relative;
  display: flex;
  /*________________________________*/
  & img {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0);
    width: 100%;
    height: auto;
  }
  /*________________________________*/
  & .text {
    font-size: calc(1em + 1.5vw);
    color: ${(props) => props.theme.body};
    padding: 2rem;
    cursor: pointer;
    display: flex;
    flex-flow: column;
    justify-content: space-evenly;
  }
  /*________________________________*/
  & .text * {
    margin: 0;
  }
  /*________________________________*/
  & .text h6 {
    color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
    font-size: calc(0.5rem + 1.5vw);
    font-weight: 300;
  }
  /*________________________________*/
  @media (max-width: 767px) {
    width: 100%;
    height: 50%;
    & img {
      width: 90%;
    }
  }
`;
/*________________________________________________________________*/

const Intro = (props) => {
  return (
    <Box
      initial={props.isPhone ? { width: 0 } : { height: 0 }}
      animate={props.isPhone ? { width: "70vw" } : { height: "55vh" }}
      exit={props.isPhone ? { width: 0 } : { height: 0 }}
      transition={{ type: "spring", duration: 2, delay: 1 }}
    >
      <SubBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="text">
          <h1>Hi,</h1>
          <h3>I'm Ahmed Khaled.</h3>
          <h6>I design and Code simple yet beautiful websites.</h6>
        </div>
      </SubBox>

      <SubBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <img src={me} alt="Profile" />
      </SubBox>
    </Box>
  );
};

export default Intro;
