import React from 'react'
import {SidebarContainer,Icon,CloseIcon,SidebarWrapper,SidebarRoute,SidebarLink,SideBtnWrap,SidebarMenu, Button, Mail, Resume} from './SidebarElements'
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
                        <Resume href = {resume} target = "_blank">Resume</Resume>
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
