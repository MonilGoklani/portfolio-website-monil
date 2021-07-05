import styled from 'styled-components'

export const InfoContainer = styled.div`
color: #fff;
background: ${({lightBg}) => (lightBg ? '#f0f1f4' : '#111521')};

@media screen and (max-width: 768px) {
    padding: 40px 0;
}
`

export const InfoWrapper = styled.div`
display: grid;
z-index: 1;
// height: 860px;
min-height: 860px;
width: 100vw;
// max-width: 1100px;
margin-right: auto;
margin-left: auto;
padding: 0 24px;
// justify-content: space-around;

@media screen and (max-width: 480px) {
    padding: 1rem 0 1rem 0;
}
`

export const InfoRow = styled.div`
display: grid;
grid-auto-columns : minmax(auto, 1fr);
// align-items: center;
grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

@media screen and (max-width: 768px) {
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col2' 'col1'` : `'col1 col1' 'col2 col2'`)}
}
`

export const Column1 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col1;
`

export const Column2 = styled.div`
margin-bottom: 15px;
padding: 0 15px;
grid-area: col2;
`

export const TextWrapper = styled.div`
// max-width: 540px;
margin-top: 3rem;
padding-bottom: 60px;
padding-left: 2rem;
padding-right: 2rem;


@media screen and (max-width: 480px) {
    padding-left: 0rem;
    padding-right: 0rem;
    margin-top: 2rem;
}
`

export const TopLine = styled.p`
color: ${({lightBg}) => (lightBg? '#101010' : '#f0f1f4')};
font-size: 2rem;
line-height: 16px;
font-weight: 700;
letter-spacing: 1.4px;
text-transform: uppercase;
margin-bottom: 16px;
`

export const Heading = styled.h1`
margin-bottom: 24px;
font-size: 48px;
line-height: 1.1;
font-weight: 600;
color: ${({lightText}) => (lightText ? '#f7f8fa' : '#010606')};

@media screen and (max-width: 480px) {
    font-size: 32px;
}
`

export const Subtitle = styled.p`
// max-width: 440px;
margin-bottom: 35px;
font-size: 1.2rem;
line-height: 24px;
color: ${({ darkText}) => (darkText ? '#111521' : '#fff')};
text-align: justify;
white-space: pre-wrap;
font-family:"Lato";

@media screen and (max-width: 480px) {
    font-size: 14px;
}
`

export const BtnWrap = styled.div`
display: flex;
justify-content: flex-start
`

export const ImgWrap = styled.div`
// max-width: 555px;
// height: 100%;
display: flex;
justify-content:center;
margin-top: 2rem;
`

export const Img = styled.img`
width: 75%;
margin: 0 0 10px 0;
padding-right: 0;

@media screen and (max-width: 480px) {
    width: 100%;
}
`
