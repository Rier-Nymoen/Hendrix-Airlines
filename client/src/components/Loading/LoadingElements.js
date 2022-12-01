import styled from 'styled-components';


export const PageWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  //background-color: black;
`;

export const PageBody = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  align-items: center;
  justify-content: center;
`;

export const BgImg = styled.img`
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: -1;
  object-fit: cover;
  filter: brightness(50%);
`;

export const LoadingText = styled.h1`
  color: white;
  font-size: 48pt;
`;

export const LoadingGif = styled.img`
  height: 300px;
  width: 300px;
  position: absolute;
  bottom: 0;
  right: 0;
`;