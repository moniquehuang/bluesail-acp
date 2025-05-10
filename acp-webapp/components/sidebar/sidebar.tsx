"use client";

import React from 'react';
import './sidebar.css';

const Sidebar = ({ setActiveComponent }: { setActiveComponent: (component: string) => void }) => {
    return (
        <nav className="sidebar">
            <div className="section-title" onClick={() => setActiveComponent('Home')}>Home</div>
            <div className="section-title" onClick={() => setActiveComponent('Investments')}>Investments</div>
            <div className="section-title" onClick={() => setActiveComponent('FAQs')}>FAQs</div>
            <div className="section-title" onClick={() => setActiveComponent('Settings')}>Settings</div>
        </nav>
    );
};

export default Sidebar;