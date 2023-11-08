import { Box } from "@mui/material"

import '../css/contact.css'

export default function Contact() {
    
    return (
        <>
            <Box className="contact" id="Contact">
                <h6>Contact Me</h6>
                <h2>Get In Touch</h2>

                <Box className="contact-info">
                    If you want to say hello to me, feel free and just send me an email. I am here to help all of your needs.
                </Box>

                <a href="mailto:wailinhtetaung007@gmail.com">Say Hello</a>

                <p>Developed by Wai Linn Htet Aung</p>
            </Box>
            
        </>
    )
}