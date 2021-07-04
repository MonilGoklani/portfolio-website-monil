import React, {useState,useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav,NavbarContainer,NavLogo,MobileIcon,NavMenu,NavItem,NavLinks,NavBtn,NavBtnLink} from './NavbarElements';
import { animateScroll as scroll} from 'react-scroll'

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

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
            <Nav scrollNav = {scrollNav}>
                <NavbarContainer>
                    {/* <NavLogo to = '/' onClick = {toggleHome}>
                        Monil Goklani
                    </NavLogo> */}
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
                        {/* <NavItem>
                            <NavLinks to='signup' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Sign Up</NavLinks>
                        </NavItem> */}
                    </NavMenu>
                    {/* <NavBtn>
                        <NavBtnLink to = '/signin'>Sign In</NavBtnLink>
                    </NavBtn> */}
                </NavbarContainer>
            </Nav>
    )
}

export default Navbar