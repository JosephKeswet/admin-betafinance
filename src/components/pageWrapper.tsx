'use client';

import { useSideBarToggle } from '@/hooks/useSidebarToggle';
import { ReactNode } from 'react';

const PageWrapper = ({ children }: { children: ReactNode }) => {
  const { isSidebarVisible } = useSideBarToggle();

  return (
    <div
      className={`bg-gray-50 flex-grow pr-8 z-30 transition-all duration-300 ease-in-out ${
        isSidebarVisible ? 'pl-[20rem]' : 'pl-5'
      } md:pl-[20rem]`}
    >
      {children}
      {isSidebarVisible && (
        <div
          className="fixed inset-0 bg-black opacity-50 md:hidden"
        />
      )}
    </div>
  );
};

export default PageWrapper;
