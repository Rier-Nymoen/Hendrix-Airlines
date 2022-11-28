import React, {useContext, useEffect, useState} from 'react';
import {UserContext} from "../../components/UserContext";
import Navbar from "../../components/Navbar";
import {PageBody,
    AccountFooter,
    PageWrap,
    AccountDetailsContainer,
    InfoRow,
    InfoText,
    InfoHeader,
    SignOutButton,
    TabsContainer,
    AccountTab,
    CenterBox,
    BgImg,
    TripMap,
    Trip,
    NoTrips,
    CancelTrip
} from "./MyAccountElements";
import {useNavigate} from "react-router-dom";
import sky from "../../images/sky.jpg";
import axios from "axios";


const AccountDetails = () => {
    const { user, setUser } = useContext(UserContext);

    const navigate = useNavigate()
    const signOut = () => {
        localStorage.removeItem("user");
        setUser(null);
        navigate('/');
    };

    return (
        <AccountDetailsContainer>
            <InfoRow>
                <InfoHeader>Email:</InfoHeader>
                <InfoText>{user.email}</InfoText>
            </InfoRow>
            <InfoRow>
                <InfoHeader>Password:</InfoHeader>
                <InfoText>{user.password}</InfoText>
            </InfoRow>
            <InfoRow>
                <InfoHeader>Name:</InfoHeader>
                <InfoText>{user.first_name} {user.middle_name} {user.last_name} {user.suffix}</InfoText>
            </InfoRow>
            <InfoRow>
                <InfoHeader>Date of Birth:</InfoHeader>
                <InfoText>
                    {new Date(user.dob).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </InfoText>
            </InfoRow>
            <InfoRow>
                <InfoHeader>Gender:</InfoHeader>
                <InfoText>{user.gender}</InfoText>
            </InfoRow>
            <InfoRow>
                <InfoHeader>Address:</InfoHeader>
                <InfoText>{user.address}{user.address2 ? `, ${user.address2}` : ''}, {user.city}, {user.state} {user.zip}</InfoText>
            </InfoRow>
            <InfoRow>
                <InfoHeader>Phone:</InfoHeader>
                <InfoText>{user.phone_number}</InfoText>
            </InfoRow>
            <SignOutButton onClick={signOut}>Sign Out</SignOutButton>
        </AccountDetailsContainer>
    );
};

const MyTrips = ({ myTrips }) => {
    const navigate = useNavigate();

    return (
        <TripMap>
            {myTrips.length === 0 ? <NoTrips>No Trips</NoTrips>
                : myTrips.map(trip =>
                    <Trip key={trip.flightno}>
                        Flight Number: {trip.flightno}, Confirmation Number: {trip.confirmation_no}
                        <CancelTrip onClick={() => navigate(`/trips/${trip.confirmation_no}`)}>Show Details</CancelTrip>
                    </Trip>)}
        </TripMap>
    );
};

const CreditCards = ({ creditCards }) => {
    const handleClick = async (card_number) => {
        const response = await axios.delete(`http://localhost:5005/credit_cards/${card_number}`);
        if (response.status !== 200) {
            alert('Unexpected error.');
        }
        else {
            alert('Card successfully deleted.');
            window.location.reload();
        }
    }
    // reusing Trip components
    return (
        <TripMap>
            {creditCards.length === 0 ? <NoTrips>No Credit Cards</NoTrips>
                : creditCards.map(card =>
                    <Trip key={card.card_number}>
                        Card Number: {card.card_number}
                        <CancelTrip onClick={() => handleClick(card.card_number)}>Remove Card</CancelTrip>
                    </Trip>)}
        </TripMap>
    );
};

const MyAccount = () => {
    const { user } = useContext(UserContext);
    const [currentTab, setCurrentTab] = useState("accountDetails");

    const switchToTrips = () => {
        setCurrentTab("trips");
    };

    const switchToAccountDetails = () => {
        setCurrentTab("accountDetails");
    };

    const switchToCreditCards = () => {
        setCurrentTab("creditCards");
    };

    const [myTrips, setMyTrips] = useState([])

    const [creditCards, setCreditCards] = useState([])

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

        const getCreditCards = async () => {
            const response = await axios.get('http://localhost:5005/credit_cards/' + user.email);
            if (response.status !== 200) {
                alert('API Status Error: ' + response.status);
            }
            else {
                setCreditCards(response.data);
            }
        };

        getMyTrips()
        getCreditCards()

    }, [user.email])

    return (
        <PageWrap>
            <Navbar />
            <BgImg src={sky} alt="sky" />
            <PageBody>
                <TabsContainer>
                    <AccountTab currTab={currentTab === "accountDetails"} onClick={switchToAccountDetails}>Account Details</AccountTab>
                    <AccountTab currTab={currentTab === "trips"} onClick={switchToTrips}>My Trips</AccountTab>
                    <AccountTab currTab={currentTab === "creditCards"} onClick={switchToCreditCards}>Saved Credit Cards</AccountTab>
                </TabsContainer>
                <CenterBox>
                    {currentTab === "accountDetails" ? <AccountDetails />
                        : currentTab === "trips" ? <MyTrips myTrips={myTrips}/>
                        : currentTab === "creditCards" ? <CreditCards creditCards={creditCards}/>
                        : null}
                </CenterBox>
            </PageBody>
            <AccountFooter />
        </PageWrap>
    );
};

export default MyAccount;
