import React, {useEffect, useState} from 'react';
import Navbar from "../../components/Navbar";
import {PageBody,
    TripFooter,
    PageWrap,
    InfoRow,
    InfoText,
    InfoHeader,
    Trip,
    CancelTrip,
    CenterBox,
    BgImg
} from "./FlightInfoElements";
import axios from "axios";
import mountain from "../../images/mountain.jpg";
import { useParams } from 'react-router-dom';
import {FlightTimes} from "../../components/FlightTimes";

const FlightInfo = () => {
    const { confirmation_no } = useParams();

    const handleClick = async (confirm_no) => {
        const response = await axios.delete(`http://localhost:5005/trips/${confirm_no}`);

        if (response.status === 406) {
            alert('Cannot cancel trip. Must be at least 24 hours before departure.');
        }
        else if (response.status === 503) {
            alert('Unexpected error.');
        }
        else {
            alert('Trip successfully cancelled.');
            window.location.replace('/');
        }
    }

    const [myTrip, setMyTrip] = useState(null);
    const [tripPassengers, setTripPassengers] = useState([]);

    useEffect(() => {
        const getMyTrip = async () => {
            const trip_response = await axios.get(`http://localhost:5005/trips/confirmation_no/${confirmation_no}`);
            const passengers_response = await axios.get(`http://localhost:5005/passenger/confirmation_no/${confirmation_no}`);
            if (trip_response.status !== 200 || passengers_response.status !== 200) {
                alert("Unexpected Error");
            }
            else {
                setMyTrip(trip_response.data[0]);
                setTripPassengers(passengers_response.data);
            }
        };

        getMyTrip()

    }, [confirmation_no])

    let departure = null;
    let arrival = null;
    let duration = null;
    if(myTrip) {
        ({departure, arrival, duration} = FlightTimes(myTrip.departure, myTrip.arrival));
    }

    return (
        <PageWrap>
            <Navbar />
            <BgImg src={mountain} alt="mountain" />
            <PageBody>
                <CenterBox>
                    {myTrip && <Trip>
                        <InfoRow>
                            <InfoHeader>Flight Number:</InfoHeader>
                            <InfoText>{myTrip.flightno}</InfoText>
                        </InfoRow>
                        <InfoRow>
                            <InfoHeader>From:</InfoHeader>
                            <InfoText>{myTrip.source_gate_code}</InfoText>
                            <InfoHeader>Gate:</InfoHeader>
                            <InfoText>{myTrip.source_gate_number}</InfoText>
                            <InfoHeader>Departure Time:</InfoHeader>
                            <InfoText>{departure}</InfoText>
                        </InfoRow>
                        <InfoRow>
                            <InfoHeader>To:</InfoHeader>
                            <InfoText>{myTrip.destination_gate_code}</InfoText>
                            <InfoHeader>Gate:</InfoHeader>
                            <InfoText>{myTrip.destination_gate_number}</InfoText>
                            <InfoHeader>Arrival Time:</InfoHeader>
                            <InfoText>{arrival}</InfoText>
                        </InfoRow>
                        <InfoRow>
                            <InfoHeader>Flight Duration:</InfoHeader>
                            <InfoText>{duration}</InfoText>
                        </InfoRow>
                       {myTrip.passenger1 && <InfoRow>
                            <InfoHeader>Passenger 1:</InfoHeader>
                            <InfoText>{tripPassengers[0].firstname} {tripPassengers[0].middlename} {tripPassengers[0].lastname}</InfoText>
                        </InfoRow>}
                        {myTrip.passenger2 && <InfoRow>
                            <InfoHeader>Passenger 2:</InfoHeader>
                            <InfoText>{tripPassengers[1].firstname} {tripPassengers[1].middlename} {tripPassengers[1].lastname}</InfoText>
                        </InfoRow>}
                        {myTrip.passenger3 && <InfoRow>
                            <InfoHeader>Passenger 3:</InfoHeader>
                            <InfoText>{tripPassengers[2].firstname} {tripPassengers[2].middlename} {tripPassengers[2].lastname}</InfoText>
                        </InfoRow>}
                        {myTrip.passenger4 && <InfoRow>
                            <InfoHeader>Passenger 4:</InfoHeader>
                            <InfoText>{tripPassengers[3].firstname} {tripPassengers[3].middlename} {tripPassengers[3].lastname}</InfoText>
                        </InfoRow>}
                        {myTrip.passenger5 && <InfoRow>
                            <InfoHeader>Passenger 5:</InfoHeader>
                            <InfoText>{tripPassengers[4].firstname} {tripPassengers[4].middlename} {tripPassengers[4].lastname}</InfoText>
                        </InfoRow>}
                        <InfoRow>
                            <InfoHeader>Confirmation Number:</InfoHeader>
                            <InfoText>{myTrip.confirmation_no}</InfoText>
                        </InfoRow>
                        <InfoRow>
                            <InfoHeader>Status:</InfoHeader>
                            <InfoText>{myTrip.status}</InfoText>
                        </InfoRow>
                        {new Date() < new Date(myTrip.departure) && <CancelTrip onClick={() => handleClick(myTrip.confirmation_no)}>Cancel Trip</CancelTrip>}
                    </Trip>}
                </CenterBox>
            </PageBody>
            <TripFooter />
        </PageWrap>
    );
};

export default FlightInfo;
