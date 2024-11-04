import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css"; // Add your CSS styles here

const Home = () => {
    return (
        <div className="home-container">
            <header className="header">
                <h1 className="title">Carbon Tracker</h1>
                <p className="subtitle">Empowering Indian Coal Mines Towards Sustainability</p>
                <div className="button-container">
                    <Link to="/login" className="btn login-btn">Login</Link>
                    <Link to="/signup" className="btn signup-btn">Sign Up</Link>
                </div>
            </header>
            <main className="main-content">
                <section className="project-overview">
                    <h2>About the Project</h2>
                    <p>
                        The Carbon Tracker web application is designed specifically for Indian coal mines to quantify their carbon footprint and explore pathways to carbon neutrality. Our application provides essential tools for emission estimation, carbon neutrality pathways, and data visualization, aiding the journey towards sustainability.
                    </p>
                </section>
                <section className="features">
                    <h2>Key Features</h2>
                    <ul>
                        <li><strong>Emission Estimation:</strong> Input data on various mining activities to estimate associated carbon emissions.</li>
                        <li><strong>Neutrality Pathways:</strong> Explore different strategies like clean technologies and afforestation to offset emissions.</li>
                        <li><strong>Data Visualization:</strong> Visualize emission trends and the effectiveness of implemented strategies through interactive charts and graphs.</li>
                        <li><strong>User Management:</strong> Secure authentication with Firebase for seamless login and signup.</li>
                    </ul>
                </section>
                <section className="call-to-action">
                    <h2>Join Us in Making a Difference!</h2>
                    <p>Sign up today and take the first step towards a sustainable future for Indian coal mines.</p>
                    <Link to="/signup" className="btn cta-btn">Get Started</Link>
                </section>
            </main>
            <footer className="footer">
                <p>© 2024 Carbon Tracker. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Home;
