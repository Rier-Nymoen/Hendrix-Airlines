import React from "react";
import "./App.css";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages";
import SigninPage from "./pages/signin";
import SignupPage from "./pages/signup";


function App() {
    return (
    <Router>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sign-in" element={<SigninPage />} />
            <Route path="/sign-up" element={<SignupPage />} />
        </Routes>
    </Router>
    );
}

export default App;