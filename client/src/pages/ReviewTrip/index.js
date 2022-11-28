import React, {useContext, useRef} from 'react';
import Navbar from "../../components/Navbar";
import {
    TripFooter,
    PageBody,
    PageWrap,
    FlightInfoContainer,
    PassengerForm,
    passengerInitialValues,
    BagsSelect,
    SubmitButton,
    CardForm,
    cardInitialValues,
    ExpDateSelect
} from "./ReviewTripElements";
import {PassengerContext, FlightContext, UserContext} from "../../components/UserContext";
import {TextBox} from "../../components/FormFields";
import {Formik} from "formik";
import {
    DOBSelect,
    FormColumn,
    GenderSelect,
    StateSelect
} from "../../components/Signup/SignupForm/FormElements";
import {passengerSchema, cardSchema} from "./validationSchema";
import axios from "axios";


const PassengerMap = () => {
    const {passengerList} = useContext(PassengerContext);
    const {user} = useContext(UserContext);
    const {currentFlight} = useContext(FlightContext);
    let formValuesList = [];

    const formRef = useRef([]);
    formRef.current = formRef.current.slice(0, passengerList.length);

    const onSubmit = async (values) => {
        formValuesList.push(values)
        let success = true
        if(formValuesList.length === passengerList.length + 1) {
            const ticketnoList = Array(5).fill(null);
            success = success && await postCreditCard(formValuesList[formValuesList.length - 1])

            for(let i = 0; i < passengerList.length; i++) {
                const ticketno = (Math.random().toString(36)+'00000000000000000').slice(2, 15)
                ticketnoList[i] = ticketno
                success = success && await postPassenger(formValuesList[i], ticketno)
                success = success && await putSeat(ticketno, passengerList[i].row, passengerList[i].column)
            }

            success = success && await postTrip(ticketnoList)
            if(success) {
                alert('Trip created!');
            }
        }
    }

    const postPassenger = async (passengerData, ticketno) => {
        let data = {...passengerData, ticketno: ticketno}
        data.dob = `${data.dob.getFullYear()}-${data.dob.getMonth() + 1}-${data.dob.getDate()}`
        try {
            const response = await axios.post('http://localhost:5005/passenger', data);

            if (response.status !== 201) {
                alert("Unexpected Error");
                return false
            }
        }
        catch (error) {
            alert("Unexpected Error");
            return false
        }
        return true
    };

     const postCreditCard = async (cardData) => {
        let data = {...cardData, account: user.email}
        data.exp_date = `${data.exp_date.getFullYear()}-${data.exp_date.getMonth() + 1}-${data.exp_date.getDate()}`
        try {
            const response = await axios.post('http://localhost:5005/credit_card', data);

            if (response.status !== 201) {
                alert("Unexpected Error");
                return false
            }
        }
        catch (error) {
            alert("Unexpected Error");
            return false
        }
        return true
    };

    const postTrip = async (ticketnoList) => {
        const data = {
            email: user.email,
            flight_no: currentFlight.flight_no,
            ticketnoList: ticketnoList
        }

        try {
            const response = await axios.post('http://localhost:5005/trips', data);

            if (response.status !== 201) {
                alert("Cannot book duplicate trip for the same passenger");
                return false
            }
        }
        catch (error) {
            alert("Cannot book duplicate trip for the same passenger");
            return false
        }
        return true
    };

     const putSeat = async (ticketno, row, column) => {
        const data = {passenger: ticketno}

        try {
            const response = await axios.put(`http://localhost:5005/seats/${currentFlight.regno}/${row}/${column}`, data);

            if (response.status !== 200) {
                alert("Unexpected Error :(");
                return false
            }
        }
        catch (error) {
            alert("Unexpected Error :(");
            return false
        }
        return true
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
                <Formik
                    innerRef={(element) => {formRef.current[i] = element}}
                    validateOnChange={true}
                    initialValues={passengerInitialValues}
                    validationSchema={passengerSchema}
                    onSubmit={onSubmit}>
                    {() => (
                    <PassengerForm>
                        <h1>Passenger {i+1} - {passenger.row + passenger.column}</h1>
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
        <Formik
            innerRef={(element) => {formRef.current[passengerList.length] = element}}
            validateOnChange={true}
            initialValues={cardInitialValues}
            validationSchema={cardSchema}
            onSubmit={onSubmit}>
            {() => (
            <CardForm>
                <h1>Payment Details</h1>
                <FormColumn>
                    <TextBox name="name" label="Name on Card"/>
                    <TextBox name="card_number" label="Card Number"/>
                    <ExpDateSelect name="exp_date"/>
                </FormColumn>
                <FormColumn>
                    <TextBox name="cvv" label="CVV"/>
                    <TextBox name="zip" label="Billing Zip Code"/>
                </FormColumn>
            </CardForm>
            )}
        </Formik>
        <SubmitButton type='submit' onClick={handleSubmit}>Submit</SubmitButton>
      </>
    );
};


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
