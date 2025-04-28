"use client";

import React, { useState } from 'react';
import Sidebar from '@/components/sidebar/sidebar';
import MyInvestments from './my-investments/my-investments';
import AllFundsView from './all-funds-view/all-funds-view';
import TaxDocuments from './tax-documents/tax-documents';
import FAQs from './faqs/faqs';

const ProtectedPageClient = () => {
    const [activeComponent, setActiveComponent] = useState<string>('Dashboard');

    const renderActiveComponent = () => {
        switch (activeComponent) {
            case 'Dashboard':
                return <div>Dashboard Content</div>;
            case 'MyInvestments':
                return <MyInvestments />;
            case 'AllFundsView':
                return <AllFundsView />;
            case 'TaxDocuments':
                return <TaxDocuments />;
            case 'FAQs':
                return <FAQs />;
            case 'Settings':
                return <div>Settings Content</div>;
            default:
                return null;
        }
    };

    return (
        <div>
            <div className="flex min-h-screen">
                {/* Sidebar */}
                <div className="w-64 bg-gray-200">
                    <div className="items-center justify-center bg-white flex p-4">
                        <img
                            alt="American Capital Partners Logo"
                            src="https://placehold.co/120x40/FFFFFF/27ae60?text=ACP"
                            className="h-10"
                        />
                    </div>
                    <Sidebar setActiveComponent={setActiveComponent} />
                </div>

                {/* Main Content */}
                <div className="flex-1 p-4">
                    {renderActiveComponent()}
                </div>
            </div>
            <footer className="text-right text-sm text-gray-600 p-4">Powered by BlueSail AI</footer>
        </div>
    );
};

export default ProtectedPageClient;