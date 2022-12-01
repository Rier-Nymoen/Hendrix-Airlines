import React from 'react';
import HeroSection from "./HeroSection";
import InfoSection from "./InfoSection";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Home = () => {
    return (
        <>
            <Navbar />
            <HeroSection />
            <InfoSection />
            <Footer />
        </>
    );
};

export default Home;