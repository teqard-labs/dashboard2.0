import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import RadialProgressBar from '../components/RadialProgressBar'
import Sidebar from '../partials/Sidebar';
import Header from '../partials/Header';
import WelcomeBanner from '../partials/dashboard/WelcomeBanner';
import DashboardAvatars from '../partials/dashboard/DashboardAvatars';
import FilterButton from '../partials/actions/FilterButton';
import Datepicker from '../partials/actions/Datepicker';

import Placeholder from "../images/ph.png";

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const OxyTonnes = 6;
  const People = 4685;
  const Carbon = 2;

  const buttonData = [
    { id: 1, imageUrl: Placeholder, yvalue: 120, cvalue: 0.2 },
    { id: 2, imageUrl: Placeholder, yvalue: 100, cvalue: 0.53 },
    { id: 3, imageUrl: Placeholder, yvalue: 130, cvalue: 0.9 },
    { id: 4, imageUrl: Placeholder, yvalue: 180, cvalue: 0.38 },
    { id: 5, imageUrl: Placeholder, yvalue: 200, cvalue: 0.6 },
  ];

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
            {/* Welcome banner */}
            {/* <WelcomeBanner /> */}

            {/* Dashboard actions */}
            <div className="sm:flex sm:justify-between sm:items-center mb-8">
              {/* Left: Avatars */}
              <DashboardAvatars />

              {/* Right: Actions */}
              <div className="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2">
                {/* Filter button */}
                <FilterButton />
                {/* Datepicker built with flatpickr */}
                <Datepicker />
                {/* Add view button */}
                <button className="btn bg-indigo-500 hover:bg-indigo-600 text-white">
                  <svg className="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                    <path d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                  </svg>
                  <span className="hidden xs:block ml-2">Add view</span>
                </button>
              </div>
            </div>

            {/* Cards */}
            <div className="flex">
              <div className="grid grid-cols-3 gap-8 gap-x-16">
                {buttonData.map((button) => (
                  <div key={button.id} className="relative">
                    {/* Button */}
                    <Link to={`/dashboard2.0/${button.id}/`}>
                    <button className="round-6 button1 mb-4 custom-button relative">
                      <img src={button.imageUrl} className='scale-75' alt={`PH ${button.id}`} />
                      {/* Small top-left button */}
                    </button>
                    </Link>
                    <button className="absolute top-3 round-6 -left-3 w-14 h-14 custom-mini-button bg-[#a6ff00] text-black font-semibold">{button.yvalue} Kg/Month</button>
                    {/* Small bottom-right button */}
                    <button className="absolute bottom-5 round-6 right-0 w-14 h-14 custom-mini-button bg-[#000000] text-white font-semibold">{button.cvalue} Kg CO2e</button>
                  </div>
                ))}
              </div>
            </div>

            {/* Radial Progress Bar */}
            <div className="flex flex-col fixed bottom-[30%] right-[5%] scale-100">
              <RadialProgressBar/>  
          </div>

      </div>
    </main>
        {/* Rectangle box at the bottom center */ }
  <div className="fixed bottom-4 left-[25%] rounded-full bg-gray-200 h-16 w-[50%] flex justify-center items-center shadow-lg">
    <div className="flex space-x-10">
      {/* First section */}
      <div className="flex-1 text-center border-r border-gray-300 pr-4">
        <h4 className="text-xl font-semibold">Section 1</h4>
        <p>Produces {OxyTonnes} Tonnes of Oxygen</p>
      </div>
      {/* Second section */}
      <div className="flex-1 text-center border-r border-gray-300 pr-4">
        <h4 className="text-xl font-semibold">Section 2</h4>
        <p>Allows {People} people to breath for an entire day </p>
      </div>
      {/* Third section */}
      <div className="flex-1 text-center">
        <h4 className="text-xl font-semibold">Section 3</h4>
        <p>Stores {Carbon} tons of Carbon</p>
      </div>
    </div>
  </div>
      </div >
    </div >
  );
}

export default Dashboard;
