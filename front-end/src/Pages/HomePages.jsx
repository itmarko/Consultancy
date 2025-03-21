// src/pages/HomePage.js
import React from "react";
import Navbar from "../components/Navbar/Navbar"; // Assuming you have a Navbar component
import Button from "../Components/Button/Button"; // Example of a Button component

const HomePage = () => {
  return (
    <div className="home-page">
      <Navbar />
      <div className="hero-section bg-blue-500 text-white py-20 text-center">
        <h1 className="text-5xl font-bold">Welcome to Our Tech Company</h1>
        <p className="mt-4 text-lg">
          We innovate, create, and help businesses grow with cutting-edge
          technology.
        </p>
        <Button
          label="Learn More"
          className="mt-6 bg-yellow-500 hover:bg-yellow-400 text-white py-2 px-6 rounded-lg"
        />
      </div>
    </div>
  );
};

export default HomePage;
