import React from 'react';
import {InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    ImgWrap,
    Img,
    LearnMoreButton
} from "./InfoElements";

const InfoSection = () => {
    const img = require('../../../images/travel_mode.svg').default;

    return (
        <InfoContainer lightBg={true} id='prepare'>
            <InfoWrapper>
                <InfoRow imgStart={false}>
                    <Column1>
                        <TextWrapper>
                            <TopLine>Preparation</TopLine>
                            <Heading lightText={false}>What's required for your trip?</Heading>
                            <Subtitle darkText={true}>Find the latest travel requirements for the United States.</Subtitle>
                            <BtnWrap>
                                <LearnMoreButton onClick={() =>
                                    window.location.href="https://www.tsa.gov/travel/security-screening"
                                }>Learn More</LearnMoreButton>
                            </BtnWrap>
                        </TextWrapper>
                    </Column1>
                    <Column2>
                        <ImgWrap>
                            <Img src={img} alt='travelers'/>
                        </ImgWrap>
                    </Column2>
                </InfoRow>
            </InfoWrapper>
        </InfoContainer>
    );
};

export default InfoSection;