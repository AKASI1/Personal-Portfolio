import React, { useRef, useState, useEffect, useCallback } from "react";
import styled, { keyframes } from "styled-components";
import music from "../assets/audio/CAPITAL BRA X JAMULE - AVENTADOR (prod. by Beatzarre & Djorkaeff Phil the Beat).mp3";

/*________________________________________________________________*/
const Box = styled.div`
  display: flex;
  cursor: pointer;
  position: fixed;
  left: 9.5rem;
  top: 2.8rem;
  z-index: 10;
  /*_____________________________*/
  @media (max-width: 767px) {
    left: 1rem;
    top: 10rem;
  }
  /*_____________________________*/
  & > *:nth-child(1) {
    animation-delay: 0.2s;
  }
  & > *:nth-child(2) {
    animation-delay: 0.3s;
  }
  & > *:nth-child(3) {
    animation-delay: 0.4s;
  }
  & > *:nth-child(4) {
    animation-delay: 0.5s;
  }
  & > *:nth-child(5) {
    animation-delay: 0.8s;
  }
`;
/*________________________________________________________________*/
const on = keyframes`
  0%{
    transform:scaleY(1)
  }
  50%{
    transform:scaleY(2)
  }
  100%{
    transform:scaleY(1)
  }`;
/*_____________________________*/
const Line = styled.span`
  width: 2px;
  height: 1rem;
  background-color: ${(props) => props.theme.text};
  border: 1px solid ${(props) => props.theme.body};
  margin: 0 0.1rem;
  animation: ${on} 1s ease infinite;
  animation-play-state: ${(props) => (props.isClicked ? "running" : "paused")};
  @media (max-width: 767px) {
    width: 1px;
    height: 0.5rem;
  }
`;
/*________________________________________________________________*/

const SoundBar = () => {
  const audio = useRef();
  const [clicked, setClicked] = useState(false);

  const handleKeyPress = useCallback(
    (event) => {
      if (event.key === " ") {
        setClicked(!clicked);
        if (!clicked) {
          audio.current.play();
        } else {
          audio.current.pause();
        }
      }
    },
    [clicked]
  );

  useEffect(() => {
    document.addEventListener("keyup", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [handleKeyPress]);

  const handleClick = () => {
    setClicked(!clicked);
    if (!clicked) {
      audio.current.play();
    } else {
      audio.current.pause();
    }
  };

  return (
    <Box onClick={handleClick}>
      <Line isClicked={+clicked} />
      <Line isClicked={+clicked} />
      <Line isClicked={+clicked} />
      <Line isClicked={+clicked} />
      <Line isClicked={+clicked} />
      <audio ref={audio} src={music} />
    </Box>
  );
};

export default SoundBar;
