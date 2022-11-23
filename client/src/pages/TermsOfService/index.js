import React from 'react';
import Navbar from "../../components/Navbar";
import {
    AccountFooter,
    PageBody,
    PageWrap,
} from "../MyAccount/MyAccountElements";

const TermsOfService = () => {
    return (
        <PageWrap>
            <Navbar />
            <PageBody>
                <h1>Terms Of Service Page</h1>
            </PageBody>
            <AccountFooter />
        </PageWrap>
    );
};

export default TermsOfService;
