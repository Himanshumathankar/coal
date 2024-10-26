// src/components/Footer.js
import React from "react";
import "../styles/Footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <p>Contact us: info@carbontracker.com</p>
            <p>&copy; {new Date().getFullYear()} Carbon Tracker. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
