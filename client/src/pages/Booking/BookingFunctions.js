import { useField } from 'formik';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from '@mui/material/FormHelperText';
import axios from 'axios';
import {FlightContext, PassengerContext} from "../../components/UserContext";
import { useContext, useState } from 'react';
import {FlightTimes} from "../../components/FlightTimes";
import {FlightMap,
    FSeatColumn,
    FSeatStyle,
    FlightButton,
    FSeatSelected,
    FModalContainer,
    FModalBackground,
    Flight,
    NextPassengerButton,
    CloseButton,
    ButtonContainer,
    ColumnContainer,
    ContinueButton,
    ModelContainer,
    DestinationArrivalText
} from "./BookingElements";

//Holds all flight lists (props is a convention we can use)
export const FlightListContainer = ({flightList, setIsModalOpen, setPlaneLayout}) => {
    const {setCurrentFlight} = useContext(FlightContext);

    const selectHandler = async (plane) => {
      setCurrentFlight(plane)
      const res = await axios.get('http://localhost:5005/book/' + plane.regno + '/seats')
      // console.log(res.data)
      setPlaneLayout(res.data)


      //must be last thing called in this function
      setIsModalOpen(true)
    }


    return(
        <FlightMap>
            {flightList.map(flight =>
              <Flight key={flight.flight_no}>
                             <DestinationArrivalText> {flight.source_gate_code} to {flight.destination_gate_code} </DestinationArrivalText>

                              <TimeDisplay departureTime={flight.departure} arrivalTime={flight.arrival}></TimeDisplay>


              {flight.flight_no}, {flight.model}
              <FlightButton onClick={() => {selectHandler(flight)}}>Pick Seats</FlightButton>
              </Flight>)}
        </FlightMap>
    )
}

//Modal menu that displays seatpicker for a flight
export const FModal = ({setIsModalOpen, planeLayout}) => {
  const {currentFlight} = useContext(FlightContext);

  const {passengerList,setPassengerList} = useContext(PassengerContext);
  console.log("Passenger List :", passengerList)

  const exitModalHandler =  () => {
    setPassengerList([...Array(passengerList.length)].map(() => {

                return { row: null, column: null };
              }))

      setIsModalOpen(false)
  }




  return(
    <FModalBackground>
      <FModalContainer>

          <CloseButton onClick={exitModalHandler}>X</CloseButton>

          {(() => {
            if(currentFlight.model === "B747")
            {
              return(
                <ModelB747 planeLayout={planeLayout}>
                </ModelB747>
              )
            }
            else if(currentFlight.model === "A380")
            {
            return(
              <ModelA380 planeLayout={planeLayout}>
              </ModelA380>
            )
            }
          })()}

      </FModalContainer>
    </FModalBackground>

  )
}

//Represents seat object
export const FSeat = ({row, occupant, column, currentPassenger}) => {
  const {passengerList,setPassengerList} = useContext(PassengerContext);
  const [selectedPassenger, setSelectedPassenger] = useState(null)
  const clickHandler =  () => {
    let temp = [...passengerList]

    temp[currentPassenger].row = row
    temp[currentPassenger].column = column
    setSelectedPassenger(currentPassenger)
    setPassengerList(temp)

}

  if(occupant != null)
  {
    return(<FSeatStyle disabled={true} occupant={occupant}>{row} {column}</FSeatStyle>)
  }
  else if(selectedPassenger !== null && passengerList[selectedPassenger].row === row && passengerList[selectedPassenger].column === column)
  {
    return(<FSeatSelected>P{selectedPassenger + 1}</FSeatSelected>)
  }
  else
  {
    return(<FSeatStyle onClick={clickHandler}> {row} {column}</FSeatStyle>)
  }
}
/* */

export const TimeDisplay = ({departureTime, arrivalTime}) => {

  const {departure, arrival, duration} = FlightTimes(departureTime, arrivalTime);
return(
<>
  <h3> {departure} to {arrival}  </h3> <h5> {duration} </h5>
</>
)

}

