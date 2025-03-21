// src/pages/AboutPage.js
import React from 'react';
import Navbar from '../components/Navbar/Navbar';  // Navbar for the page

const AboutPage = () => {
    return (
        <div className="about-page">
            <Navbar />
            <section className="about-section py-20 px-6 bg-gray-100 text-center">
                <h1 className="text-4xl font-bold mb-4">About Us</h1>
                <p className="text-lg mb-8">We are a leading technology company providing innovative solutions for businesses.</p>
                <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                <p className="text-lg mb-8">Our mission is to empower businesses through technology and innovation.</p>
                <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
                <p className="text-lg">We envision a future where businesses can leverage cutting-edge technology to grow and succeed.</p>
            </section>
        </div>
    );
};

export default AboutPage;
