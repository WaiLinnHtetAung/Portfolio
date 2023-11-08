import * as React from "react";
import { AppBar, Box, Toolbar, Avatar, IconButton } from "@mui/material";
import "../css/nav.css";
import { Link } from "react-scroll";
import { Menu } from "@mui/icons-material";

import logo from "../assets/images/logo.png";

export default function Nav({ toggleDrawer }) {
  const menu = ["Home", "About", "Skill", "Experience", "Work", "Contact"];

  return (
    <>
      <AppBar
        style={{ background: "#0a192f" }}
        className="app-bar"
        position="sticky"
      >
        <Toolbar className="menu-bar">
          <Box>
            <Avatar src={logo} />
          </Box>
          <Box className="menu">
            {menu.map((m) => {
              return (
                <Link
                  key={m}
                  style={{ color: "#fff", cursor: "pointer" }}
                  className={m}
                  activeClass="active"
                  to={m}
                  spy={true}
                  smooth={true}
                  offset={m === "Contact" ? -200 : -130}
                  duration={100}
                >
                  {m}
                </Link>
              );
            })}

            <a
              className="resume"
              href="../../public/cv.pdf"
              download
              target="_blink"
            >
              Resume
            </a>
          </Box>
          <Box className="mb-menu">
            <IconButton size="large" edge="end" onClick={toggleDrawer}>
              <Menu sx={{ color: "white" }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
}
