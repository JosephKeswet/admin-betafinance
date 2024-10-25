'use client'

import { usePathname } from 'next/navigation';
import React from 'react'
import HeaderName from './headerName';
import HeaderOps from './headerOps';
import HeaderSearch from './headerSearch';

const OverHead = () => {
  const currentPath = usePathname();
  return (
    <div className='pr-8'>
        <div className="fixed top-0 z-40 w-full pt-3 flex justify-between items-center pl-[5rem] md:pl-[23rem]">
            <HeaderName />
           <HeaderSearch  currentPath={currentPath}/>
            <HeaderOps currentPath={currentPath} />
        </div>
    </div>
  )
}

export default OverHead