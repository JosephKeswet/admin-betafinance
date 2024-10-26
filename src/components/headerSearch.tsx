import Image from "next/image";
import React from "react";
import Icon from "../lib/constants/icons";

const HeaderSearch = ({ currentPath }: { currentPath: string }) => {

  return (
    <div className="flex items-center">
      <input
        className="rounded-sm text-sm w-[16em]  md:w-[25em] border-[1px] bg-white border-gray-300 p-1.5"
        placeholder='search anything...'
      />
      <span className="text-white md:-ml-[98px]">
        <div className="flex items-center gap-2 m-1 pl-2 pr-3 text-sm">
          <Image className="" src={Icon.toggleClose} alt="search" />
          <h3>Search</h3>
        </div>
      </span>
    </div>
  );
};

export default HeaderSearch;
