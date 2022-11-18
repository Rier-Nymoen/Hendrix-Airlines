import React, {useContext, useEffect, useState} from 'react';
import {UserContext} from "../../components/UserContext";
import Navbar from "../../components/Navbar";
import {PageBody,
    TripFooter,
    PageWrap,
    TripDetailsContainer,
    InfoRow,
    InfoText,
    InfoHeader,
    Trip,
    DeleteTripButton,
    CenterBox,
    BgImg
} from "./FlightInfoElements";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import sky from "../../images/flying_plane.jpg";

const FlightInfo = () => {
    const { user, setUser } = useContext(UserContext);

    const navigate = useNavigate();
    const signOut = () => {
        localStorage.removeItem("user");
        setUser(null);
        navigate('/');
    };

    const [myTrips, setMyTrips] = useState([]);

    useEffect(() => {
        const getMyTrips = async () => {
            const response = await axios.get('http://localhost:5005/trips/' + user.email);
            if (response.status !== 200) {
                alert('API Status Error: ' + response.status);
            }
            else {
                setMyTrips(response.data);
            }
        };

        getMyTrips()

    }, [user.email])

    return (
        <PageWrap>
            <Navbar />
            <BgImg src={sky} alt="sky" />
            <PageBody>
                <CenterBox>
                    <TripDetailsContainer>
                            {myTrips.map(trip => <Trip key={trip.flightno}>
                                <InfoRow>
                                    <InfoHeader>Email:</InfoHeader>
                                    <InfoText>{trip.email}</InfoText>
                                </InfoRow>
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
                            </Trip>)}
                            <DeleteTripButton onClick={signOut}>Sign Out</DeleteTripButton>
                    </TripDetailsContainer>
                </CenterBox>
            </PageBody>
            <TripFooter />
        </PageWrap>
    );

    // return (
    //     <PageWrap>
    //         <Navbar />
    //         <BgImg src={plane} alt="plane" />
    //         <PageBody>
    //             <CenterBox>
    //                 <TripDetailsContainer>
    //                     <InfoRow>
    //                         <InfoHeader>Email:</InfoHeader>
    //                         <InfoText>{user.email}</InfoText>
    //                     </InfoRow>
    //                     <InfoRow>
    //                         <InfoHeader>Flight Number:</InfoHeader>
    //                         <InfoText>{user.flightno}</InfoText>
    //                     </InfoRow>
    //                     <InfoRow>
    //                         <InfoHeader>Passenger 1:</InfoHeader>
    //                         <InfoText>{user.passenger1}</InfoText>
    //                     </InfoRow>
    //                     <InfoRow>
    //                         <InfoHeader>Passenger 2:</InfoHeader>
    //                         <InfoText>{user.passenger2}</InfoText>
    //                     </InfoRow>
    //                     <InfoRow>
    //                         <InfoHeader>Passenger 3:</InfoHeader>
    //                         <InfoText>{user.passenger3}</InfoText>
    //                     </InfoRow>
    //                     <InfoRow>
    //                         <InfoHeader>Passenger 4:</InfoHeader>
    //                         <InfoText>{user.passenger4}</InfoText>
    //                     </InfoRow>
    //                     <InfoRow>
    //                         <InfoHeader>Passenger 5:</InfoHeader>
    //                         <InfoText>{user.passenger5}</InfoText>
    //                     </InfoRow>
    //                     <DeleteTripButton onClick={deleteTrip}>Delete Trip</DeleteTripButton>
    //                 </TripDetailsContainer>
    //             </CenterBox>
    //         </PageBody>
    //         <TripFooter />
    //     </PageWrap>
    // );
};

export default FlightInfo;
