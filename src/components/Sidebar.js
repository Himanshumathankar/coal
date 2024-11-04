import React from "react";
import "../styles/Sidebar.css"; // Sidebar CSS styles

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2>Dashboard</h2>
            <nav>
                <a href="#home">Home</a>
                <a href="#statistics">Statistics</a>
                <a href="#reports">Reports</a>
                <a href="#settings">Settings</a>
            </nav>
        </div>
    );
};

export default Sidebar;
