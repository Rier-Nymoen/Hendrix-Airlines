import React, {useState, useMemo, useEffect} from "react";
import "./App.css";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages";
import SigninPage from "./pages/signin";
import SignupPage from "./pages/signup";
import Booking from "./components/BookingFlights";
import {UserContext} from "./components/UserContext";


const App = ()  => {
    const [user, setUser] = useState(null)
    const userMemo = useMemo(() => ({ user, setUser }), [user, setUser]);

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
            <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/sign-in" element={<SigninPage />} />
                    <Route path="/sign-up" element={<SignupPage />} />
                    <Route path="/book" element={<Booking />} />
            </Routes>
        </UserContext.Provider>
    </Router>
    );
}

export default App;