import React, {useState} from 'react'
import Video from '../../videos/video.mp4'
import {HeroContainer,HeroBg,VideoBg, HeroContent, HeroH1, HeroP, HeroP2, HeroBtnWrapper, ArrowForward, ArrowRight, Button, Mail} from './HeroElements'
const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <HeroContainer id='home'>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <p style={{color:'#f0f1f4', fontFamily: "Lato"}}>Hello! My name is </p>
                <HeroH1>Monil Goklani</HeroH1>
                <HeroP>
                Curiosity powers my engine &#128642;
                </HeroP>
                <HeroP2>
                I am a full-stack developer with a diverse background in engineering and business. I am passionate about delivering impactful engineering solutions that solve modern day problems and have a net positive effect on how we live today
                </HeroP2>
                <HeroBtnWrapper>
                    <Button href="mailto:monil2912@gmail.com" primary='false'>Get In Touch <Mail/></Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
