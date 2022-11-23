import React, {useEffect, useState} from 'react';
import Navbar from "../../components/Navbar";
import {PageBody,
    TripFooter,
    PageWrap,
    TripDetailsContainer,
    InfoRow,
    InfoText,
    InfoHeader,
    Trip,
    CancelTrip,
    CenterBox,
    BgImg
} from "./FlightInfoElements";
import axios from "axios";
import sky from "../../images/flying_plane.jpg";
import { useParams } from 'react-router-dom';

const FlightInfo = () => {
    const { confirmation_no } = useParams();

    const handleClick = async (email, flightno) => {
        const response = await axios.delete(`http://localhost:5005/trips/${email}/${flightno}`);
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

    const [myTrips, setMyTrips] = useState([]);

    useEffect(() => {
        const getMyTrips = async () => {
            const response = await axios.get(`http://localhost:5005/trips/confirmation_no/${confirmation_no}`);
            if (response.status !== 200) {
                alert('API Status Error: ' + response.status);
            }
            else {
                setMyTrips(response.data);
            }
        };

        getMyTrips()

    }, [])

    return (
        <PageWrap>
            <Navbar />
            <BgImg src={sky} alt="sky" />
            <PageBody>
                <CenterBox>
                    <TripDetailsContainer>
                            {myTrips.map(trip => <Trip key={trip.flightno}>
                                <InfoRow>
                                    <InfoHeader>Flight Number:</InfoHeader>
                                    <InfoText>{trip.flightno}</InfoText>
                                </InfoRow>
                                <InfoRow>
                                    <InfoHeader>Passenger 1:</InfoHeader>
                                    <InfoText>{trip.passenger1}</InfoText>
                                </InfoRow>
                                <InfoRow>
                                    <InfoHeader>Passenger 2:</InfoHeader>
                                    <InfoText>{trip.passenger2}</InfoText>
                                </InfoRow>
                                <InfoRow>
                                    <InfoHeader>Passenger 3:</InfoHeader>
                                    <InfoText>{trip.passenger3}</InfoText>
                                </InfoRow>
                                <InfoRow>
                                    <InfoHeader>Passenger 4:</InfoHeader>
                                    <InfoText>{trip.passenger4}</InfoText>
                                </InfoRow>
                                <InfoRow>
                                    <InfoHeader>Passenger 5:</InfoHeader>
                                    <InfoText>{trip.passenger5}</InfoText>
                                </InfoRow>
                                <InfoRow>
                                    <InfoHeader>Confirmation Number:</InfoHeader>
                                    <InfoText>{trip.confirmation_no}</InfoText>
                                </InfoRow>
                                <CancelTrip onClick={() => handleClick(trip.email, trip.flightno)}>Cancel Trip</CancelTrip>
                            </Trip>)}
                    </TripDetailsContainer>
                </CenterBox>
            </PageBody>
            <TripFooter />
        </PageWrap>
    );
};

export default FlightInfo;
