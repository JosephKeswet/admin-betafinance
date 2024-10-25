'use client'

import { routes } from '@/lib/constants';
import { usePathname } from 'next/navigation';
import React from 'react'

const HeaderName = () => {
    const currentRoute = usePathname();
  return (
    <div>
        {routes.sidebarItems.map((item, index) => (
              <div key={index}>
                  <h2 className="text-3xl sm:text3xl font-bold">
                    {currentRoute === item.path && <div className=''>{item.title}</div>}
                  </h2>
              </div>
            ))}
    </div>
  )
}

export default HeaderName