import React, {useState} from 'react';
import Video from '../../videos/video.mp4'
import {Button} from "../ButtonElement";
import {HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroP,
    HeroBtnWrapper,
    HeroH1,
    ArrowRight,
    ArrowForward
} from "./HeroElements";

const HeroSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
            </HeroBg>
            <HeroContent>
                <HeroH1>Let's Fly Away</HeroH1>
                <HeroP>Book a flight today!</HeroP>
                <HeroBtnWrapper>
                    <Button
                        to="/book" onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary={true}
                        dark={true}
                    >
                        Book {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    );
};

export default HeroSection;