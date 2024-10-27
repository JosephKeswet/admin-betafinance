'use client';

import { useSideBarToggle } from '@/hooks/useSidebarToggle';
import { usePathname } from 'next/navigation';
import React from 'react';
import HeaderName from './headerName';
import HeaderOps from './headerOps';
import Icon from "../lib/constants/icons";
import Image from 'next/image';
import HeaderSearch from './headerSearch';

const Header = () => {
  const { isSidebarVisible, invokeToggleSidebar } = useSideBarToggle();
  const currentPath = usePathname();

  return (
    <div className={`bg-white sticky top-0 grid grid-cols-1 place-items-center h-[15vh] md:h-[8vh] w-full z-40 md:pr-8 transition-all duration-300 ease-in-out ${isSidebarVisible ? 'pl-5' : 'pl-5'}`}>
      <div className="w-full top-0 z-30 grid grid-cols-2 md:grid-cols-4 place-content-evenly gap-2">
        <div className={`col-span-1 flex justify-between transition-all duration-300 ease-in-out ${isSidebarVisible ? 'pl-[17rem] z-40' : 'pl-0'} md:pl-5`}>
          <button
            onClick={invokeToggleSidebar}
            className="text-3xl focus:outline-none rounded md:hidden"
          >
            <Image
              src={isSidebarVisible ? Icon.toggleOpen : Icon.toggleClose}
              alt="Toggle Sidebar"
            />
          </button>
        </div>

        <div className="col-span-1 flex justify-end md:justify-normal items-center pr-6 md:pr-0">
          <HeaderName />
        </div>

        <div className="col-span-1 hidde flex justify-start md:justify-normal items-center">
          <HeaderSearch currentPath={currentPath} />
        </div>

        <div className="col-span-1 flex justify-end md: items-center">
          <HeaderOps currentPath={currentPath} />
        </div>

        {isSidebarVisible && (
        <div
          className="fixed inset-0 bg-black opacity-50 md:hidden"
        />
      )}
      </div>
    </div>
  );
};

export default Header;
