import React, {useState} from 'react';
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import {homeObjOne} from "../components/InfoSection/Data";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <InfoSection {...homeObjOne}/>
            <Footer />
        </>
    );
};

export default Home;