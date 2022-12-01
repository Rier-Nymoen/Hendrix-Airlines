import React from 'react';
import Navbar from "../../components/Navbar";
import {
    AccountFooter,
    PageBody,
    PageWrap,
} from "../MyAccount/MyAccountElements";
import {CaptainHendrixImg, AboutContainer, AudioButton, BgImg, ChatBubbleImg} from "./AboutElements";
import hendrix_flight_captain from "../../images/hendrix_flight_captain.png";
import cockpit from "../../images/cockpit.jpg";
import chat_bubble from "../../images/chat_bubble.png";
import very_nice from "../../audio/very_nice.mp3";

const About = () => {
    const playAudio = () => {
        new Audio(very_nice).play()
    }
    return (
        <PageWrap>
            <Navbar />
            <BgImg src={cockpit} alt="cockpit" />
            <PageBody>
                <AudioButton onClick={playAudio}>Very Nice!</AudioButton>
                <AboutContainer>
                    <CaptainHendrixImg src={hendrix_flight_captain} alt="hendrix_flight_captain" />
                    <ChatBubbleImg src={chat_bubble} alt="chat_bubble" />
                </AboutContainer>
            </PageBody>
            <AccountFooter />
        </PageWrap>
    );
};

export default About;
