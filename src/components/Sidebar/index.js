import React from 'react'
import {SidebarContainer,Icon,CloseIcon,SidebarWrapper,SidebarRoute,SidebarLink,SideBtnWrap,SidebarMenu, Button, Mail} from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
       <SidebarContainer isOpen = {isOpen} onClick = {toggle}>
           <Icon onClick={toggle}>
               <CloseIcon/>
           </Icon>
           <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink to='about' onClick={toggle}>About</SidebarLink>
                        <SidebarLink to='discover' onClick={toggle}>Discover</SidebarLink>
                        <SidebarLink to='services' onClick={toggle}>Services</SidebarLink>
                        <SidebarLink to='signup' onClick={toggle}>Sign Up</SidebarLink>
                    </SidebarMenu>
                    <SideBtnWrap>
                    <Button href="mailto:monil2912@gmail.com" primary='false' dark='true'>Get In Touch <Mail/></Button>
                        {/* <SidebarRoute to='/signin'>
                            Sign In
                        </SidebarRoute> */}
                    </SideBtnWrap>
            </SidebarWrapper>
       </SidebarContainer>
    )
}

export default Sidebar
