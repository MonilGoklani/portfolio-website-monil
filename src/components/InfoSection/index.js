import React from 'react'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, ImgWrap, Img } from './InfoElements'
import CustomizedTimeline from '../CustomizedTimeline'

const InfoSection = ({lightBg,id,imgStart,topLine,lightText,headline,darkText,description,buttonLabel,img,alt,primary,dark,dark2}) => {
    return (
          <InfoContainer lightBg = {lightBg} id={id}>
            
            <InfoWrapper>
            {id === 'journey'?
            (
                <div style = {{display:'flex',flexDirection:'column',alignItems:"center", marginTop:"3rem"}}>
                    <TopLine lightBg = {lightBg}>{topLine}</TopLine>
                    <CustomizedTimeline/>
                </div>
            ):
            (
                <InfoRow imgStart = {imgStart}>
                    <Column1>
                        <TextWrapper>
                            <TopLine lightBg = {lightBg}>{topLine}</TopLine>
                            <Heading lightText = {lightText}>{headline}</Heading>
                            <Subtitle darkText = {darkText}>{description}</Subtitle>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt={alt} />
                        </ImgWrap>
                    </Column2>
                </InfoRow>
                )}
            </InfoWrapper>
            
          </InfoContainer>
    )
}

export default InfoSection
