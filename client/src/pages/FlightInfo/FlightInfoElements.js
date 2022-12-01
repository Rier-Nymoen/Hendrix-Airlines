import styled from "styled-components";
import Footer from "../../components/Footer";


export const PageWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const PageBody = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  align-items: center;
  justify-content: center;
  gap: 15px;
`;

export const BgImg = styled.img`
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: -1;
  object-fit: cover;
  filter: brightness(75%);
`;

export const InfoRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;
  gap: 16px;
  //height: 47px;
  justify-content: center;
`;

export const InfoHeader = styled.h1`
  font-size: 18pt;
  color: black;
`;

export const InfoText = styled.p`
  font-size: 14pt;
  color: black;
  margin-bottom: 3px;
`;
//
// export const TripDetailsContainer = styled.div`
//   //display: flex;
//   //flex-direction: column;
//   //height: 550px;
//   //width: 1200px;
//   //align-items: center;
//   //justify-content: center;
//   //gap: 20px;
// `;

export const CenterBox = styled.div`
  background-color: white;
  border-radius: 20px;
  padding-top: 40px;
  padding-bottom: 40px;
`;

export const TripFooter = styled(Footer)`
  flex-shrink: 0;
`;

export const Trip = styled.div`
  display: flex;
  flex-direction: column;
  //min-height: 550px;
  min-width: 1200px;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const CancelTrip = styled.button`
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
  //margin-top: 15px;
  
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #49A9E6;
  }
`;