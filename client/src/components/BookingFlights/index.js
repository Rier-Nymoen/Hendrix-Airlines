import React, {useContext, useState} from 'react'

import {Formik, Field, Form, useField} from 'formik'
import { FormikForm, initialValues, FlightListContainer, BookButton, BookingContainer, DepartureCalendar, PassengerSelect, FModal, InteractableButton} from './BookingElements';
import axios from 'axios';
import Navbar from "../Navbar";
import {TextBox} from "../FormFields";
import {bookingSchema} from "./bookingSchema";
import { Link } from 'react-router-dom';
import { PassengerContext, UserContext} from '../UserContext';

const Booking = () => {

    const [flightList, setFlightList] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [planeLayout, setPlaneLayout] = useState([])
    const {setPassengerList} = useContext(PassengerContext);

    const onSubmit = async (values, { setSubmitting }) => {
        setSubmitting(true);
        console.log('onSubmitPressed')

        //GetMonth has +1, because Calendar forms denote January as 0, February as 1, and so on. In order to make the queries work, it needs to be the month how we usually denote it.
        const res = await axios.get('http://localhost:5005/book/' + values.sourceAirport.toUpperCase() +
        '/' + values.destinationAirport.toUpperCase() + '/' +  `${values.departDate.getFullYear()}-${values.departDate.getMonth() + 1}-${values.departDate.getDate()}` +
        '/' + values.passengerSelect)

        console.log(res)
        setFlightList(res.data)
        setSubmitting(false);
        //set current flight should be empty list i believe or null?
        //setCurrentFlight([])



          setPassengerList([...Array(parseInt(values.passengerSelect))].map(() => {
            return { row: null, column: null };
          }))

    }


    return(

        <>

            {isModalOpen && <FModal setIsModalOpen={setIsModalOpen} planeLayout={planeLayout}> </FModal>}

            <Navbar/>

            <BookingContainer>
                <Formik
                    validateOnChange={true}
                    initialValues={initialValues}
                    validationSchema={bookingSchema}
                    onSubmit={onSubmit}>

                    {({ isSubmitting }) => (
                    <FormikForm>
                        <TextBox name="sourceAirport" type="input" label="From" />
                        <TextBox name="destinationAirport" type="input" label="To" />
                        <DepartureCalendar name="departDate"></DepartureCalendar>
                        <PassengerSelect name="passengerSelect"> </PassengerSelect>
                        <BookButton disabled={isSubmitting} type="submit">Search</BookButton>
                    </FormikForm>
                    )}
                </Formik>
                <FlightListContainer
                flightList={flightList}
                setIsModalOpen={setIsModalOpen}
                planeLayout={planeLayout}
                setPlaneLayout={setPlaneLayout}
                ></FlightListContainer>

            </BookingContainer>
        </>
    )

}

export default Booking;