import React, {useContext} from 'react';
import {UserContext} from "../../components/UserContext";
import Navbar from "../../components/Navbar";
import {PageBody,
    AccountFooter,
    PageWrap,
    AccountInfoContainer,
    InfoRow,
    InfoText,
    InfoHeader,
    SignOutButton
} from "./MyAccountElements";
import {useNavigate} from "react-router-dom";

const MyAccount = () => {
    const { user, setUser } = useContext(UserContext);

    const navigate = useNavigate()
    const signOut = () => {
        localStorage.removeItem("user");
        setUser(null);
        navigate('/');
    };

    return (
        <PageWrap>
            <Navbar />
            <PageBody>
                <h1>Account Details</h1>
                <AccountInfoContainer>
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
                </AccountInfoContainer>
            </PageBody>
            <AccountFooter />
        </PageWrap>
    );
};

export default MyAccount;
