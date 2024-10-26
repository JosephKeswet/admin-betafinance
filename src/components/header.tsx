'use client';

import { useSideBarToggle } from '@/hooks/useSidebarToggle';
import { usePathname } from 'next/navigation';
import React from 'react';
import HeaderName from './headerName';
import HeaderOps from './headerOps';
import Icon from "../lib/constants/icons";
import Image from 'next/image';
import HeaderSearch from './headerSearch';

const OverHead = () => {
  const { isSidebarVisible, invokeToggleSidebar } = useSideBarToggle();
  const currentPath = usePathname();

  return (
    <div className={`w-full md:pr-8 transition-all duration-300 ease-in-out ${isSidebarVisible ? 'pl-[20rem]' : 'pl-5'}`}>
      <div className="fixed top-0 z-40 w-full pt-3 flex justify-between items-center">
        {/* Container for Toggle Button - Moves Along With Sidebar */}
        <div className={`flex justify-between transition-all duration-300 ease-in-out ${isSidebarVisible ? 'pl-[2rem]' : 'pl-5'} md:pl-5`}>
          <button
            onClick={invokeToggleSidebar}
            className="text-3xl focus:outline-none p-2 bg-gray-200 rounded md:hidden"
          >
            <Image
              src={isSidebarVisible ? Icon.toggleOpen : Icon.toggleClose}
              alt="Toggle Sidebar"
            />
          </button>
        </div>

        <div className="flex-grow flex justify-between items-center md:pl-80">
          <HeaderName />
          {/* <HeaderSearch currentPath={currentPath} /> */}
          <HeaderOps currentPath={currentPath} />
        </div>
      </div>
    </div>
  );
};

export default OverHead;
