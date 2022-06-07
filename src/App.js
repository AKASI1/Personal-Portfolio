import React, { Suspense, useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { LightTheme } from "./Components/Themes";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

// Components
import SoundBar from "./Components/SoundBar";
import Loading from "./Components/Loading";
const Main = React.lazy(() => import("./Pages/Main"));
const About = React.lazy(() => import("./Pages/About"));
const Skills = React.lazy(() => import("./Pages/Skills"));
const Work = React.lazy(() => import("./Pages/Work"));
const Map = React.lazy(() => import("./Pages/Map"));
/*__________________________________________________________________________________________________*/

function App() {
  const location = useLocation();
  const [isPhone, setPhone] = useState();
  useEffect(() => {
    setPhone(window.matchMedia("(max-width: 768px)").matches);
  }, []);

  return (
    <ThemeProvider theme={LightTheme}>
      <SoundBar />

      {/* For framer motion animation on page change */}
      <Suspense fallback={<Loading />}>
        <AnimatePresence exitBeforeEnter>
          <Switch location={location} key={location.pathname}>
            <Route exact path={"/"}>
              <Main isPhone={+isPhone} />
            </Route>

            <Route exact path={"/About"}>
              <About isPhone={+isPhone} />
            </Route>

            <Route exact path={"/Skills"}>
              <Skills isPhone={+isPhone} />
            </Route>

            <Route exact path={"/Work"}>
              <Work isPhone={+isPhone} />
            </Route>

            <Route exact path={"/Map"}>
              <Map isPhone={+isPhone} />
            </Route>
          </Switch>
        </AnimatePresence>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
