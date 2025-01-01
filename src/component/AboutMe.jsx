
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
                        Hello! My name is Wai Linn Htet Aung, and I’m a passionate fullstack developer. I specialize in creating impactful websites and applications that improve people’s experiences on the internet.

I began my journey in web development in April 2022, and since then, I’ve been dedicated to mastering both frontend and backend technologies. With a strong foundation in backend services and server deployment, I strive to deliver efficient and reliable digital solutions.


                        </p>
                        <p>
                        Currently, I work as a fullstack developer, focusing on building accessible and user-friendly products for diverse clients. I’m driven by the idea of crafting tools that not only look great but also make people’s work easier and more productive.
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