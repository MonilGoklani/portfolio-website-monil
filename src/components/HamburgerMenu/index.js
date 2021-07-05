import React from 'react'
import {SidebarContainer,Icon,CloseIcon,SidebarWrapper,SidebarRoute,SidebarLink,SideBtnWrap,SidebarMenu, Button, Mail,Resume} from './SidebarElements'
import resume from '../../assets/resume_MG.pdf'
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
