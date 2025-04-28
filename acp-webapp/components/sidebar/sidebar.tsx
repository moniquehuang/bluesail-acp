import React from 'react';
import './sidebar.css';

const Sidebar = () => {
    return (
        <nav className="sidebar">
            <div className="dashboard">Dashboard</div>
            <div className="section-title">My Investments</div>
            <div className="sub-item">Space Tech</div>
            <div className="sub-item">Cyber 2021</div>
            <div className="sub-item">Fintech 2020</div>
            <div className="sub-item">Software 2021</div>
            <div className="section-title">All Funds View</div>
            <div className="section-title">Tax Documents</div>
            <div className="section-title">FAQs</div>
            <div className="section-title">Settings</div>
        </nav>
    );
};

export default Sidebar;