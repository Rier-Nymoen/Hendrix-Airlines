import React from 'react';
import {
    SigninNav,
    HomeLogo,
    ImgWrap,
    Img,
    SigninContainer,
    SigninWrapper,
    PageWrap,
    SigninFooter,
    SigninContent,
    SigninHeader,
    FormWrap,
    ForgotPassword,
    CreateAccountWrap,
    CreateAccountLink
} from "./SigninElements";
import SigninForm from './SigninForm';


const plane = require('../../images/signin.jpg')

const Signin = () => {

    return (
        <PageWrap>
            <SigninNav>
                <HomeLogo to="/">Hendrix Airlines</HomeLogo>
            </SigninNav>
            <SigninContainer>
                <ImgWrap>
                    <Img src={plane} alt="plane" />
                </ImgWrap>
                <SigninContent>
                    <SigninWrapper>
                        <SigninHeader>Sign In</SigninHeader>
                        <FormWrap>
                            <SigninForm />
                        </FormWrap>
                        <ForgotPassword to="/">Forgot Password</ForgotPassword>
                        <CreateAccountWrap>
                            <CreateAccountLink to="/sign-up">Create Account</CreateAccountLink>
                        </CreateAccountWrap>
                    </SigninWrapper>
                    <SigninFooter>
                        © 2022 Hendrix Airlines, Inc.
                    </SigninFooter>
                </SigninContent>
            </SigninContainer>
        </PageWrap>
    );
};

export default Signin;