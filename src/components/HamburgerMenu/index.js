import React from 'react'
import {SidebarContainer,Icon,CloseIcon,SidebarWrapper,SidebarLink,SideBtnWrap,SidebarMenu, Button, Mail} from './SidebarElements'
const Sidebar = ({isOpen, toggle}) => {
    return (
       <SidebarContainer isOpen = {isOpen} onClick = {toggle}>
           <Icon onClick={toggle}>
               <CloseIcon/>
           </Icon>
           <SidebarWrapper>
                    <SidebarMenu>
                        <SidebarLink to='about' onClick={toggle}>About</SidebarLink>
                        <SidebarLink to='journey' onClick={toggle}>Journey</SidebarLink>
                        <SidebarLink to='projects' onClick={toggle}>Projects</SidebarLink>
                    </SidebarMenu>
                    <SideBtnWrap>
                    <Button href="mailto:monil2912@gmail.com" primary='false'>Get In Touch <Mail/></Button>
                    </SideBtnWrap>
            </SidebarWrapper>
       </SidebarContainer>
    )
}

export default Sidebar
