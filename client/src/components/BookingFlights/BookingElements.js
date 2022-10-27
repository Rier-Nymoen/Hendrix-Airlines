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

export const FlightListContainer = (props) => {
    
    return(
            <FlightMap>
                {/*props.flightList.map(flight => <Flight> {flight.flight_no}</Flight>)*/}
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
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`



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