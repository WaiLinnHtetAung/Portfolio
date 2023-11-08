
import { Box } from "@mui/material"

import "../css/aboutMe.css"
import Me from '../assets/images/me.jpg'

export default function AboutMe() {

    return(
        <>
            <Box className="aboutMe" id="About">
                <Box className="header">
                    <h2>ABOUT ME</h2>
                    <div className="divider"></div>
                </Box>
                <Box className="content">
                    <Box className="info">
                        <p>
                            Hello! My name is Wai Linn Htet Aung. I am a fullstack developer. I enjoy crating things that help poeple on the internet. My interested in web development started back in 2022 April. Before I started web developing, I studied Computer Networking and finished CCNA. When I change my career from Network Engineer to Web developer, the technologies I studied helps me a lot to understand backend service and server deployment.
                        </p>
                        <p>
                            From now on, I'm working as a junior fullstack developer and I love building websites that attract and help popple workload. My main focus these days is building accessible, inclusive products and digital experiences for a variety of clients.
                        </p>
                    </Box>

                    <Box className="image">
                        <img src={Me} alt="" />
                    </Box>
                </Box>
            </Box>
        </>
    )
}