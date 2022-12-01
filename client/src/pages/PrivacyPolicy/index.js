import React from 'react';
import Navbar from "../../components/Navbar";
import {
    AccountFooter,
    PageBody,
    PageWrap,
} from "../MyAccount/MyAccountElements";

const PrivacyPolicy = () => {
    return (
        <PageWrap>
            <Navbar />
            <PageBody>
                <h1>Privacy Policy Page</h1>
            </PageBody>
            <AccountFooter />
        </PageWrap>
    );
};

export default PrivacyPolicy;
