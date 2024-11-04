import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Statistics from "../components/Statistics"; // Summary cards component
import Charts from "../components/Charts"; // Charts component
import "../styles/Dashboard.css"; // Dashboard CSS styles

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <Sidebar />
            <div className="dashboard-content">
                <Header />
                <div className="main-content">
                    <div className="statistics-grid">
                        <Statistics />
                        <Statistics />
                        <Statistics />
                    </div>
                    <Charts />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