export const ModelB747 = ({planeLayout}) => {
  const {passengerList} = useContext(PassengerContext);

  const [currentPassenger, setCurrentPassenger] = useState(0)

  const handleNextPassenger =  () => {
    if(currentPassenger === passengerList.length-1)
    {
      setCurrentPassenger(0)
    }
    else
    {
      setCurrentPassenger(currentPassenger + 1)
    }


  }
  console.log("Current Passenger Index: ",currentPassenger)

  return(
<ModelContainer>
<ButtonContainer>
{(() => {
      if(passengerList.length > 1)
      {
        return(<NextPassengerButton onClick={handleNextPassenger}>Next Passenger</NextPassengerButton> )
      }

      })()}


</ButtonContainer>

    {/* <NextPassengerButton onClick={handleNextPassenger}>Next Passenger</NextPassengerButton> want to have the current passenger selected for maybe in button text  */}

      {/*{console.log("Plane layout", planeLayout[0]["passenger"])}*/}
    <ColumnContainer>
    <FSeatColumn>
      <FSeat row={planeLayout[0]["row"]} column={planeLayout[0]["columnletter"]} occupant={planeLayout[0]["passenger"]} currentPassenger={currentPassenger}></FSeat>
      <FSeat row={planeLayout[1]["row"]} column={planeLayout[1]["columnletter"]} occupant={planeLayout[1]["passenger"]} currentPassenger={currentPassenger}></FSeat>
      <FSeat row={planeLayout[2]["row"]} column={planeLayout[2]["columnletter"]}  occupant={planeLayout[2]["passenger"]} currentPassenger={currentPassenger}></FSeat>
      <FSeat row={planeLayout[3]["row"]} column={planeLayout[3]["columnletter"]}  occupant={planeLayout[3]["passenger"]} currentPassenger={currentPassenger}></FSeat>
    </FSeatColumn>
    <FSeatColumn>
      <FSeat row={planeLayout[4]["row"]} column={planeLayout[4]["columnletter"]}  occupant={planeLayout[4]["passenger"]} currentPassenger={currentPassenger}></FSeat>
      <FSeat row={planeLayout[5]["row"]} column={planeLayout[5]["columnletter"]}  occupant={planeLayout[5]["passenger"]} currentPassenger={currentPassenger}></FSeat>
      <FSeat row={planeLayout[6]["row"]} column={planeLayout[6]["columnletter"]}  occupant={planeLayout[6]["passenger"]} currentPassenger={currentPassenger}></FSeat>
      <FSeat row={planeLayout[7]["row"]} column={planeLayout[7]["columnletter"]}  occupant={planeLayout[7]["passenger"]} currentPassenger={currentPassenger}></FSeat>
    </FSeatColumn>
    <FSeatColumn>
      <FSeat row={planeLayout[8]["row"]} column={planeLayout[8]["columnletter"]}  occupant={planeLayout[8]["passenger"]} currentPassenger={currentPassenger}></FSeat>
      <FSeat row={planeLayout[9]["row"]} column={planeLayout[9]["columnletter"]}  occupant={planeLayout[9]["passenger"]} currentPassenger={currentPassenger}></FSeat>
      <FSeat row={planeLayout[10]["row"]} column={planeLayout[10]["columnletter"]}  occupant={planeLayout[10]["passenger"]} currentPassenger={currentPassenger}></FSeat>
      <FSeat row={planeLayout[11]["row"]} column={planeLayout[11]["columnletter"]}  occupant={planeLayout[11]["passenger"]} currentPassenger={currentPassenger}></FSeat>
    </FSeatColumn>
    <FSeatColumn>
      <FSeat row={planeLayout[12]["row"]} column={planeLayout[12]["columnletter"]} occupant={planeLayout[12]["passenger"]} currentPassenger={currentPassenger}></FSeat>
      <FSeat row={planeLayout[13]["row"]} column={planeLayout[13]["columnletter"]} occupant={planeLayout[13]["passenger"]} currentPassenger={currentPassenger}></FSeat>
      <FSeat row={planeLayout[14]["row"]} column={planeLayout[14]["columnletter"]} occupant={planeLayout[14]["passenger"]} currentPassenger={currentPassenger}></FSeat>
      <FSeat row={planeLayout[15]["row"]} column={planeLayout[15]["columnletter"]} occupant={planeLayout[15]["passenger"]} currentPassenger={currentPassenger}></FSeat>
    </FSeatColumn>
    </ColumnContainer>
    <ButtonContainer>
    {(() => {
      if(passengerList.every((passenger) => passenger.row !== null))
      {
        return(<ContinueButton to="/book/trip">Continue</ContinueButton>)
      }

      })()}
    </ButtonContainer>

    </ModelContainer>
  )
}

