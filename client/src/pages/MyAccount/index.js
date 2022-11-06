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
    NoTrips
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
    return (
        <TripMap>
            {myTrips.length === 0 ? <NoTrips>No Trips</NoTrips>
                : myTrips.map(trip => <Trip key={trip.flightno}>
                    Flight Number: {trip.flightno}, Confirmation Number: {trip.confirmation_no}
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

    const switchToAdminView = () => {
        setCurrentTab("adminView");
    };

    const [myTrips, setMyTrips] = useState([])

    useEffect(() => {
        const getMyTrips = async () => {
            const response = await axios.get('http://localhost:5000/trips/' + user.email);
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
                <TabsContainer>
                    <AccountTab currTab={currentTab === "accountDetails"} onClick={switchToAccountDetails}>Account Details</AccountTab>
                    <AccountTab currTab={currentTab === "trips"} onClick={switchToTrips}>My Trips</AccountTab>
                    {user.type === 'admin'
                        && <AccountTab currTab={currentTab === "adminView"} onClick={switchToAdminView}>Admin View</AccountTab>}
                </TabsContainer>
                <CenterBox>
                    {currentTab === "accountDetails" ? <AccountDetails />
                        : currentTab === "trips" ? <MyTrips myTrips={myTrips}/>
                        : currentTab === "adminView" && user.type === 'admin' ? <h1>Admin View</h1>
                        : null}
                </CenterBox>
            </PageBody>
            <AccountFooter />
        </PageWrap>
    );
};

export default MyAccount;
