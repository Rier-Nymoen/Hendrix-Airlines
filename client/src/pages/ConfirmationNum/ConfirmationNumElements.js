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

export const ConfirmationNumNav = styled.nav`
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

export const ConfirmationNumContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
  filter: brightness(80%);
`;

export const ConfirmationNumContent = styled.div`
  z-index: 3;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 80px;
  bottom: 135px;
`;


export const ConfirmationNumWrapper = styled.div`
  border-radius: 20px;
  background: #f7f8fa;
  height: 400px;
  width: 590px;
  position: relative;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ConfirmationNumHeader = styled.h1`
  color: black; //#49A9E6 theme blue
  text-align: center;
  font-weight: normal;
  font-size: 30px;
  margin-top: 65px;
  margin-bottom: 60px;
`;

export const FormWrap = styled.div`
  align-items: center;
  justify-content: center;
`;

export const ConfirmationNumButton = styled.button`
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

export const ConfirmationNumFooter = styled.p`
  color: #f7f8fa;
  font-size: 12px;
  text-align: center;
  margin-top: 28px;
`;