export const ModelA380 = ({planeLayout}) => {
  const {passengerList} = useContext(PassengerContext);

  const [currentPassenger, setCurrentPassenger] = useState(0)

  const handleNextPassenger =  () => {
    if(currentPassenger === passengerList.length-1)
    {
      setCurrentPassenger(0)
    }
    else
    {
      setCurrentPassenger(currentPassenger + 1)
    }


  }
  console.log("Current Passenger Index: ",currentPassenger)

  return(
    <ModelContainer>

<ButtonContainer>
{(() => {
      if(passengerList.length > 1)
      {
        return(<NextPassengerButton onClick={handleNextPassenger}>Next Passenger</NextPassengerButton> )
      }

      })()}


</ButtonContainer>


    {/* <NextPassengerButton onClick={handleNextPassenger}>Next Passenger</NextPassengerButton> want to have the current passenger selected for maybe in button text  */}

      {/*{console.log("Plane layout", planeLayout[0]["passenger"])}*/}
    <ColumnContainer>
    <FSeatColumn>
      <FSeat row={planeLayout[0]["row"]} column={planeLayout[0]["columnletter"]} occupant={planeLayout[0]["passenger"]} currentPassenger={currentPassenger}></FSeat>
      <FSeat row={planeLayout[1]["row"]} column={planeLayout[1]["columnletter"]} occupant={planeLayout[1]["passenger"]} currentPassenger={currentPassenger}></FSeat>
      <FSeat row={planeLayout[2]["row"]} column={planeLayout[2]["columnletter"]}  occupant={planeLayout[2]["passenger"]} currentPassenger={currentPassenger}></FSeat>
      <FSeat row={planeLayout[3]["row"]} column={planeLayout[3]["columnletter"]}  occupant={planeLayout[3]["passenger"]} currentPassenger={currentPassenger}></FSeat>

    </FSeatColumn>
    <FSeatColumn>
      <FSeat row={planeLayout[4]["row"]} column={planeLayout[4]["columnletter"]}  occupant={planeLayout[4]["passenger"]} currentPassenger={currentPassenger}></FSeat>
      <FSeat row={planeLayout[5]["row"]} column={planeLayout[5]["columnletter"]}  occupant={planeLayout[5]["passenger"]} currentPassenger={currentPassenger}></FSeat>
      <FSeat row={planeLayout[6]["row"]} column={planeLayout[6]["columnletter"]}  occupant={planeLayout[6]["passenger"]} currentPassenger={currentPassenger}></FSeat>
      <FSeat row={planeLayout[7]["row"]} column={planeLayout[7]["columnletter"]}  occupant={planeLayout[7]["passenger"]} currentPassenger={currentPassenger}></FSeat>
    </FSeatColumn>
    <FSeatColumn>
      <FSeat row={planeLayout[8]["row"]} column={planeLayout[8]["columnletter"]}  occupant={planeLayout[8]["passenger"]} currentPassenger={currentPassenger}></FSeat>
      <FSeat row={planeLayout[9]["row"]} column={planeLayout[9]["columnletter"]}  occupant={planeLayout[9]["passenger"]} currentPassenger={currentPassenger}></FSeat>
      <FSeat row={planeLayout[10]["row"]} column={planeLayout[10]["columnletter"]}  occupant={planeLayout[10]["passenger"]} currentPassenger={currentPassenger}></FSeat>
      <FSeat row={planeLayout[11]["row"]} column={planeLayout[11]["columnletter"]}  occupant={planeLayout[11]["passenger"]} currentPassenger={currentPassenger}></FSeat>
    </FSeatColumn>
    <FSeatColumn>
      <FSeat row={planeLayout[12]["row"]} column={planeLayout[12]["columnletter"]} occupant={planeLayout[12]["passenger"]} currentPassenger={currentPassenger}></FSeat>
      <FSeat row={planeLayout[13]["row"]} column={planeLayout[13]["columnletter"]} occupant={planeLayout[13]["passenger"]} currentPassenger={currentPassenger}></FSeat>
      <FSeat row={planeLayout[14]["row"]} column={planeLayout[14]["columnletter"]} occupant={planeLayout[14]["passenger"]} currentPassenger={currentPassenger}></FSeat>
      <FSeat row={planeLayout[15]["row"]} column={planeLayout[15]["columnletter"]} occupant={planeLayout[15]["passenger"]} currentPassenger={currentPassenger}></FSeat>
    </FSeatColumn>
    <FSeatColumn>
      <FSeat row={planeLayout[16]["row"]} column={planeLayout[16]["columnletter"]} occupant={planeLayout[16]["passenger"]} currentPassenger={currentPassenger}></FSeat>
      <FSeat row={planeLayout[17]["row"]} column={planeLayout[17]["columnletter"]} occupant={planeLayout[17]["passenger"]} currentPassenger={currentPassenger}></FSeat>
      <FSeat row={planeLayout[18]["row"]} column={planeLayout[18]["columnletter"]} occupant={planeLayout[18]["passenger"]} currentPassenger={currentPassenger}></FSeat>
      <FSeat row={planeLayout[19]["row"]} column={planeLayout[19]["columnletter"]} occupant={planeLayout[19]["passenger"]} currentPassenger={currentPassenger}></FSeat>
    </FSeatColumn>
    </ColumnContainer>

    <ButtonContainer>
    {(() => {
      if(passengerList.every((passenger) => passenger.row !== null))
      {
        return(<ContinueButton to="/book/trip">Continue</ContinueButton>)
      }

      })()}
    </ButtonContainer>
</ModelContainer>
)
}

export const DepartureCalendar = ({ ...props }) => {
  const [, meta, helpers] = useField(props);
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

export const PassengerSelect = ({ ...props }) => {
  const [field, meta, helpers] = useField(props);
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
