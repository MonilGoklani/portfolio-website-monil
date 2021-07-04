import styled from 'styled-components';
import {MdKeyboardArrowRight,MdArrowForward} from 'react-icons/md'
import {MdEmail} from 'react-icons/md'


export const HeroContainer = styled.div`
background: #0c0c0c;
display: flex;
justify-content: center;
align-items: center;
padding: 0 30px;
height: 800px;
position: relative;
z-index: 1;

:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%),
                linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
}
`

export const HeroBg = styled.div`
position: absolute;
top: 0;
right: 0;
bottom: 0;
left: 0;
width: 100%;
height: 100%;
overflow: hidden;
`

export const VideoBg = styled.video`
width: 100%;
height: 100%;
// -o-object-fit: cover;
object-fit: cover;
background: #232a34;
`

export const HeroContent = styled.div`
z-index: 3;
max-width: 1200px;
position: absolute;
padding: 8px 24px;
display: flex;
flex-direction: column;
align-items: center;
`

export const HeroH1 = styled.h1`
color:#fff;
font-size: 48px;
text-align : center;
font-family: 'Playfair Display';
padding-top: 1rem;

@media screen and (max-width: 768px) {
    font-size: 40px;
}

@media screen and (max-width: 480px) {
    font-size: 32px;
}
`

export const HeroP = styled.p`
margin-top: 24px;
color: #f0f1f4;
font-size: 24px;
text-align: center;
max-width: 600px;
// text-shadow: 2px 2px #e5e5e5;

@media screen and (max-width: 768px) {
    font-size: 24px;
}

@media screen and (max-width: 480px) {
    font-size: 18px;
}
`

export const HeroP2 = styled.p`
margin-top: 24px;
color: #f0f1f4;
font-size: 18px;
text-align: center;
max-width: 600px;
font-family: 'Lato';

@media screen and (max-width: 768px) {
    font-size: 14px;
}

@media screen and (max-width: 480px) {
    font-size: 12px;
}
`

export const HeroBtnWrapper = styled.div`
margin-top: 32px;
diplay: flex;
flex-direction: column;
align-items: center;
`

export const ArrowForward = styled(MdArrowForward)`
margin-left: 8px;
font-size: 20px;
`

export const ArrowRight = styled(MdKeyboardArrowRight)`
margin-left: 8px;
font-size: 20px;
`

export const Mail = styled(MdEmail)`
font-size: 30px;
color:#black;
margin-left:8px;
`

export const Button = styled.a`
border-radius: 50px;
background: ${({primary}) => (primary? '#5f06ba' : '#010606')};
white-space: nowrap;
padding: ${({big}) => (big ? '14px 48px' : '6px 30px')};
color: ${({dark}) => (dark? '#010606' : '#fff')};
font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
outline: none;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;
text-decoration:none;


&:hover {
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary ? '#b100e8' : '#fca311')};
    color: ${({dark}) => (dark? '#010606' : '#fff')};
}
`
