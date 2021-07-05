import React from 'react'
import {FooterContainer, FooterWrap, SocialMedia, SocialMediaWrap, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink} from './FooterElements'
import {FaGithub, FaLinkedin} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import {animateScroll as scroll} from 'react-scroll'

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/' onClick = {toggleHome}>
                            I am currently open to new opportunities
                        </SocialLogo>
                        <SocialIcons>
                            <SocialIconLink href="mailto:monil2912@gmail.com" target = '_blank' aria-label='email'>
                                <MdEmail/>
                            </SocialIconLink>
                            <SocialIconLink href='https://www.linkedin.com/in/monil-goklani/' target = '_blank' aria-label='LinkedIn'>
                                <FaLinkedin/>
                            </SocialIconLink>
                            <SocialIconLink href='https://github.com/MonilGoklani' target = '_blank' aria-label='Github'>
                                <FaGithub/>
                            </SocialIconLink>
                        </SocialIcons>
                        <WebsiteRights>Built using React, Styled Components and Material UI</WebsiteRights>
                        <WebsiteRights>by</WebsiteRights>
                        <p style={{fontFamily:'Playfair Display', color:'white'}}>Monil Goklani</p>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
