import React from 'react'
import Icon2 from '../../images/svg-2.png'
import Icon3 from '../../images/svg-3.png'
import Icon4 from '../../images/svg-4.png'
import {ProjectContainer, ProjectH1, ProjectWrapper, ProjectCard, ProjectCardDescription, ProjectIcon, ProjectH2, ProjectP, Link, SocialIcons, SocialIconLink} from './ProjectElements'
import {FaGithub} from 'react-icons/fa';

const Project = () => {
    return (
        <ProjectContainer id = "projects">
            <ProjectH1>My Projects</ProjectH1>
            <ProjectWrapper>
                <ProjectCard>
                    <div style={{display:'flex',flexDirection:"column",alignItems:'center'}}>
                    <ProjectIcon src = {Icon2}/>
                    <ProjectH2> Doombuster </ProjectH2>
                    </div>
                    <ProjectCardDescription>
                    <ProjectP>Doombuster is a jukebox application leveraging the Youtube API that allows users to create a crowdsourced playlist. Users can also vote and re-order songs or veto them by playing a fun trivia.<br/><br/><span style={{fontSize:"0.8rem"}}>PostgresSQL | Express | React | Node.js | Redux | Youtube API | Socket.IO | Material UI</span></ProjectP>
                        <div style={{display:'flex',justifyContent:"flex-start"}}>
                        <Link href = 'https://www.youtube.com/watch?v=1o6VUA8-eQs&ab_channel=FullstackAcademy' target="_blank">Watch Demo</Link>
                        <SocialIcons>
                            <SocialIconLink href='https://github.com/Doomsday-Blockbuster/Doombuster' target = '_blank' aria-label='Github'>
                                <FaGithub/>
                            </SocialIconLink>
                        </SocialIcons>
                        </div>
                    </ProjectCardDescription>
                </ProjectCard>
                <ProjectCard>
                    <div style={{display:'flex',flexDirection:"column",alignItems:'center'}}>
                    <ProjectIcon src = {Icon3}/>
                    <ProjectH2> Wisecracker </ProjectH2>
                    </div>
                    <ProjectCardDescription>
                        <ProjectP>Game inspired by ‘Quiplash’ where multiplayers provide funny answers to questions and vote for their favorite answer.<br/><br/><span style={{fontSize:"0.8rem"}}>Firebase | React | Material UI</span></ProjectP>
                        <div style={{display:'flex',justifyContent:"flex-start"}}>
                            <Link href = 'https://youtu.be/tlEl75mydVY?t=3102' target="_blank">Watch Demo</Link>
                            <SocialIcons>
                                <SocialIconLink href='https://github.com/MonilGoklani/wisecracker' target = '_blank' aria-label='Github'>
                                    <FaGithub/>
                                </SocialIconLink>
                            </SocialIcons>
                        </div>
                    </ProjectCardDescription>
                </ProjectCard>
                <ProjectCard>
                    <div style={{display:'flex',flexDirection:"column",alignItems:'center'}}>
                    <ProjectIcon src = {Icon4}/>
                    <ProjectH2> Gimmicks </ProjectH2>
                    </div>
                    <ProjectCardDescription>
                        <ProjectP>Gimme Yo Money Gimmicks is an e-commerce store that sells gimmicks and spoof products for friends, family and enemies.<br/><br/><span style={{fontSize:"0.8rem"}}>PostgresSQL | Express | React | Node.js | Redux | Material UI</span></ProjectP>
                        <div style={{display:'flex',justifyContent:"flex-start"}}>
                            <Link href = 'https://grace-shopper-gimmicks.herokuapp.com/' target="_blank">Check it Out</Link>
                            <SocialIcons>
                                <SocialIconLink href='https://github.com/Graceshopper-Gimmick/Grace-Shopper-Gimmick/tree/main/fs-app-template' target = '_blank' aria-label='Github'>
                                    <FaGithub/>
                                </SocialIconLink>
                            </SocialIcons>
                        </div>
                    </ProjectCardDescription>
                </ProjectCard>
            </ProjectWrapper>
        </ProjectContainer>
    )
}

export default Project
