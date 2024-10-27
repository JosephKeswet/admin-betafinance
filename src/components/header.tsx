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
  const { isSidebarVisible } = useSideBarToggle();
  const currentPath = usePathname();

  return (
    <div className={`bg-white sticky top-0 grid grid-cols-1 place-items-center h-[21vh] md:h-[8vh] w-full z-30 md:pr-8 transition-all duration-300 ease-in-out pl-5 md:pl-[13rem]`}>
      <div className="w-full top-0 z-30 grid grid-cols-2 md:grid-cols-9 place-content-evenly gap-2">
        <div className={`col-span-1 flex justify-between transition-all duration-300 ease-in-out ${isSidebarVisible ? 'pl-0 sm:pl-[17rem]' : 'pl-0'} md:pl-5`}>
          {``}
        </div>

        <div className="col-span-1 md:col-span-2 flex justify-end md:justify-normal items-center pr-6 md:pr-0">
          <HeaderName />
        </div>

        <div className="col-span-1 md:col-span-3 flex justify-start md:justify-normal items-center">
          <HeaderSearch currentPath={currentPath} />
        </div>

        <div className="col-span-1 md:col-span-3 flex justify-end md: items-center">
          <HeaderOps currentPath={currentPath} />
        </div>
      </div>
    </div>
  );
};

export default Header;
