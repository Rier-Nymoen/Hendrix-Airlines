import styled from "styled-components";
import {Link} from 'react-router-dom';

export const FooterContainer = styled.footer`
  background-color: #101522;
`;

export const FooterWrap = styled.div`
  padding: 20px 24px; //48 24
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  color: white;
  margin-bottom: 15px;
  
  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin-right: 10px; //20px
  margin-left: 10px;
  
  &:hover {
    text-decoration: underline;
  }
`;

export const FooterBottomText = styled.p`
  color: white;
  font-size: x-small;
`;

export const FooterLinkSeparator = styled.p`
  color: white;
`;
