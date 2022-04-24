import React from "react";
import styled from "styled-components";
// Particles
import Particles from "react-particles-js";
import configDark from "../config/particlesjs-config.json";
import configLight from "../config/particlesjs-config-light.json";

/*________________________________________________________________*/
const Box = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
/*________________________________________________________________*/

const ParticlesBG = (props) => {
  return (
    <Box>
      <Particles
        style={{ position: "absolute", top: 0 }}
        params={props.theme === "dark" ? configDark : configLight}
      />
    </Box>
  );
};

export default ParticlesBG;
