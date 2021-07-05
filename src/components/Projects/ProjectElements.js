import styled from 'styled-components'

export const ProjectContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #f0f1f4;
padding: 40px 0;

@media screen and (max-width: 480px) {
    padding: 56px 0;
}
`

export const ProjectWrapper = styled.div`
max-width: 1000px;
margin: 0 auto;
display: grid;
grid-template-columns: 1fr;
align-items: center;
grid-gap: 16px;
padding: 0 50px;

@media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
}

@media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
}

@media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    padding: 0;
}
`

export const ProjectCard = styled.div`
background : #111521;
display: flex;
justify-content: flex-start;
padding: 15px;
margin-bottom: 2rem;
box-shadow: 5px 5px 10px grey;
transition: all 0.2s ease-in-out;
border-radius: 5px;

&:hover {
    transform: scale(1.1);
    transition: all 0.2s ease-in-out;
}

@media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 2px;
    width: 98vw;
    height: 520px;
}
`

export const ProjectCardDescription = styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;

@media screen and (max-width: 768px) {
    height: 245px;
}

`

export const ProjectIcon = styled.img`
height: 200px;
width: 350px;
margin 10px 0 10px 0;
border: 1px solid grey;
`

export const ProjectH1 = styled.h1`
color: #010606;
font-size: 2rem;
line-height: 16px;
font-weight: 700;
letter-spacing: 1.4px;
text-transform: uppercase;
margin : 2rem 0 2rem 0;
`

export const ProjectH2 = styled.h2`
font-size: 2rem;
text-align: center;
color:#f0f1f4;
font-family:'Montserrat';
`

export const ProjectP = styled.p`
font-size: 1.1rem;
text-align: justify;
padding: 0.5rem 0.2rem 0.5rem 0.2rem;
margin: 0.5rem;
color: #f0f1f4;
font-family: "Montserrat";

@media screen and (max-width: 480px) {
    font-size: 1rem;
}
`
export const Link = styled.a`
text-decoration:none;
color:white;
background: #b100e8;;
width: 120px;
height: 30px;
border-radius: 10px;
margin-left: 1rem;
display:flex;
align-items:center;
justify-content:center;

@media screen and (max-width: 480px) {
    margin-bottom:1rem;
}
`

export const SocialIcons = styled.div`
display: flex;
// justify-content: space-between;
align-items; center;
width: 240px;
`

export const SocialIconLink = styled.a`
color: #fff;
font-size: 24px;
padding: 0 0.5rem 0 0.5rem;
color: white;

&:hover {
    color:#b100e8;
}
`
