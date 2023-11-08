import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

import {
  Home as HomeIcon,
  AccountCircle as AboutIcon,
  Code,
  Work,
  IntegrationInstructions as Project,
  ContactMail,
  Visibility,
} from "@mui/icons-material";

import { Link } from "react-scroll";
import "../css/drawer.css";

export default function MainDrawer({ showDrawer, toggleDrawer }) {
  return (
    <>
      <Drawer anchor="left" open={showDrawer} onClose={toggleDrawer}>
        <Box sx={{ width: 220 }}>
          <List>
            <Link to={"Home"} onClick={toggleDrawer}>
              <ListItem>
                <ListItemButton>
                  <ListItemIcon>
                    <HomeIcon sx={{ color: "white" }} />
                  </ListItemIcon>

                  <ListItemText primary="Home" sx={{ color: "white" }} />
                </ListItemButton>
              </ListItem>
            </Link>

            <Link to={"About"} onClick={toggleDrawer}>
              <ListItem>
                <ListItemButton>
                  <ListItemIcon>
                    <AboutIcon sx={{ color: "white" }} />
                  </ListItemIcon>

                  <ListItemText primary="About" sx={{ color: "white" }} />
                </ListItemButton>
              </ListItem>
            </Link>

            <Link to={"Skill"} onClick={toggleDrawer}>
              <ListItem>
                <ListItemButton>
                  <ListItemIcon>
                    <Code sx={{ color: "white" }} />
                  </ListItemIcon>

                  <ListItemText primary="Skill" sx={{ color: "white" }} />
                </ListItemButton>
              </ListItem>
            </Link>

            <Link to={"Experience"} onClick={toggleDrawer}>
              <ListItem>
                <ListItemButton>
                  <ListItemIcon>
                    <Work sx={{ color: "white" }} />
                  </ListItemIcon>

                  <ListItemText primary="Experience" sx={{ color: "white" }} />
                </ListItemButton>
              </ListItem>
            </Link>

            <Link to={"Work"} onClick={toggleDrawer}>
              <ListItem>
                <ListItemButton>
                  <ListItemIcon>
                    <Project sx={{ color: "white" }} />
                  </ListItemIcon>

                  <ListItemText primary="Work" sx={{ color: "white" }} />
                </ListItemButton>
              </ListItem>
            </Link>

            <Link to={"Contact"} onClick={toggleDrawer}>
              <ListItem>
                <ListItemButton>
                  <ListItemIcon>
                    <ContactMail sx={{ color: "white" }} />
                  </ListItemIcon>

                  <ListItemText primary="Contact" sx={{ color: "white" }} />
                </ListItemButton>
              </ListItem>
            </Link>

            <a
              href="../../public/cv.pdf"
              style={{ textDecoration: "none" }}
              download
              target="_blink"
              onClick={toggleDrawer}
            >
              <ListItem>
                <ListItemButton>
                  <ListItemIcon>
                    <Visibility sx={{ color: "white" }} />
                  </ListItemIcon>

                  <ListItemText primary="Resume" sx={{ color: "white" }} />
                </ListItemButton>
              </ListItem>
            </a>
          </List>
        </Box>
      </Drawer>
    </>
  );
}
