import { Box, Typography } from "@mui/material";
import "../css/about.css";

export default function About() {
  return (
    <>
      <Box className="about" id="Home">
        <Typography className="my-name">Hi, my name is </Typography>
        <h2>WAI LINN HTET AUNG</h2>
        <h3>Web Developer</h3>
        <Typography className="text">
          I'm a software engineer. I specialize in developing websites both
          frontend and backend.Currently I'm focused on building websites using
          React & NodeJs.
        </Typography>
      </Box>
    </>
  );
}
