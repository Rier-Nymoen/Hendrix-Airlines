import styled from 'styled-components'
import { Form, useField} from 'formik';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from '@mui/material/FormHelperText';
import { StepContext } from '@mui/material';


//Container that will hold every mapped flight component
export const FlightMap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  
`

//Component that is the Box holding flight information - holds each flight and contents
const Flight = styled.div`
  border-style: solid;
  width: 800px;
  height: 200px;
`
//Inside each FlightComponent and each Flight's seat picker
export const FlightButton = styled.button`
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

// export const Popup = styled.div`

// `
// export const PopupInner = styled.div`

// `
//Holds all flight lists (props is a convention we can use)
export const FlightListContainer = ({flightList, setCurrentFlight, setIsModalOpen}) => {
//may need async
  const selectHandler =  (plane) => {
      setCurrentFlight(plane)
      setIsModalOpen(true)
  }
    return(
            <FlightMap>
                {flightList.map(flight =>
                <Flight>
                   {flight.flight_no}, {flight.status}, {flight.source_gate_code} to {flight.destination_gate_code} {flight.regno}
                  <FlightButton onClick={() => {selectHandler(flight)}}> Pick Seats</FlightButton>
                </Flight>)}
            </FlightMap>
    )
}

export const FModal = ({currentFlight, setIsModalOpen}) => {

  return(
    <FModalBackground>

    <FModalContainer>
          <h1>{currentFlight.maincabinseats}</h1>
          <button onClick={() => {setIsModalOpen(false)}}>Close Modal</button>
    </FModalContainer>


    </FModalBackground>

  )



}

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

//@TODO rename to flight search possibly. Currently this is what starts queries.
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

//Prop for formik to initialize values
export const initialValues =
{
      sourceAirport: '',
      destinationAirport: '',
      departDate: null,
      passengerSelect: '1'

};


export const DepartureCalendar = ({ ...props }) => {
  const [, meta, helpers] = useField(props);
  //console.log("meta:", meta)

  // if (date) {
  //     console.log(date.toLocaleDateString());
  // }
  return (
  <LocalizationProvider dateAdapter={AdapterDateFns}>
    <DatePicker
      label="Depart"
      disablePast={true}
      value={meta.value}
      onChange={(newDate) => {
        helpers.setValue(newDate);
      }}
      renderInput={(params) => <TextField {...params} onBlur={() => {helpers.setTouched(true)}}
                                          helperText={meta.error && meta.touched ? meta.error: " "}
                                          error={!!(meta.error && meta.touched)}/>}
    />
  </LocalizationProvider>
  );
};

export const  PassengerSelect = ({ ...props }) => {
  const [field, meta, helpers] = useField(props);
  //console.log(meta)
  return (
      <FormControl
          sx={{ minWidth: 200 }}
          error={!!(meta.error && meta.touched)}
          onBlur={() => {
              helpers.setTouched(true)
          }}>
          <InputLabel id="passengers">Passengers</InputLabel>
          <Select
          labelId="passengers"
          id="passengers"
          label="Passengers"
          {...field}
          >
              <MenuItem value="1">1 Passenger</MenuItem>
              <MenuItem value="2">2 Passengers</MenuItem>
              <MenuItem value="3">3 Passengers</MenuItem>
              <MenuItem value="4">4 Passengers</MenuItem>
              <MenuItem value="5">5 Passengers</MenuItem>

          </Select>
          <FormHelperText>{meta.error && meta.touched ? meta.error: " "}</FormHelperText>
      </FormControl>
  );
};
