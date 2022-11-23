import React, {useState, useMemo, useEffect} from "react";
import "./App.css";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages";
import SigninPage from "./pages/signin";
import SignupPage from "./pages/signup";
import Booking from "./components/BookingFlights";
import {UserContext, PassengerContext, FlightContext} from "./components/UserContext";
import ConfirmationNumPage from "./pages/confirmationnum";
import FlightInfo from "./pages/FlightInfo";
import MyAccount from "./pages/MyAccount";
import Error from "./pages/Error";
import ReviewTrip from "./pages/ReviewTrip";
import About from "./pages/About";
import TermsOfService from "./pages/TermsOfService";
import PrivacyPolicy from "./pages/PrivacyPolicy";


const App = ()  => {
    const [user, setUser] = useState(null);
    const userMemo = useMemo(() => ({ user, setUser }), [user, setUser]);

    const [passengerList, setPassengerList] = useState(null);
    const passengerMemo = useMemo(() => ({ passengerList, setPassengerList }), [passengerList, setPassengerList]);

    const [currentFlight, setCurrentFlight] = useState(null);
    const flightMemo = useMemo(() => ({ currentFlight, setCurrentFlight }), [currentFlight, setCurrentFlight]);

    useEffect(() => {
        const data = localStorage.getItem("user");
        if (data) {
            setUser(JSON.parse(data));
        }
    }, [])

    useEffect(() => {
        if (user) {
            localStorage.setItem("user", JSON.stringify(user))
        }
    }, [user])

    return (
        <Router>
            <UserContext.Provider value={userMemo}>
                <PassengerContext.Provider value={passengerMemo}>
                    <FlightContext.Provider value={flightMemo}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/sign-in" element={user ? <Error /> : <SigninPage />} />
                            <Route path="/sign-up" element={user ? <Error /> : <SignupPage />} />
                            <Route path="/book" element={<Booking />} />
                            <Route path="/my-account" element={user ? <MyAccount /> : <Error />} />
                            <Route path="/trips" element={<ConfirmationNumPage />} />
                            <Route path="/trips/:confirmation_no" element={<FlightInfo />} />
                            <Route path="/book/trip" element={user && passengerList ? <ReviewTrip /> : <Error />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/terms-of-service" element={<TermsOfService />} />
                            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                        </Routes>
                    </FlightContext.Provider>
                </PassengerContext.Provider>
            </UserContext.Provider>
        </Router>
    );
}

export default App;