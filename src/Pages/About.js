import React from "react";
import ParticlesBG from "../Components/ParticlesBG";
import styled, { ThemeProvider, keyframes } from "styled-components";
import Logo from "../Components/Logo";
import Power from "../Components/Power";
import Social from "../Components/Social";
import { DarkTheme } from "../Components/Themes";
import astronut from "../assets/Images/spaceman.png";
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
const float = keyframes`
0%{
  transform:translateY(-10px)
}
50%{
  transform:translate(15px, 15px)
}
100%{
  transform:translateY(-10px)
}
`;
/*_____________________________*/
const Spaceman = styled(motion.img)`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 20vw;
  animation: ${float} 4s ease infinite;
`;
/*________________________________________________________________*/
const Main = styled(motion.div)`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);

  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: "Ubuntu Mono", monospace;
  font-style: italic;
  /*_____________________________*/
  @media (max-width: 767px) {
    width: 50vw;
    height: auto;
    top: 56.5%;
    left: 50%;
    transform: translate(-50%, -50%);
    backdrop-filter: none;
  }
`;
/*________________________________________________________________*/

const About = (props) => {
  console.log("about")
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Logo theme="dark" />
        <Power />
        <Social isPhone={+props.isPhone} theme={"dark"} />

        <Spaceman
          initial={{ top: "100vh", right: "-30%" }}
          animate={{ top: "10%", right: "5%" }}
          transition={{ duration: 3 }}
          src={astronut}
          alt={Spaceman}
        />

        <Main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          I'm a front-end developer located in Egypt. I love to create simple
          yet beautiful websites with great user experience.
          <br /> <br />
          I'm interested in the whole Web full stack Like trying new things and
          building great projects. I'm an independent freelancer. I love
          knowledge, studing and read books.
          <br /> <br />I believe everything is an Art when you put your
          consciousness in it. You can connect with me via social links.
        </Main>

        <ParticlesBG theme={"dark"} />

        <PageTitle text="ABOUT" top="10%" left="5%" />
      </Box>
    </ThemeProvider>
  );
};

export default About;
