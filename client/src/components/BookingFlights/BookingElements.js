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
import axios from 'axios';


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


//Holds all flight lists (props is a convention we can use)
export const FlightListContainer = ({flightList, setCurrentFlight, setIsModalOpen, setPlaneLayout}) => {
//may need async
  const selectHandler = async (plane) => {
      setCurrentFlight(plane)
      const res = await axios.get('http://localhost:5000/book/' + plane.regno + '/seats')
      console.log(res.data)
      setPlaneLayout(res.data)
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

export const FModal = ({currentFlight, setIsModalOpen, planeLayout}) => {
  return(
    <FModalBackground>

    <FModalContainer>
      {/* 
      if regno for component, render that component otherwise render the other component
      
      */}
          <h1>{currentFlight.maincabinseats}</h1>
          <div></div>
          <button onClick={() => {setIsModalOpen(false)}}>Close Modal</button>
          <div></div>
          {console.log(currentFlight.model)}

          {(() => {
            if(currentFlight.model === "B747")
            {
              console.log(currentFlight.model)
              return(
                <ModelB747 planeLayout={planeLayout}>
                {console.log(planeLayout)}
                </ModelB747>       
              )
            }
      
          })()}


    </FModalContainer>
    </FModalBackground>

  )
}



//Seat object to be rendered
export const FSeat = ({row, isTaken, column}) => {

  if(isTaken)
  {
    return(<h1>{"occupied"}</h1>)
  }
  else
  {
    return(<button>{row} {column}</button>)
  }
}

export const SeatInteractable = ({})


export const ModelB747 = ({planeLayout}) => {

  return(
    <>
        {console.log(planeLayout[0]["istaken"])}
        {console.log("testing")}

    <FSeatColumn>
      <FSeat row={planeLayout[0]["row"]} column={planeLayout[0]["columnletter"]} isTaken={planeLayout[0]["istaken"]}></FSeat>
      <FSeat row={planeLayout[1]["row"]} column={planeLayout[1]["columnletter"]} isTaken={planeLayout[1]["istaken"]} ></FSeat>
      <FSeat row={planeLayout[2]["row"]} column={planeLayout[2]["columnletter"]}  isTaken={planeLayout[2]["istaken"]}></FSeat>
      <FSeat row={planeLayout[3]["row"]} column={planeLayout[3]["columnletter"]}  isTaken={planeLayout[3]["istaken"]}></FSeat>
    </FSeatColumn>
    <FSeatColumn>
      <FSeat row={planeLayout[4]["row"]} column={planeLayout[4]["columnletter"]}  isTaken={planeLayout[4]["istaken"]}></FSeat>
      <FSeat row={planeLayout[5]["row"]} column={planeLayout[5]["columnletter"]}  isTaken={planeLayout[5]["istaken"]}></FSeat>
      <FSeat row={planeLayout[6]["row"]} column={planeLayout[6]["columnletter"]}  isTaken={planeLayout[6]["istaken"]}></FSeat>
      <FSeat row={planeLayout[7]["row"]} column={planeLayout[7]["columnletter"]}  isTaken={planeLayout[7]["istaken"]}></FSeat>
    </FSeatColumn>
    <FSeatColumn>
      <FSeat row={planeLayout[8]["row"]} column={planeLayout[8]["columnletter"]}  isTaken={planeLayout[8]["istaken"]}></FSeat>
      <FSeat row={planeLayout[9]["row"]} column={planeLayout[9]["columnletter"]}  isTaken={planeLayout[9]["istaken"]}></FSeat>
      <FSeat row={planeLayout[10]["row"]} column={planeLayout[10]["columnletter"]}  isTaken={planeLayout[10]["istaken"]}></FSeat>
      <FSeat row={planeLayout[11]["row"]} column={planeLayout[11]["columnletter"]}  isTaken={planeLayout[11]["istaken"]}></FSeat>
    </FSeatColumn>
    <FSeatColumn>
      <FSeat row={planeLayout[12]["row"]} column={planeLayout[12]["columnletter"]} isTaken={planeLayout[12]["istaken"]}></FSeat>
      <FSeat row={planeLayout[13]["row"]} column={planeLayout[13]["columnletter"]} isTaken={planeLayout[13]["istaken"]}></FSeat>
      <FSeat row={planeLayout[14]["row"]} column={planeLayout[14]["columnletter"]} isTaken={planeLayout[14]["istaken"]}></FSeat>
      <FSeat row={planeLayout[15]["row"]} column={planeLayout[15]["columnletter"]} isTaken={planeLayout[15]["istaken"]}></FSeat>
    </FSeatColumn>
    </>
  )
}

export const ModelA11 = () =>{

}


export const FSeatColumn = styled.div`

border-style: solid;
background-color: #45aaed;
float: left;
width: 15%;
padding: 10px;
height: 400px;
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

/*
Seat = () =>
{

if( row = object[row] and  column = object[column])
    if(object[isTaken] == true)
    {


      return selectable react seat object
    } 
    else{
      not selectable seat component
    }
}


<Seat row={1} column={1} />

passengerList={{p1 : seat}, p2, p3}
current=passengerList[0]


*/

