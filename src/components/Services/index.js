import React from 'react'
import Icon1 from '../../images/svg-7.png'
import Icon2 from '../../images/svg-3.png'
import Icon3 from '../../images/svg-5.png'
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServiceElements'

const Services = () => {
    return (
        <ServicesContainer id = "projects">
            <ServicesH1>My Projects</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <div>
                    <ServicesIcon src = {Icon1}/>
                    <ServicesH2> Doombuster </ServicesH2>
                    </div>
                    <ServicesP>Doombuster is a jukebox application using the Youtube API to create a crowdsourced playlist where users can select songs to add to the playlist. Users can upvote/downvote songs on the shared playlist to make the songs play sooner or later or never. A trivia game allows users to skip a song if they get three answers correct in a row.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <div>
                    <ServicesIcon src = {Icon1}/>
                    <ServicesH2> Wisecracker </ServicesH2>
                    </div>
                    <ServicesP>Game inspired by ‘Quiplash’ where multiplayers provide funny answers to questions and vote for their favorite answer.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <div>
                    <ServicesIcon src = {Icon1}/>
                    <ServicesH2> Gimmicks </ServicesH2>
                    </div>
                    <ServicesP>Gimme Yo Money Gimmicks is an e-commerce store that sells gimmicks and spoof products for friends, family and enemies.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
