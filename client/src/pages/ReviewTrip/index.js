import React, {useContext, useRef} from 'react';
import Navbar from "../../components/Navbar";
import {
    TripFooter,
    PageBody,
    PageWrap,
    FlightInfoContainer,
    PassengerForm,
    initialValues,
    BagsSelect,
    SubmitButton
} from "./ReviewTripElements";
import {PassengerContext, FlightContext} from "../../components/UserContext";
import {TextBox} from "../../components/FormFields";
import {Formik} from "formik";
import {
    DOBSelect,
    FormColumn,
    GenderSelect,
    StateSelect
} from "../../components/Signup/SignupForm/FormElements";
import {passengerSchema} from "./passengerSchema";
import axios from "axios";


const PassengerMap = () => {
    const {passengerList} = useContext(PassengerContext);
    let formValuesList = [];

    const formRef = useRef([]);
    formRef.current = formRef.current.slice(0, passengerList.length);

    const onSubmit = (values) => {
        formValuesList.push(values)
        if(formValuesList.length === passengerList.length) {
            for(const formValues of formValuesList) {
                putPassenger(formValues)
            }
            alert('Passengers added!');
        }
    }

    const putPassenger = async (passengerData) => {
        let data = {...passengerData}
        data.dob = `${data.dob.getFullYear()}-${data.dob.getMonth() + 1}-${data.dob.getDate()}`
        try {
            const response = await axios.post('http://localhost:5005/passenger', data);

            if (response.status !== 201) {
                alert("Unexpected Error :(");
            }
        }
        catch (error) {
            alert("Unexpected Error :(");
        }

    };

    const handleSubmit = () => {
        formValuesList = []
        for(const ref of formRef.current) {
            ref.handleSubmit()
        }
    }

    return (
      <>
        {passengerList.map((passenger, i) =>
            <div key={i}>
                <h1>Passenger {i+1} - {passenger.row + passenger.column}</h1>
                <Formik
                    innerRef={(element) => {formRef.current[i] = element}}
                    validateOnChange={true}
                    initialValues={initialValues}
                    validationSchema={passengerSchema}
                    onSubmit={onSubmit}>
                    {() => (
                    <PassengerForm id='passenger-form'>
                        <FormColumn>
                            <TextBox name="fname" label="First Name"/>
                            <TextBox name="mname" label="Middle Name"/>
                            <TextBox name="lname" label="Last Name"/>
                        </FormColumn>
                        <FormColumn>
                            <DOBSelect name="dob"/>
                            <GenderSelect name="gender"/>
                        </FormColumn>
                        <FormColumn>
                            <StateSelect name="state" />
                            <BagsSelect name="bags"/>
                        </FormColumn>
                    </PassengerForm>
                    )}
                </Formik>
            </div>)
        }
        <SubmitButton type='submit' onClick={handleSubmit}>Continue</SubmitButton>
      </>
    );
};

// <>
//         {passengerList.map(passenger =>
//           <PassengerForm key={passenger.row + passenger.column}>
//           {passenger.row}{passenger.column}
//           </PassengerForm>)
//         }
//       </>

const ReviewTrip = () => {
    const {passengerList} = useContext(PassengerContext);
    const {currentFlight} = useContext(FlightContext);
    console.log("curr flight:", currentFlight)
    console.log("passengers:", passengerList)
    const dateOptions = { year: 'numeric', month: 'short', day: 'numeric', weekday: 'short', hour: 'numeric', minute: 'numeric' };
    const departure = new Date(currentFlight.departure)
    const arrival = new Date(currentFlight.arrival)

    const timeDiff = arrival - departure

    let minutes = Math.round(Math.floor(timeDiff / 1000) / 60);
    let hours = Math.floor(minutes / 60);

    minutes = minutes % 60;

    const duration = `${hours}h ${minutes}m`;

    return (
        <PageWrap>
            <Navbar />
            <PageBody>
                <FlightInfoContainer>
                    Plane Number: {currentFlight.regno},
                    From: {currentFlight.source_gate_code}, To: {currentFlight.destination_gate_code},
                    Departure Date: {departure.toLocaleString("en-US", dateOptions)},
                    Arrival Date: {arrival.toLocaleString("en-US", dateOptions)},
                    Flight Duration: {duration}
                </FlightInfoContainer>
                <PassengerMap />
            </PageBody>
            <TripFooter />
        </PageWrap>
    );
};

export default ReviewTrip;
