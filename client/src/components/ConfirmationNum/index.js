import React, {useState} from 'react';
import {
    PageWrap,
    ConfirmationNumNav,
    HomeLogo,
    ConfirmationNumContainer,
    ImgWrap,
    Img,
    ConfirmationNumContent,
    ConfirmationNumWrapper,
    ConfirmationNumHeader,
    FormWrap,
    ConfirmationNumFooter
} from "./ConfirmationNumElements";
import ConfirmationNumForm from './ConfirmationNumForm';
import computer from '../../images/person_checking_computer.jpg';

const ShowTrip = ({trip}) => {
    return (
        <h1>{trip.flightno}</h1>
    );
};

const ConfirmationNum = () => {
    const [trip, setTrip] = useState(null);

    return (
        <PageWrap>
            <ConfirmationNumNav>
                <HomeLogo to="/">Hendrix Airlines</HomeLogo>
            </ConfirmationNumNav>
            <ConfirmationNumContainer>
                <ImgWrap>
                    <Img src={computer} alt="computer" />
                </ImgWrap>
                <ConfirmationNumContent>
                    <ConfirmationNumWrapper>
                        {trip ? <ShowTrip trip={trip} /> :
                            <>
                                <ConfirmationNumHeader>Enter Your Confirmation Number</ConfirmationNumHeader>
                                <FormWrap>
                                    <ConfirmationNumForm setTrip={setTrip}/>
                                </FormWrap>
                            </>}
                    </ConfirmationNumWrapper>
                    <ConfirmationNumFooter>
                        © 2022 Hendrix Airlines, Inc.
                    </ConfirmationNumFooter>
                </ConfirmationNumContent>
            </ConfirmationNumContainer>
        </PageWrap>
    );
};

export default ConfirmationNum;