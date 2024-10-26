"use client";

import { useSideBarToggle } from "@/hooks/useSidebarToggle";
import Image from "next/image";
import React from "react";
import Icon from "../lib/constants/icons";
import SidebarNav from "./sidebarNav";

const Sidebar = () => {
  const { isSidebarVisible } = useSideBarToggle();

  return (
    <div
      className={`bg-white fixed top-0 left-0 z-50 h-screen w-[20rem] transition-all duration-300 ease-in-out border-r border-gray-300 ${isSidebarVisible ? "translate-x-0" : "-translate-x-full"
    } md:translate-x-0 md:block`}
    >
      <div className="m-6 pb-10 flex justify-between items-center">
        <div className="flex gap-3">
          <div>
            <Image src={Icon.avatar} alt="User Avatar" />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold">Alexis Olayinka</span>
            <Image src={Icon.arrowDown} alt="Avatar Icon" />
          </div>
        </div>
        <div>
          <Image src={Icon.notification} alt="Notification" />
        </div>
      </div>
      <SidebarNav />
    </div>
  );
};

export default Sidebar;
