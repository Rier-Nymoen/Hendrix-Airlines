import React from 'react';
import Navbar from "../../components/Navbar";
import {ErrorContainer, ErrorFooter, ErrorImg, PageWrap} from "./ErrorElements";
import sadcat from '../../images/sadcat.jpg';

const Error = () => {
    return (
        <PageWrap>
            <Navbar />
            <ErrorContainer>
                <ErrorImg src={sadcat} alt="Sad Cat"/>
                <h1>Page Could Not Be Accessed</h1>
            </ErrorContainer>
            <ErrorFooter />
        </PageWrap>
    );
};

export default Error;
