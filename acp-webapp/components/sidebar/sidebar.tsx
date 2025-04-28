"use client";

import React from 'react';
import './sidebar.css';

const Sidebar = ({ setActiveComponent }: { setActiveComponent: (component: string) => void }) => {
    return (
        <nav className="sidebar">
            <div className="section-title" onClick={() => setActiveComponent('Dashboard')}>Dashboard</div>
            <div className="section-title" onClick={() => setActiveComponent('MyInvestments')}>My Investments</div>
            <div className="section-title" onClick={() => setActiveComponent('AllFundsView')}>All Funds View</div>
            <div className="section-title" onClick={() => setActiveComponent('TaxDocuments')}>Tax Documents</div>
            <div className="section-title" onClick={() => setActiveComponent('FAQs')}>FAQs</div>
            <div className="section-title" onClick={() => setActiveComponent('Settings')}>Settings</div>
        </nav>
    );
};

export default Sidebar;