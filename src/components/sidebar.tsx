"use client";

import { useSideBarToggle } from "@/hooks/use-sidebar-toggle";
import Image from "next/image";
import React, { useState } from "react";
import Icon from "../lib/constants/icons";
import SidebarNav from "./sidebarNav";

const Sidebar = () => {
  const { toggleCollapse } = useSideBarToggle();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <div className="bg-white fixed top-0 left-0 z-50 flex w-[322px] h-screen">
        <div
          className={`flex items-center absolute top-4 w-[90%] left-4 z-50 md:hidden ${
            isSidebarOpen ? "justify-end" : "justify-start pb-7"
          }`}
        >
          <button
            onClick={toggleSidebar}
            className="text-white text-3xl focus:outline-none"
          >
            {isSidebarOpen ? (
              <Image
                src={Icon.toggleOpen}
                alt="Open Menu"
                width={30}
                height={30}
              />
            ) : (
              <Image
                src={Icon.toggleClose}
                alt="Close Menu"
                width={30}
                height={30}
              />
            )}
          </button>
        </div>

        <div
          className={`h-screen full w-[322px] border-r border-gray-300 transform transition-transform duration-300 ease-in-out ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0`}
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
      </div>

      {/* {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 md:hidden"
          onClick={toggleSidebar}
        />
      )} */}
    </>
  );
};

export default Sidebar;
