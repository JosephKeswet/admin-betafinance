import { routes } from "../lib/constants/routing";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import Icon from "../lib/constants/icons";

const SidebarNav = () => {
    const currentRoute = usePathname();
    const activeLink = 'text-gray-50 bg-[#428AF5] w-full opacity-4 border-[1px] border-r-[#428AF5]';
    const inactiveLink = 'text-gray-400';

  const firstPartItems = routes.sidebarItems.slice(0, 3);
  const middlePartItem = routes.sidebarItems.slice(3, 4);
  const lastPartItems = routes.sidebarItems.slice(4);

  return (
    <nav>
      <div>
        <div className="flex flex-col gap-4 justify-start border-b-[1px] border-gray-300">
          {firstPartItems.map((item, index) => (
            <Link
            className={`flex gap-4 items-center pl-6 p-3 ${currentRoute === item.path ? activeLink : inactiveLink}`}
              href={item.path}
              key={index}
            >
              <Image src={item.icon} alt={item.alt} />
              <span>{item.title}</span>
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-4 justify-start">
          {middlePartItem.map((item, index) => (
            <Link
              className={`flex gap-4 items-center pl-6 p-3 ${currentRoute === item.path ? activeLink : inactiveLink}`}
              href={item.path}
              key={index}
            >
              <Image src={item.icon} alt={item.alt} />
              <span>{item.title}</span>
            </Link>
          ))}
        </div>

        <div className="absolute bottom-0 flex flex-col gap-8 pt-4">
          <div className="flex flex-col gap-4">
            {lastPartItems.map((item, index) => (
              <Link
              className={`flex gap-4 items-center pl-6 p-3 ${currentRoute === item.path ? activeLink : inactiveLink}`}
                href={item.path}
                key={index}
              >
                <Image src={item.icon} alt={item.alt} />
                <span>{item.title}</span>
              </Link>
            ))}
          </div>
          <div className="text-xl font-bold m-5">
            <h2>Beta Finance</h2>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SidebarNav;