import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';

import Html from '../assets/images/html.png'
import css from '../assets/images/css.png'
import bs from '../assets/images/bs.png'
import jquery from '../assets/images/jquery.png'
import react from '../assets/images/react.png'
import tailwind from '../assets/images/tailwind.png'
import typescript from '../assets/images/typescript.png'
import vue from '../assets/images/vue.png'
import js from '../assets/images/js.png'
import php from '../assets/images/php.png'
import laravel from '../assets/images/laravel.png'
import node from '../assets/images/node.png'
import mysql from '../assets/images/mysql.png'
import mongo from '../assets/images/mongo.png'
import aws from '../assets/images/aws.png'
import apache from '../assets/images/apache.png'
import nginx from '../assets/images/nginx.png'
import git from '../assets/images/git.png'
import github from '../assets/images/github.png'

import { 
    Code, Aod, Storage
} from '@mui/icons-material';

import { Box } from '@mui/material';

import '../css/main.css'
import '../css/skill.css'


export default function CustomizedTimeline() {
  return (
    <>
        <Box className="skill" id="Skill">
            <Box className="header">
                <h2>SKILLS</h2>
                <div className="divider"></div>
            </Box>

            <Timeline position="alternate" className='timeline'>
                <TimelineItem>
                    <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="body2"
                    className='year'
                    >
                    2022
                    </TimelineOppositeContent>

                    <TimelineSeparator className='separator'>
                        <TimelineConnector />
                            <TimelineDot color='primary'>
                                <LaptopMacIcon />
                            </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>

                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Box className="skillBox">
                            <div className="skill-header">
                                <h2>Frontend Skills</h2>
                            </div>
                            <div className="skill-icon">
                                <img src={Html} alt="" />
                                <img src={css} alt="" />
                                <img src={bs} alt="" />
                                <img src={js} alt="" />
                                <img src={jquery} alt="" />
                                <img src={vue} alt="" />
                                <img src={react} alt="" />
                                <img src={tailwind} alt="" />
                                <img src={typescript} className='padding-image' alt="" />
                            </div>
                        </Box>
                    </TimelineContent>

                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="text.secondary"
                    className='year'
                    >
                    2022
                    </TimelineOppositeContent>

                    <TimelineSeparator className='separator'>
                        <TimelineConnector />
                            <TimelineDot color="success">
                                <Code />
                            </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>

                    <TimelineContent sx={{ py: '12px', px: 2 }} className='leftCard' >
                        <Box className="skillBox">
                            <div className="skill-header">
                                <h2>Backend Skills</h2>
                            </div>
                            <div className="skill-icon">
                                <img style={{marginLeft: '15px'}} src={php} alt="" />
                                <img style={{marginLeft: '15px'}} src={laravel} alt="" />
                                <img style={{marginLeft: '15px'}} src={node} alt="" />
                            </div>
                        </Box>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    align="right"
                    variant="body2"
                    className='year'
                    >
                    2022
                    </TimelineOppositeContent>

                    <TimelineSeparator className='separator'>
                        <TimelineConnector />
                            <TimelineDot color='warning'>
                                <Aod />
                            </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>

                    <TimelineContent sx={{ py: '12px', px: 2 }}>
                        <Box className="skillBox">
                            <div className="skill-header">
                                <h2>Database Skills</h2>
                            </div>
                            <div className="skill-icon">
                                <img style={{marginLeft: '25px'}} src={mysql} alt="" />
                                <img style={{marginLeft: '25px'}} src={mongo} alt="" />
                            </div>
                        </Box>
                    </TimelineContent>

                </TimelineItem>

                <TimelineItem>
                    <TimelineOppositeContent
                    sx={{ m: 'auto 0' }}
                    variant="body2"
                    color="text.secondary"
                    className='year'
                    >
                    2023
                    </TimelineOppositeContent>

                    <TimelineSeparator className='separator'>
                        <TimelineConnector />
                            <TimelineDot color="secondary">
                                <Storage />
                            </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>

                    <TimelineContent sx={{ py: '12px', px: 2 }} className='leftCard'>
                        <Box className="skillBox">
                            <div className="skill-header">
                                <h2>Server and Deployment Skills</h2>
                            </div>
                            <div className="skill-icon">
                                <img style={{marginLeft: '10px'}} src={aws} alt="" />
                                <img style={{marginLeft: '10px'}} src={apache} alt="" />
                                <img style={{marginLeft: '10px'}} src={nginx} alt="" />
                                <img style={{marginLeft: '10px'}} src={git} alt="" />
                                <img style={{marginLeft: '10px'}} src={github} alt="" />
                            </div>
                        </Box>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </Box>
    </>
  );
}
