import Image from "next/image";
import React from "react";
import Icon from "../lib/constants/icons";
import { Input } from "./ui/input";

const HeaderSearch = ({ currentPath }: { currentPath: string }) => {

  return (
    <div className="flex items-center">
      <Input
        className="text-sm  w-full md:w-[25em] border-[1px] bg-white border-gray-300 px-12"
        placeholder='search anything...'
      />
    </div>
  );
};

export default HeaderSearch;
