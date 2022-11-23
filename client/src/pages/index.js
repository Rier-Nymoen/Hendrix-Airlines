import React from 'react';
import HeroSection from "../components/HeroSection";
import InfoSection from "../components/InfoSection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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