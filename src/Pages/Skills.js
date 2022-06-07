import React from "react";
import ParticlesBG from "../Components/ParticlesBG";
import styled, { ThemeProvider } from "styled-components";
import Logo from "../Components/Logo";
import Power from "../Components/Power";
import Social from "../Components/Social";
import { Develope } from "../Components/SVGS";
import { LightTheme } from "../Components/Themes";
import PageTitle from "../Components/PageTitle";
import { motion } from "framer-motion";

/*________________________________________________________________*/
const Box = styled(motion.div)`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.body};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
/*________________________________________________________________*/
const Skill = styled.div`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  border: 2px solid ${(props) => props.theme.text};
  width: 35vw;
  height: 60vh;
  padding: 2rem;
  z-index: 3;
  cursor: pointer;
  line-height: 1.5;
  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  transition: 0.3s;
  /*_____________________________*/
  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
  /*_____________________________*/
  @media screen {
    width: 50vw;
    height: max-content;
  }
`;
/*________________________________________________________________*/
const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);
  /*_____________________________*/
  & > * {
    transition: 0.3s;
  }
  /*_____________________________*/
  ${Skill}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }
  /*_____________________________*/
  & > :first-child {
    margin-right: 1rem;
  }
`;
/*________________________________________________________________*/
const Description = styled.div`
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;
  strong {
    margin-bottom: 1rem;
  }
  ul,
  p {
    margin-left: 2rem;
  }
`;
/*________________________________________________________________*/

const Skills = (props) => {
  return (
    <ThemeProvider theme={LightTheme}>
      <Box
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Logo />
        <Power />
        <Social isPhone={props.isPhone} />

        <ParticlesBG />

        <Skill>
          <Title>
            <Develope width={40} />
            Frontend Developer
          </Title>

          <Description>
            I value business or brand for which i'm creating, thus i enjoy
            bringing new ideas to life.
          </Description>

          <Description>
            <strong>SKILLS</strong>
            <p>
              Html, Css, Js, React, Redux, Sass, Bootstrap, NextJs, Firebase
              etc.
            </p>
          </Description>

          <Description>
            <strong>TOOLS</strong>
            <p>VScode, Github, Codepen etc.</p>
          </Description>
        </Skill>

        <PageTitle text="SKILLS" top="80%" right="20%" />
      </Box>
    </ThemeProvider>
  );
};

export default Skills;
