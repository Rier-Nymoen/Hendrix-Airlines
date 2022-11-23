import React from 'react';
import Navbar from "../../components/Navbar";
import {
    AccountFooter,
    PageBody,
    PageWrap,
} from "../MyAccount/MyAccountElements";

const About = () => {
    return (
        <PageWrap>
            <Navbar />
            <PageBody>
                <h1>About Page</h1>
            </PageBody>
            <AccountFooter />
        </PageWrap>
    );
};

export default About;
