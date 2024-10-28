import { useSideBarToggle } from "@/hooks/useSidebarToggle";
import { routes } from "@/lib/constants";
import Image from "next/image";
import React from "react";
import { ChevronDown, Download } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "../ui/button";

const HeaderOps = ({ currentPath }: { currentPath: string }) => {
  const renderHeaderOps = () => {
    const matchedItem = routes.sidebarItems.find(
      (item) => item.path === currentPath,
    );
    if (matchedItem) {
      switch (matchedItem) {
        case routes.sidebarItems[0]:
          return (
            <div
              className={`flex flex-col md:flex-row items-center gap-2 md:gap-4 pr-6`}
            >
              <Select>
                <SelectTrigger className="border-0">
                  <SelectValue placeholder="30 days" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <div className="rounded-xl">
                <Button className="bg-primary-light text-primary hover:bg-primary-light/40">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>
            </div>
          );
        case routes.sidebarItems[1]:
          return (
            <div className="flex gap-4 items-center">
              <div
                className={`flex flex-col md:flex-row items-center gap-2 md:gap-4 pr-6`}
              >
                <Select>
                  <SelectTrigger className="border-0">
                    <SelectValue placeholder="30 days" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Fruits</SelectLabel>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="banana">Banana</SelectItem>
                      <SelectItem value="blueberry">Blueberry</SelectItem>
                      <SelectItem value="grapes">Grapes</SelectItem>
                      <SelectItem value="pineapple">Pineapple</SelectItem>
                    </SelectGroup> 
                  </SelectContent>
                </Select>
                <div className="rounded-xl">
                  <Button className="bg-primary-light text-primary hover:bg-primary-light/40">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </Button>
                </div>
              </div>
            </div>
          );
        case routes.sidebarItems[2]:
          return (
            <div
              className={`flex flex-col md:flex-row items-center gap-2 md:gap-4 pr-6`}
            >
              <div className="rounded-xl">
                <Button className="bg-primary-light text-primary hover:bg-primary-light/40">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>
            </div>
          );
        case routes.sidebarItems[3]:
          return (
            <div
              className={`flex flex-col md:flex-row items-center gap-2 md:gap-4 pr-6`}
            >
              <div className="rounded-xl">
                <Button className="bg-primary-light text-primary hover:bg-primary-light/40">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>
            </div>
          );
        case routes.sidebarItems[4]:
          return (
            <div
              className={`flex flex-col md:flex-row items-center gap-2 md:gap-4 pr-6`}
            >
              <Select>
                <SelectTrigger className="border-0">
                  <SelectValue placeholder="30 days" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <div className="rounded-xl">
                <Button className="bg-primary-light text-primary hover:bg-primary-light/40">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>
            </div>
          );
        case routes.sidebarItems[5]:
          return (
            <div
              className={`flex flex-col md:flex-row items-center gap-2 md:gap-4 pr-6`}
            >
              <Select>
                <SelectTrigger className="border-0">
                  <SelectValue placeholder="30 days" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Fruits</SelectLabel>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <div className="rounded-xl">
                <Button className="bg-primary-light text-primary hover:bg-primary-light/40">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>
            </div>
          );
        case routes.sidebarItems[6]:
          return (
            <div
              className={`flex flex-col md:flex-row items-center gap-2 md:gap-4 pr-6`}
            >
              <div className="rounded-xl">
                <Button className="bg-primary-light text-primary hover:bg-primary-light/40">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
              </div>
            </div>
          );
        default:
          return null;
      }
    }
    return null;
  };

  return (
    <div className={`${currentPath === "/helpcentre" ? "mr-0" : "pl-5"}`}>
      {renderHeaderOps()}
    </div>
  );
};

export default HeaderOps;
