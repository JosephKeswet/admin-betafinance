"use client";

import { useSideBarToggle } from "@/hooks/useSidebarToggle";
import Image from "next/image";
import React from "react";
import Icon from "../../lib/constants/icons";
import { ChevronDown } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { usePathname } from "next/navigation";
import { routes } from "@/lib/constants";
import Link from "next/link";

const Sidebar = () => {
  const { isSidebarVisible } = useSideBarToggle();
  const pathname = usePathname();
  const activeLink = "text-primary bg-primary-light ";
  const inactiveLink = "text-gray-400";

  const firstPartItems = routes.sidebarItems.slice(0, 3);
  const middlePartItem = routes.sidebarItems.slice(3, 4);
  const lastPartItems = routes.sidebarItems.slice(4);

  return (
    <div
      className={`bg-white border-r w-[250px] h-screen flex flex-col justify-between `}
    >
      <section className="flex flex-col gap-4">
        <div
          className={` p-6  flex justify-between items-center border-b ${isSidebarVisible ? "mt-8" : ""}`}
        >
          <div
            className={`w-auto flex gap-3 ${isSidebarVisible ? "mt-6" : ""}`}
          >
            <div>
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-bold">Alexis Olayinka</span>
              <ChevronDown />
            </div>
          </div>
          <div className={`${isSidebarVisible ? "mt-6" : "mt-0"}`}>
            <Image src={Icon.NotificationIcon} alt="Notification" />
          </div>
        </div>
        <div className="flex flex-col gap-4 justify-start  ">
          {firstPartItems.map((item, index) => (
            <Link
              className={`flex gap-4 items-center pl-6 p-3 ${pathname === item.path ? activeLink : inactiveLink}`}
              href={item.path}
              key={index}
            >
              <Image
                src={pathname === item.path ? item.activeIcon : item.icon}
                alt={item.alt}
              />
              <span className="text-sm font-medium">{item.title}</span>
            </Link>
          ))}
          <hr />
          {middlePartItem.map((item, index) => (
            <Link
              className={`flex gap-4 items-center pl-6 p-3 ${pathname === item.path ? activeLink : inactiveLink}`}
              href={item.path}
              key={index}
            >
              <Image
                src={pathname === item.path ? item.activeIcon : item.icon}
                alt={item.alt}
              />
              <span>{item.title}</span>
            </Link>
          ))}
        </div>
      </section>

      <div className=" flex flex-col gap-8">
        <div className="flex flex-col gap-4">
          {lastPartItems.map((item, index) => (
            <Link
              className={`flex gap-4 items-center pl-6 p-3  ${pathname === item.path ? activeLink : inactiveLink}`}
              href={item.path}
              key={index}
            >
              <Image
                src={pathname === item.path ? item.activeIcon : item.icon}
                alt={item.alt}
              />
              <span>{item.title}</span>
            </Link>
          ))}
        </div>
        <div className="text-xl font-bold m-5">
          <h2>Beta Finance</h2>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
