
import { Box } from "@mui/material"
import { GitHub, Launch } from "@mui/icons-material"

import mha from '../assets/images/work/mha.png'
import greenit from '../assets/images/work/greenit.png'
import rihea from '../assets/images/work/rihea.png'
import lifeline from '../assets/images/work/lifeline.png'
import pkf from '../assets/images/work/pkf.png'
import hitachi from '../assets/images/work/hitachi.png'

import '../css/work.css'

export default function Work() {
    return (
        <>
            <Box className="work" id="Work">
                <Box className="header">
                    <h2>MY WORKS</h2>
                    <div className="divider"></div>
                </Box>
                <Box className="work-content">
                    <Box className="project">
                        <div className="img">
                            <img src={mha} alt="" />
                        </div>
                        <h2>Myanmar Hotelier Association</h2>
                        <p>
                            MHA website is developed using Vuejs framework for frontend and Laravel, MySQL for backend and data store. MHA website contains all hotels in Myanmar and places to explore.
                        </p>
                        <div className="link">
                            <div className="git">
                                <a href="https://github.com/WaiLinnHtetAung/myanmar-hotelier" target="_blink"><GitHub /></a>
                                <a href="https://github.com/WaiLinnHtetAung/mha_backend" target="_blink"><GitHub /></a>
                            </div>
                            <div className="site-link">
                                <a href="https://mha.itgatewaymm.com/" target="_blink"><Launch /></a>
                            </div>
                        </div>
                    </Box>
                    <Box className="project">
                        <div className="img">
                            <img src={greenit} alt="" />
                        </div>
                        <h2>Green IT</h2>
                        <p>
                            GreenIT website is developed using Vuejs framework for frontend and Laravel, MySQL for backend and data store. GreenIT is a SI Company and provide Server related and IT related Servies.
                        </p>
                        <div className="link">
                            <div className="git">
                                <a href="https://github.com/WaiLinnHtetAung/GreenIT" target="_blink"><GitHub /></a>
                                <a href="https://github.com/WaiLinnHtetAung/GreenIT_backend" target="_blink"><GitHub /></a>
                            </div>
                            <div className="site-link">
                                <a href="https://greenitmm.com" target="_blink"><Launch /></a>
                            </div>
                        </div>
                    </Box>
                    <Box className="project">
                        <div className="img">
                            <img src={rihea} alt="" />
                        </div>
                        <h2>RIHEA EDUCATION</h2>
                        <p>
                            RIHEA website is developed using Vuejs framework for frontend and Laravel, MySQL for backend and data store. RIHEA website is about educational for GED and IGCSE Classes.
                        </p>
                        <div className="link">
                            <div className="git">
                                <a href="https://github.com/WaiLinnHtetAung/miga-project" target="_blink"><GitHub /></a>
                                <a href="https://github.com/WaiLinnHtetAung/backend-miga-pj" target="_blink"><GitHub /></a>
                            </div>
                            <div className="site-link">
                                <a href="https://www.rihea.education/" target="_blink"><Launch /></a>
                            </div>
                        </div>
                    </Box>
                    <Box className="project">
                        <div className="img">
                            <img src={lifeline} alt="" />
                        </div>
                        <h2>Lifeline Myanmar</h2>
                        <p>
                            Lifeline Myanmar is developed using Vuejs framework for frontend. Lifeline is pharmaceuticals company.
                        </p>
                        <div className="link">
                            <div className="git">
                                <a href="https://github.com/WaiLinnHtetAung/lifeline" target="_blink"><GitHub /></a>
                            </div>
                            <div className="site-link">
                                <a href="http://demo.lifelinemyanmar.com/" target="_blink"><Launch /></a>
                            </div>
                        </div>
                    </Box>
                    <Box className="project">
                        <div className="img">
                            <img src={pkf} alt="" />
                        </div>
                        <h2>PKF Myanmar</h2>
                        <p>
                            PKF Myanmar is developed using Vuejs framework for frontend. 
                        </p>
                        <div className="link">
                            <div className="git">
                                <a href="https://github.com/WaiLinnHtetAung/pkf" target="_blink"><GitHub /></a>
                            </div>
                            <div className="site-link">
                                <a href="http://pkf.itgatewaymm.com/" target="_blink"><Launch /></a>
                            </div>
                        </div>
                    </Box>
                    <Box className="project">
                        <div className="img">
                            <img src={hitachi} alt="" />
                        </div>
                        <h2>Hitachi Soe</h2>
                        <p>
                            Hitachi Soe is developed using Vuejs framework for frontend. Hitachi Soe is a Company of Transformers.
                        </p>
                        <div className="link">
                            <div className="git">
                                <a href="https://github.com/WaiLinnHtetAung/hitachi-soe" target="_blink"><GitHub /></a>
                            </div>
                            <div className="site-link">
                                <a href="https://hitachi-soe.learn-zones.com/" target="_blink"><Launch /></a>
                            </div>
                        </div>
                    </Box>
                </Box>
            </Box>
        </>
    )
}