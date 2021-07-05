import React, {useState,useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav,NavbarContainer,MobileIcon,NavMenu,NavItem,NavLinks,NavBtn,NavBtnLink,ResumeContainer,Resume} from './NavbarElements';
import { animateScroll as scroll} from 'react-scroll';
import resume from '../../assets/resume_MG.pdf';
import {GoFileSymlinkFile} from 'react-icons/go'

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll',changeNav)
    },[])

    return (
            <Nav scrollNav = {scrollNav}>
                <NavbarContainer>
                    <ResumeContainer>
                        <Resume href = {resume} target = "_blank"><pre style={{display:"flex",alignItems:"center"}}>Resume <GoFileSymlinkFile/></pre></Resume>
                    </ResumeContainer>
                    <MobileIcon onClick = {toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='journey' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Journey</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='projects' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Projects</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink href = {resume} target = "_blank">Resume</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
    )
}

export default Navbar