import React, {useContext, useState} from 'react';
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
    BgImg
} from "./MyAccountElements";
import {useNavigate} from "react-router-dom";
import sky from "../../images/sky.jpg";


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
                        : currentTab === "trips" ? <h1>Trips</h1>
                        : currentTab === "adminView" && user.type === 'admin' ? <h1>Admin View</h1>
                        : null}
                </CenterBox>
            </PageBody>
            <AccountFooter />
        </PageWrap>
    );
};

export default MyAccount;
