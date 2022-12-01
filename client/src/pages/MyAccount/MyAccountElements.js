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
  filter: brightness(90%);
`;

export const TabsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const AccountTab = styled.button`
  border-style: solid;
  border-width: thin;
  background-color: ${({currTab}) => (currTab ? '#49A9E6' : '#ffffff')};
  height: 70px;
  width: 250px;
  font-size: 18pt;
  border-radius: 30px;
  cursor: ${({currTab}) => (currTab ? 'default' : 'pointer')};
  margin-top: 20px;
  
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #49A9E6;
  }
`;

export const InfoRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: end;
  gap: 16px;
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

export const SignOutButton = styled.button`
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
  width: 150px;
  margin-top: 10px;
  
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #49A9E6;
  }
`;

export const AccountDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const CenterBox = styled.div`
  height: 550px;
  width: 1200px;
  background-color: white;
  //border-radius: 20px;
  padding-bottom: 30px;
  margin-bottom: 30px;
  overflow-y: auto;
`;

export const AccountFooter = styled(Footer)`
  flex-shrink: 0;
`;

export const TripMap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  gap: 10px;
  padding-top: 10px;
`;

export const Trip = styled.div`
  border-style: solid;
  height: 100px;
  width: 800px;
`;

export const NoTrips = styled.h1`
  font-size: 24pt;
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
  
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #49A9E6;
  }
`;
