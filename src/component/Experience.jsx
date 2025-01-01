
import { Box } from "@mui/material";

import '../css/experience.css'
import { useState } from "react";

function VerticalTab(props) {

    function btnClick(id) {
        setActiveTabId(id);
    }
}

export default function Experience() {
    const experiences = [
        {
            company: "Host Myanmar Company Limited",
            company_short: 'HMM',
            period: "August 2022 - April 2023",
            position: "Junior Backend Developer",
            details: [
                `Developed and maintained web applications using PHP, Laravel, Vue.js, and other web technologies, meeting project requirements and delivering high-quality code on time.`,
                `Implemented front-end features and functionality using HTML, CSS, JavaScript, and jQuery.`,
                `Assisted in database design, optimization, and performance tuning to enhance application performance.`,
                `Resolved complex technical issues and provided timely solutions to ensure smooth project delivery.`,
                `Work alongside senior developers and complete tasks assigned from senior developers`
            ]
        },
        {
            company: "itGateway Technology Company",
            company_short: 'itGateway',
            period: "April 2023 - present",
            position: "Junior Fullstack Developer",
            details: [
                `Deliver high-quality, robust productin code for a diverse array of projects for clients.`,
                `Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders`,
                `Complete daily tasks in time and create technology contents for sharing`,
                `Develop fullstack website like ecommerce, blogs, and database structures`,
                'Develop API to connect frontend and backend',
                `Deploy web applications to production environments and integrate using CI/CD pipeline`,
            ]
        },
    ];

    const [activeTabId, setActiveTabId] = useState(0);

    const clicked = (id) => {
        setActiveTabId(id);
    }

    return (
        <>
            <Box className="experience" id="Experience">
                <Box className="header">
                    <h2>EXPERIENCES</h2>
                    <div className="divider"></div>
                </Box>
                <Box className="section__Jobs-container">
                    <Box className="exp-container">
                        <Box className="tab">
                            <div className="section__Jobs-styledTab">
                                <ul className="section__Jobs-styledTabList">
                                    {
                                        experiences.map((exp, index) => {
                                            return(
                                                <li key={index} style={{ listStyle: "none", textAlign: "left" }}>
                                                    <button
                                                        className="section__Jobs-buttonCompany"
                                                        onClick={() => clicked(index)}
                                                        style={
                                                        activeTabId === index
                                                            ? { color: "#64ffda", borderLeft: '4px solid #64ffda' }
                                                            : { color: "#8892b0", borderLeft: '4px solid #8892b0' }
                                                        }
                                                    >
                                                        {exp.company_short}
                                                    </button>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </Box>

                        <Box className="content">
                            {
                                experiences.map((exp, index) => {
                                    return (
                                        <div className="section__Jobs-styledContent"
                                            style={
                                                activeTabId === index
                                                ? { display: "block" }
                                                : { display: "none" }
                                            }

                                            key={index}
                                        >
                                            <h4>{exp.position} <span style={{color: '#64ffda'}}>@ {exp.company}</span> </h4>
                                            <h5>{exp.period}</h5>
                                            {exp.details.map(detail => (
                                                <p className="section__Jobs-detail" style={{position: 'relative'}}>{detail}</p>
                                            ))}
                                        </div>
                                    )
                                })
                            }
                        </Box>
                    </Box>
                </Box>

            </Box>
        </>
    )
}