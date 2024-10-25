import { useSideBarToggle } from '@/hooks/use-sidebar-toggle';
import { ReactNode } from 'react'

function Pagewrapper({children} : {children : ReactNode}) {
  const { toggleCollapse  } = useSideBarToggle();

  return (
    <div className={`bg-gray-50 flex-grow pr-8 z-30 ${toggleCollapse ? 'sm:pl-[5.6rem]': 'sm:pl-[20rem]'}`}>
        {children}
    </div>
  )
}

export default Pagewrapper