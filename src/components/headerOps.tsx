import { useSideBarToggle } from "@/hooks/useSidebarToggle";
import { routes } from "@/lib/constants";
import Image from "next/image";
import React from "react";
import Icon from "../lib/constants/icons";

const HeaderOps = ({ currentPath }: { currentPath: string }) => {

  const renderHeaderOps = () => {
    const matchedItem = routes.sidebarItems.find((item) =>item.path === currentPath);
    if (matchedItem) {
      switch (matchedItem) {
      case routes.sidebarItems[0]:
        return (
          <div className={`flex flex-col md:flex-row items-center gap-2 md:gap-4 pr-6`}>
          <div className="flex items-center gap-4">
            <span className="whitespace-nowrap">30 days</span>
            <Image src={Icon.arrowDown} alt="Arrow down" />
          </div>
          <div className="rounded-xl">
            <span className="bg-[#428AF5] p-2 rounded">Download</span>
          </div>
          </div>
        );
      case routes.sidebarItems[1]:
        return (
          <div className="flex gap-4 items-center">
            <div>
           
            </div>
        </div>
        );
      case routes.sidebarItems[2]:
        return <h2 className="whitespace-nowrap">Order Type</h2>;
      case routes.sidebarItems[3]:
        return <h2 className="whitespace-nowrap">Product Category</h2>;
      case routes.sidebarItems[4]:
        return (
        <div>
        </div>
        );
      case routes.sidebarItems[5]:
        return (
        <div>
        </div>
        );
      case routes.sidebarItems[6]:
        return <h2 className="whitespace-nowrap">Help</h2>;
      default:
        return null;
    }
  };
  return null;
};

  return <div className={`${currentPath === "/helpcentre" ? "mr-0": "pl-5"}`}>{renderHeaderOps()}</div>;
};

export default HeaderOps;
