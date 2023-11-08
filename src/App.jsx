import Nav from "./component/Nav";
import About from "./component/About";
import Social from "./component/Social";
import AboutMe from "./component/AboutMe";
import Experience from "./component/Experience";
import Work from "./component/Work";
import Contact from "./component/Contact";
import Email from "./component/Email";

import { Box } from "@mui/material";
import Skill from "./component/Skill";

import './css/main.css'
import MainDrawer from "./component/MainDrawer";
import { useState } from "react";


export default function App() {

  const [showDrawer, setShowDrawer] = useState(false);

  const toggleDrawer = () => {
    setShowDrawer(!showDrawer);
  }

  return(
    <>
      <Box style={{background: '#0a192f'}}>
        <Nav toggleDrawer={toggleDrawer} />
        <MainDrawer showDrawer={showDrawer} toggleDrawer={toggleDrawer} />
        <About />
        <AboutMe />
        <Skill />
        <Experience />
        <Work />
        <Contact />
        <Social />
        <Email />
      </Box>
    </>
  )
}