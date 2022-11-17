import React, {useState, useMemo, useEffect} from "react";
import "./App.css";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages";
import SigninPage from "./pages/signin";
import SignupPage from "./pages/signup";
import Booking from "./components/BookingFlights";
import {UserContext, PassengerContext} from "./components/UserContext";
import ConfirmationNumPage from "./pages/confirmationnum";
import MyAccount from "./pages/MyAccount";
import Error from "./pages/Error";


const App = ()  => {
    const [user, setUser] = useState(null)
    const userMemo = useMemo(() => ({ user, setUser }), [user, setUser]);
    const [passengerList, setPassengerList] = useState(null)

    const passengerMemo = useMemo(() => ({ passengerList, setPassengerList }), [passengerList, setPassengerList]);

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
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/sign-in" element={user ? <Error /> : <SigninPage />} />
                    <Route path="/sign-up" element={user ? <Error /> : <SignupPage />} />
                    <Route path="/book" element={<Booking />} />
                    <Route path="/my-account" element={user ? <MyAccount /> : <Error />} />
                    <Route path="/trips" element={<ConfirmationNumPage />} />
                    <Route path="/book/trip" element={<Error />} />
                </Routes>
            </PassengerContext.Provider>
        </UserContext.Provider>
    </Router>
    );
}

export default App;