import { Box } from "@mui/material"
import '../css/Socail.css'

import {
    GitHub,
    LinkedIn,
    Instagram,
    Facebook
} from '@mui/icons-material'

export default function Social() {
    

    return (
        <>
            <Box className="social">
                <ul>
                    <li>
                        <a target="_blink" href="https://github.com/WaiLinnHtetAung">
                            <GitHub></GitHub>
                        </a>
                    </li>
                    <li>
                        <a target="_blink" href="https://www.linkedin.com/in/wai-linn-htet-aung-3449441a0/">
                            <LinkedIn></LinkedIn>
                        </a>
                    </li>
                    <li>
                        <a target="_blink" href="https://www.instagram.com/wailinhtetaun/">
                            <Instagram></Instagram>
                        </a>
                    </li><li>
                        <a target="_blink" href="https://www.facebook.com/wailin.htetaung.79">
                            <Facebook></Facebook>
                        </a>
                    </li>
                </ul>
            </Box>
        </>
    )
}