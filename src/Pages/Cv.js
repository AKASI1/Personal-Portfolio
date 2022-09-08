import styled from "styled-components";
import img from "../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg";
import Logo from "../Components/Logo";
import Social from "../Components/Social";
import Power from "../Components/Power";
import PageTitle from "../Components/PageTitle";
import { motion } from "framer-motion";
import CV from "../assets/Images/AhmedKhaled-cv.jpg";
import { NavLink } from "react-router-dom";

/*________________________________________________________________*/
const MainContainer = styled(motion.div)`
  width: 100vw;
  /* height: 100vh; */
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
`;
/*________________________________________________________________*/
const Container = styled.div`
  background-color: ${(props) => `rgba(${props.theme.bodyRgba},0.8)`};
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .cv {
    margin: 100px 0 20px;
  }
`;
/*________________________________________________________________*/
// Framer-motion config
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};
/*________________________________________________________________*/

const Cv = (props) => {
  return (
    <MainContainer
      variants={container}
      initial="hidden"
      animate="show"
      exit={{
        opacity: 0,
        transition: { duration: 0.5 },
      }}
    >
      <Container>
        <Logo />
        <Power />
        <Social isPhone={+props.isPhone} />

        <NavLink
          to={
            "https://drive.google.com/file/d/17XJ0U2WZxdGJLf3UxQnCy-PKFU4HK8he/view?usp=sharing"
          }
          target={"_blank"}
        >
          <img src={CV} alt="cv" className="cv" />
        </NavLink>

        <PageTitle text="BLOG" top="5rem" left="5rem" />
      </Container>
    </MainContainer>
  );
};

export default Cv;
