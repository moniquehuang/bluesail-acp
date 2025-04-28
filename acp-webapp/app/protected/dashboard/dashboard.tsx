import React from 'react';

const Dashboard = () => {
return (
    <div>
        <div className="mb-8 grid grid-cols-3 gap-8">
                <div className="col-span-2">
                    <div className="mb-6">
                    <div className="text-gray-500 mb-2">Total Invested</div>
                    <div className="text-4xl font-bold">$275,000</div>
                    </div>
                    <div className="mb-6 grid grid-cols-2 gap-4">
                    <div>
                        <div className="text-gray-500 text-sm mb-1">Number of Funds</div>
                        <div className="text-xl font-bold">4</div>
                    </div>
                    <div>
                        <div className="text-gray-500 text-sm mb-1">Fund Manager</div>
                        <div className="text-xl font-bold">Erik Drewes</div>
                    </div>
                    </div>
                </div>
                <div>
                    <p className="text-xl mb-4">Resources</p>
                    <div className="space-y-2">
                    <div className="items-center justify-between bg-white rounded-md shadow-sm flex p-3">
                        <div className="items-center flex">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="Windframe_j77DheR0M">
                            <path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                        </svg>
                        <span>K-1 Form</span>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="Windframe_OZJx6YN5B">
                        <path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </div>
                    <div className="items-center justify-between bg-white rounded-md shadow-sm flex p-3">
                        <div className="items-center flex">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="Windframe_Kz8OURRrN">
                            <path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                        </svg>
                        <span>Documentation</span>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="Windframe_fUITv0uz6">
                        <path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </div>
                    <div className="items-center justify-between bg-white rounded-md shadow-sm flex p-3">
                        <div className="items-center flex">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="Windframe_efGMWT3GZ">
                            <path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                        </svg>
                        <span>Talk to Fund Manager</span>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" id="Windframe_uQ4xlqm1Z">
                        <path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                    </div>
                    </div>
                </div>
                </div>
                <div>
                <p className="text-3xl mb-6">Fund Allocation</p>
                <div className="space-y-4">
                    <div className="items-center flex">
                    <div className="w-1/4">Space Tech Series C</div>
                    <div className="w-1/2 h-6 bg-blue-800 rounded"></div>
                    <div className="w-1/4 pl-4">$100,000 - 36%</div>
                    </div>
                    <div className="items-center flex">
                    <div className="w-1/4">Cyber 2021 Series A</div>
                    <div className="w-1/2 h-6 bg-blue-600 rounded"></div>
                    <div className="w-1/4 pl-4">$100,000 - 36%</div>
                    </div>
                    <div className="items-center flex">
                    <div className="w-1/4">Fintech 2020 Series B</div>
                    <div className="w-1/2">
                        <div className="w-3/5 h-6 bg-blue-800 rounded"></div>
                    </div>
                    <div className="w-1/4 pl-4">$50,000 - 18%</div>
                    </div>
                    <div className="items-center flex">
                    <div className="w-1/4">Software 2021 Series D</div>
                    <div className="w-1/2">
                        <div className="w-1/4 h-6 bg-blue-200 rounded"></div>
                    </div>
                    <div className="w-1/4 pl-4">$25,000 - 9%</div>
                    </div> 
                </div>
                <div className="items-center mt-6 flex">
                    <div className="items-center mr-4 flex">
                    <div className="w-4 h-4 bg-blue-900 mr-2"></div>
                    <span className="text-sm">Individual</span>
                    </div>
                    <div className="items-center mr-4 flex">
                    <div className="w-4 h-4 bg-blue-700 mr-2"></div>
                    <span className="text-sm">Joint</span>
                    </div>
                    <div className="items-center mr-4 flex">
                    <div className="w-4 h-4 bg-blue-200 mr-2"></div>
                    <span className="text-sm">Trust</span>
                    </div>
                    <div className="items-center flex">
                    <div className="w-4 h-4 bg-blue-500 mr-2"></div>
                    <span className="text-sm">Corporate</span>
                    </div>
                </div>
                </div>
            </div>
    );
};

export default Dashboard;