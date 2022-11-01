import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const PageWrap = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: 1;
  
  @media screen and (max-height: 880px) {
      overflow-y: auto;
  }
`;

export const SigninNav = styled.nav`
  background: black;
  height: 80px;
  margin-top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
      transition: 0.8s all ease;
  }
`;

export const HomeLogo = styled(Link)`
  color: white;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  font-weight: bold;
  text-decoration: none;
`;

export const SigninContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  //padding: 0 30px;
  //height: 1000px; //857px
  position: relative;
  z-index: 1;
  height: 100%;
`;

export const ImgWrap = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  filter: brightness(98%);
`;

export const SigninContent = styled.div`
  z-index: 3;
  //max-width: 1200px;
  position: absolute;
  //padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 135px;
  bottom: 135px;
`;


export const SigninWrapper = styled.div`
  border-radius: 20px;
  background: #f7f8fa;
  height: 600px; //600
  width: 390px;
  //top: 135px;
  //bottom: 135px;
  position: relative;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SigninHeader = styled.h1`
  color: black; //#49A9E6 theme blue
  text-align: center;
  font-weight: normal;
  font-size: 30px;
  margin-top: 65px;
  margin-bottom: 60px;
`;

export const FormWrap = styled.div`
  align-items: center;
  //display: flex;
  //background: dodgerblue;
  //position: absolute;
  justify-content: center;
`;

export const SigninButton = styled.button`
  border-radius: 50px;
  background: #010606;
  white-space: nowrap;
  padding: 13px 28px;
  color: white;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-top: 15px;
  //width: 150px;
  
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #49A9E6;
  }
`;

export const ForgotPassword = styled(Link)`
  color: #49A9E6;
  text-decoration: none;
  text-align: center;
  margin-top: 34px;
  font-weight: bold;
  font-size: 9.8pt;
  
  &:hover {
    text-decoration: underline;
  }
`;

export const CreateAccountWrap = styled.div`
  background-color: #e4e6eb;
  position: absolute;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 54px;
`;

export const CreateAccountLink = styled(Link)`
  color: #49A9E6;
  text-decoration: none;
  font-weight: bold;
  font-size: 12pt;
  
  &:hover {
    text-decoration: underline;
  }
`

export const SigninFooter = styled.p`
  color: #f7f8fa;
  font-size: 12px;
  text-align: center;
  margin-top: 28px;
`;
