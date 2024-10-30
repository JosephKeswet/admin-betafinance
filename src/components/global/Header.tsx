"use client";

import { useSideBarToggle } from "@/hooks/useSidebarToggle";
import { usePathname } from "next/navigation";
import React from "react";
import Icon from "../../lib/constants/icons";
import Image from "next/image";
import { routes } from "@/lib/constants";
import HeaderSearch from "./HeaderSearch";
import HeaderOps from "./HeaderOps";

const Header = () => {
  const { isSidebarVisible } = useSideBarToggle();
  const pathname = usePathname();

  return (
    <div className={`bg-white w-full p-6 border-b sticky top-0 z-40`}>
      <div className="flex items-center justify-between">
        <div>
          {routes.sidebarItems.map((item, index) => (
            <div key={index}>
              <h2 className="text-xl font-bold">
                {pathname === item.path && <div className="">{item.title}</div>}
              </h2>
            </div>
          ))}
        </div>
        <HeaderSearch currentPath={pathname} />
        <HeaderOps currentPath={pathname} />
      </div>
    </div>
  );
};

export default Header;
