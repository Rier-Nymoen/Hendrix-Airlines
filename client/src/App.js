import React from "react";
import "./App.css";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages";
import SigninPage from "./pages/signin";
import SignupPage from "./pages/signup";
import Booking from "./components/BookingFlights";


function App() {
    return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<SigninPage />} />
            <Route path="/sign-up" element={<SignupPage />} />
            <Route path="/book" element={<Booking />} />

        </Routes>
    </Router>
    );
}

export default App;