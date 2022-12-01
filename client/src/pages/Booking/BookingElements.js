import styled from "styled-components";
import { Link } from 'react-router-dom';
import { Form } from "formik";


//Prop for formik to initialize values
export const initialValues =
{
      sourceAirport: '',
      destinationAirport: '',
      departDate: null,
      passengerSelect: '1'
};


export const NextPassengerButton = styled.button`
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
  text-decoration: none;
  width: 220px;
  height: 45px;
  
  &:active {
    background: #49A9E6;
  }
`

export const DestinationArrivalText = styled.div`
color:black;
`;

export const ModelContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: absolute;
gap: 10px;

`;

export const ColumnContainer = styled.div`
justify-content: center;
display: flex;
align-items: center;
flex-direction: row;
width: 590px;

`

export const ContinueButton = styled(Link)`
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
  width: 220px;
  
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #49A9E6;
  }
`
export const ButtonContainer = styled.div`
justify-content: center;
position: relative;
display: flex;
align-items: center;
width: 100%;
`;

export const CloseButton = styled.button`
  background: black;
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
    background: red;
  }
`;

export const FSeatSelected = styled.button`
  background: black;
  white-space: nowrap;
  padding: 13px 28px;
  color: white;
  font-size: 16px;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  width: 78px;
  height: 46px;
  margin-bottom: 10px;
`

//Styling for FSeat
export const FSeatStyle = styled.button`
  background: ${({occupant}) => occupant != null ? 'rgba(200,200,200,0.3)' : '#49A9E6'};
  white-space: nowrap;
  padding: 13px 28px;
  color: white;
  font-size: 16px;
  border: none;
  cursor:  ${({occupant}) => occupant != null? 'not-allowed' : 'pointer'};
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  width: 78px;
  height: 46px;
  margin-bottom: 10px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: black;
  }
  
`

//Container that will hold every mapped flight component
export const FlightMap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`

//Component that is the Box holding flight information - holds each flight and contents
export const Flight = styled.div`
  border-style: solid;
  width: 800px;
  height: 200px;
`

//Inside each FlightComponent and each Flight's seat picker
export const FlightButton = styled.button`
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


export const FSeatColumn = styled.div`
border-style: solid;
background-color: white;
width: 18%;
padding: 10px;
justify-content: center;
align-items: center;
`

export const FModalBackground = styled.div`
width: 100%;
height:100%;
position: fixed;
display: flex;
justify-content: center;
align-items: center;
background-color: rgba(200,200,200,0.3);
z-index: 4;
`

export const FModalContainer = styled.div`
border-style: solid;
width: 600px;
height: 600px;
background-color: rgba(255,255,255,1);
position: fixed;
z-index: 4;
`

//Represents the part of the page under the Navbar that holds flight searches, and displays.
export const BookingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 35px;
  height: 100%;
  width: 100%;
  align-items: center;
  margin-bottom: 30px;
  background-color: white;
`;

export const FormikForm = styled(Form)`
  display: flex;
  flex-direction: row;
  height: 60px;
  gap: 20px;
`;

export const BookButton = styled.button`
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
  text-decoration: none;
  
  &:active {
    background: #49A9E6;
  }
`;
