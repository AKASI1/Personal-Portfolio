import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { PowerBtn } from "./SVGS";
/*________________________________________________________________*/
const PowerButton = styled.button`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);
  background-color: #fcf6f4;
  border-radius: 50%;
  padding: 0.3rem;
  height: 2.5rem;
  width: 2.5rem;
  border: 1px solid #000;
  z-index: 3;
  cursor: pointer;
  transition: 0.3s;
  /*_____________________________*/
  &:hover {
    background-color: rgba(0, 255, 0, 0.4);
    box-shadow: 0 0 8px 6px rgba(0, 255, 0, 0.2);
  }
  /*_____________________________*/
  @media (max-width: 767px) {
    width: 2rem;
    height: 2rem;
  }
`;
/*________________________________________________________________*/

const Power = () => {
  return (
    <PowerButton>
      <NavLink to={"/"}>
        <PowerBtn />
      </NavLink>
    </PowerButton>
  );
};

export default Power;
