// src/pages/Home.js
import React from "react";
import { Link } from "react-router-dom";
import ThreeDCanvas from "../components/ThreeDCanvas"; // Make sure this path is correct
import Navbar from "../components/Navbar"; // Make sure this path is correct
import Footer from "../components/Footer"; // Make sure this path is correct
import "../styles/Home.css";

function Home() {
    return (
        <div className="home-container">
            <Navbar />
            <div className="three-d-container">
                <ThreeDCanvas />
                <div className="home-content">
                    <h1>Welcome to Carbon Tracker</h1>
                    <p>Helping Indian Coal Mines Achieve Carbon Neutrality</p>
                    <div className="home-buttons">
                        <Link to="/login" className="home-button">Login</Link>
                        <Link to="/signup" className="home-button">Sign Up</Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;
