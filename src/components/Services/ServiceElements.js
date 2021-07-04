import styled from 'styled-components'

export const ServicesContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: #010606;
padding-top: 3rem;
`

export const ServicesWrapper = styled.div`
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
`

export const ServicesCard = styled.div`
background : #fff;
display: flex;
// flex-direction: column;
justify-content: flex-start;
align-items: center;
border-radius: 10px;
// height: 340px; 
padding: 30px;
margin-bottom: 2rem;
box-shadow: 0 1px 3px rgba(0,0,0,0.2);
transition: all 0.2s ease-in-out;

&:hover {
    transform: scale(1.2);
    transition: all 0.2s ease-in-out;
    cursor:pointer;
}

@media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 5px;
}
`

export const ServicesIcon = styled.img`
height: 240px;
width: 320px;
margin-bottom: 10px;
`

export const ServicesH1 = styled.h1`
color: #fca311;
font-size: 24px;
line-height: 16px;
font-weight: 700;
letter-spacing: 1.4px;
text-transform: uppercase;
margin-bottom: 16px;
// font-size: 2.5rem;
// color: #fff;
// margin-bottom: 64px;

// @media screen and (max-width: 480px) {
//     font-size: 2rem;
// }
`

export const ServicesH2 = styled.h2`
font-size: 1rem;
margin-bottom: 10px;
text-align: center;
`

export const ServicesP = styled.p`
font-size: 1rem;
text-align: align;
padding: 1rem;
`

