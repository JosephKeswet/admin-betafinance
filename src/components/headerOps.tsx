import { useSideBarToggle } from "@/hooks/useSidebarToggle";
import Image from "next/image";
import React from "react";
import Icon from "../lib/constants/icons";

const HeaderOps = ({ currentPath }: { currentPath: string }) => {
  const { isSidebarVisible } = useSideBarToggle();

  const renderHeaderOps = () => {
    switch (currentPath) {
      case "/":
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
      case "/products":
        return (
          <div className="flex gap-4 items-center">
            <div>
           
            </div>
        </div>
        );
      case "/orders":
        return <h2 className="whitespace-nowrap">Order Type</h2>;
      case "/categories":
        return <h2 className="whitespace-nowrap">Product Category</h2>;
      case "/admin":
        return (
        <div>
        </div>
        );
      case "/deliverycompany":
        return (
        <div>
        </div>
        );
      case "/helpcentre":
        return <h2 className="whitespace-nowrap"></h2>;
      default:
        return null;
    }
  };

  return <div className={`${currentPath === "/helpcentre" ? "mr-0": "pl-5"}`}>{renderHeaderOps()}</div>;
};

export default HeaderOps;
