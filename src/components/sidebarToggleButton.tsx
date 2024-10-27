'use client';

import { useSideBarToggle } from '@/hooks/useSidebarToggle';
import Image from 'next/image';
import Icon from "../lib/constants/icons";

const SidebarToggleButton = () => {
  const { isSidebarVisible, invokeToggleSidebar } = useSideBarToggle();

  return (
    <button
      onClick={invokeToggleSidebar}
      className="fixed top-5 left-4 z-50 text-3xl focus:outline-none rounded md:hidden pl-1"
    >
      <Image
        src={isSidebarVisible ? Icon.toggleOpen : Icon.toggleClose}
        alt="Toggle Sidebar"
      />
    </button>
  );
};

export default SidebarToggleButton;
