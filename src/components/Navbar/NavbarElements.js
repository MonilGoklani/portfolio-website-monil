import styled from 'styled-components'
import {Link as LinkS} from 'react-scroll'

export const Nav = styled.nav`
background: ${({scrollNav}) => (scrollNav? '#000' : 'transparent')};
height: 80px;
margin-top: -80px;
display:flex;
justify-content:center;
align-items: center;
font-size: 1rem;
position: sticky;
top: 0;
z-index: 10;

@media screen and (max-width: 960px) {
    transition 0.8s all ease;
}
`
export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
height:80px;
z-index: 1;
width: 100%;
padding: 0 24px;
align-items:center;
// max-width: 1100px;
`
export const MobileIcon = styled.div`
display:none;

@media screen and (max-width: 760px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color:white;
}
`

export const NavMenu = styled.ul`
display:flex;
align-items: center;
list-style:none;
text-align:center;
margin-right: -22px;
width:100%;
justify-content:center;

@media screen and (max-width: 768px) {
    display: none;
}
`

export const NavItem = styled.li`
height:80px;
`

export const NavLinks = styled(LinkS)`
color: #fff;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&.active {
    border-bottom: 5px solid #b100e8;
}
`;

export const NavBtn = styled.nav`
display: flex;
align-items: center;

@media screen and (max-width: 760px) {
    display:none;
}
`

export const NavBtnLink = styled.a`
text-decoration:none;
border-radius: 50px;
background: #5f06ba;
white-space: nowrap;
padding: 10px 22px;
color: white;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;

&:hover {
    transition: all 0.2s ease-in-out;
    background: #b100e8;
    color: white;
}
`

export const ResumeContainer = styled.div`
display:none;

@media screen and (max-width: 760px) {
    display: block;
    position: absolute;
    top: 1.2rem;
    left: 1rem;
    outline: none;
}
`

export const Resume = styled.a`
text-decoration:none;
font-size: 1.3rem;
color:#fff;
padding:5px;
display:flex;
}`