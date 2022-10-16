import React from 'react';
import {
    SignupNav,
    HomeLogo,
    ImgWrap,
    Img,
    SignupContainer,
    SignupWrapper,
    PageWrap,
    SignupFooter,
    SignupContent,
    SignupHeader,
    FormWrap,
    HaveAnAccount
} from "./SignupElements";
import SignupForm from './SignupForm';


const plane = require('../../images/signup.jpg')

const Signup = () => {

    return (
        <PageWrap>
            <SignupNav>
                <HomeLogo to="/">Hendrix Airlines</HomeLogo>
            </SignupNav>
            <SignupContainer>
                <ImgWrap>
                    <Img src={plane} alt="beach" />
                </ImgWrap>
                <SignupContent>
                    <SignupWrapper>
                        <SignupHeader>Sign Up</SignupHeader>
                        <FormWrap>
                            <SignupForm />
                        </FormWrap>
                        <HaveAnAccount to="/sign-in">Already have an account?</HaveAnAccount>
                    </SignupWrapper>
                    <SignupFooter>
                        © 2022 Hendrix Airlines, Inc.
                    </SignupFooter>
                </SignupContent>
            </SignupContainer>
        </PageWrap>
    );
};

export default Signup;