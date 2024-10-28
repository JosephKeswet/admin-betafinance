'use client';

import { useSideBarToggle } from '@/hooks/useSidebarToggle';
import { usePathname } from 'next/navigation';
import React from 'react';
import HeaderOps from './HeaderOps';
import HeaderSearch from './HeaderSearch';
import { routes } from '@/lib/constants';

const Header = () => {
  const { isSidebarVisible } = useSideBarToggle();
  const currentRoute = usePathname();

  return (
    <div className={`bg-white sticky top-0 grid grid-cols-1 place-items-center h-[21vh] md:h-[8vh] w-full z-30 md:pr-8 transition-all duration-300 ease-in-out pl-5 md:pl-[13rem]`}>
      <div className="w-full top-0 z-30 grid grid-cols-2 md:grid-cols-9 place-content-evenly gap-2">
        <div className={`col-span-1 flex justify-between transition-all duration-300 ease-in-out ${isSidebarVisible ? 'pl-0 sm:pl-[17rem]' : 'pl-0'} md:pl-5`}>
          {``}
        </div>

        <div className="col-span-1 md:col-span-2 flex justify-end md:justify-normal items-center pr-6 md:pr-0">
        <div>
        {routes.sidebarItems.map((item, index) => (
              <div key={index}>
                  <h2 className="text-3xl sm:text3xl font-bold">
                    {currentRoute === item.path && <div className=''>{item.title}</div>}
                  </h2>
              </div>
            ))}
    </div>
        </div>

        <div className="col-span-1 md:col-span-3 flex justify-start md:justify-normal items-center">
          <HeaderSearch currentPath={currentRoute} />
        </div>

        <div className="col-span-1 md:col-span-3 flex justify-end md: items-center">
          <HeaderOps currentPath={currentRoute} />
        </div>
      </div>
    </div>
  );
};

export default Header;
