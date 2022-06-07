import React, { useRef, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { motion } from "framer-motion";
import Logo from "../Components/Logo";
import Power from "../Components/Power";
import Social from "../Components/Social";
import { DarkTheme } from "../Components/Themes";
import { WorkData } from "../data/WorkData";
import Card from "../Components/Card";
import { YinYang } from "../Components/SVGS";
import PageTitle from "../Components/PageTitle";

/*________________________________________________________________*/
const Box = styled(motion.div)`
  height: 400vh;
  background-color: ${(props) => props.theme.body};
  position: relative;
  display: flex;
  align-items: center;
`;
/*________________________________________________________________*/
const Rotate = styled.div`
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: ${(props) => (props.isPhone ? "50px" : "80px")};
  height: ${(props) => (props.isPhone ? "50px" : "80px")};
  z-index: 1;
`;
/*________________________________________________________________*/
const Main = styled(motion.ul)`
  position: fixed;
  top: 12rem;
  left: calc(10rem + 15vw);
  height: 40vh;
  display: flex;
  color: white;
  /*_____________________________*/
  @media (max-width: 767px) {
    top: 30%;
    left: calc(1rem + 15vw);
  }
`;
/*________________________________________________________________*/
// framer-motion configuration
const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.5, duration: 0.5 } },
};
/*_______________________________________________________________________________*/

const Work = (props) => {
  const main = useRef();
  const ball = useRef();

  useEffect(() => {
    const rotate = () => {
      main.current.style.transform = `translateX(${-window.pageYOffset}px)`;
      ball.current.style.transform = `rotate(${window.pageYOffset}deg)`;
    };
    window.addEventListener("scroll", rotate);
    return () => window.removeEventListener("scroll", rotate);
  }, []);

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
        <Social isPhone={+props.isPhone} theme="dark" />

        <Rotate isPhone={+props.isPhone} ref={ball}>
          <YinYang
            width={props.isPhone ? 50 : 80}
            height={props.isPhone ? 50 : 80}
            fill={DarkTheme.text}
          />
        </Rotate>

        <Main ref={main} variants={container} initial="hidden" animate="show">
          {WorkData.map((d) => (
            <Card key={d.id} data={d}></Card>
          ))}
        </Main>

        <PageTitle text="WORK" top="10%" right="20%" />
      </Box>
    </ThemeProvider>
  );
};

export default Work;
