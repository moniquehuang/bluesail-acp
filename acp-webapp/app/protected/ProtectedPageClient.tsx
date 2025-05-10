"use client";

import React, { useState } from 'react';
import ComplexNavbar from '@/components/navbar/navbar'

const ProtectedPageClient = () => {
    return (
        <div>
            <div>
                <ComplexNavbar/>
            </div>
            <div>
                <footer className="text-right text-sm text-gray-600 p-4">Powered by BlueSail AI</footer>
            </div>
        </div>
    );
};

export default ProtectedPageClient;