import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Github } from "./SVGS";

/*________________________________________________________________*/

const Box = styled(motion.li)`
  width: 16rem;
  height: 40vh;
  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  padding: 1.5rem 2rem;
  margin-right: 8rem;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  border: 1px solid ${(props) => props.theme.body};
  transition: 0.3s ease;
  border-radius: 0 50px;
  /*________________________________*/
  &:hover {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    border: 1px solid ${(props) => props.theme.text};
  }
  /*________________________________*/
  & h2 {
    font-size: calc(1em + 0.5vw);
  }
  /*________________________________*/
  & p {
    font-size: calc(0.8em + 0.3vw);
    font-family: "Karla", sans-serif;
    font-weight: 500;
  }
  /*________________________________*/
  & .tags {
    border-top: 2px solid ${(props) => props.theme.body};
    padding-top: 0.5rem;
    display: flex;
    flex-flow: wrap;
  }
  /*________________________________*/
  &:hover .tags {
    border-top: 2px solid ${(props) => props.theme.text};
  }
  /*________________________________*/
  & .tags span {
    margin-right: 1rem;
    font-size: calc(0.8em + 0.3vw);
  }
  /*________________________________*/
  & footer {
    display: flex;
    justify-content: space-between;
  }
  /*________________________________*/
  & .link {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    text-decoration: none;
    padding: 0.5rem calc(2rem + 2vw);
    border-radius: 0 0 0 50px;
    font-size: calc(1em + 0.5vw);
    transition: 0.3s;
  }
  & .link:hover {
    transform:scale(1.07)
  }
  /*________________________________*/
  &:hover .link {
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
  }
  /*________________________________*/
  & .git > * {
    transition: 0.3s;
  }
  & .git:hover > * {
    width:33px
  }
  /*________________________________*/
  &:hover .git > * {
    fill: ${(props) => props.theme.text};
  }
  /*________________________________*/
  @media (max-width: 767px) {
    margin-right: 4rem;
    height: 35vh;
    width: 13rem;
  }
`;
/*________________________________________________________________*/
// framer-motion configuration
const item = {
  hidden: { scale: 0 },
  show: { scale: 1, transition: { type: "spring", duration: 0.5 } },
};
/*________________________________________________________________*/

const Card = (props) => {
  return (
    <Box variants={item}>
      <h2>{props.data.name}</h2>
      <p>{props.data.description}</p>

      <div className="tags">
        {props.data.tags.map((t, idx) => (
          <span key={idx}>#{t}</span>
        ))}
      </div>

      <footer>
        <NavLink
          className={"link"}
          target={"_blank"}
          to={{ pathname: `${props.data.demo}` }}
        >
          Visit
        </NavLink>

        <NavLink
          className={"git"}
          target={"_blank"}
          to={{ pathname: `${props.data.github}` }}
        >
          <Github width={30} />
        </NavLink>
      </footer>
    </Box>
  );
};

export default Card;
