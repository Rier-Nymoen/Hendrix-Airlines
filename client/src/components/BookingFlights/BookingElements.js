import styled from 'styled-components'
import { Form } from 'formik';


const Flight = styled.div`
  border-style: groove;
  width: 800px;
  height: 200px;
`

export const FlightMap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const FlightListContainer = ({ flightList }) => {
    
    return(
            <FlightMap>
                {flightList.map(flight => <Flight key={flight.flight_no}>{flight.flight_no}</Flight>)}
            </FlightMap>
    )

}

export const BookingContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 35px;
  height: 100%;
  width: 100%;
  align-items: center;
  margin-bottom: 30px;
`;



export const FormikForm = styled(Form)`
  display: flex;
  flex-direction: row;
  height: 60px;
  gap: 20px;
  //position: absolute;
  //top: 100px;
  //left: 35px;
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
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #49A9E6;
  }
`;

export const initialValues =
{
    airport: ''

};
