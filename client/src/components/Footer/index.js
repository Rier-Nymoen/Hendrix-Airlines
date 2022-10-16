import React from 'react';
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLink,
    FooterBottomText,
    FooterLinkSeparator
} from "./FooterElements";

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLink to='/about'>About</FooterLink>
                    <FooterLinkSeparator>|</FooterLinkSeparator>
                    <FooterLink to='/terms-of-service'>Terms of Service</FooterLink>
                    <FooterLinkSeparator>|</FooterLinkSeparator>
                    <FooterLink to='/privacy-policy'>Privacy Policy</FooterLink>
                </FooterLinksContainer>
                <FooterBottomText>
                    © 2022 Hendrix Airlines, Inc. All Rights Reserved.
                </FooterBottomText>
            </FooterWrap>
        </FooterContainer>
    );
};

export default Footer;