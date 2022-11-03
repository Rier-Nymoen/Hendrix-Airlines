import styled from 'styled-components';
import Footer from "../../components/Footer";

export const PageWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1 0 auto;
`;

export const ErrorImg = styled.img`
  height: 350px;
  margin-bottom: 40px;
`;

export const ErrorFooter = styled(Footer)`
  flex-shrink: 0;
`;
