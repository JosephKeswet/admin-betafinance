import { ReactNode } from 'react'

function Pagewrapper({children} : {children : ReactNode}) {
  return (
    <div className='bg-gray-50 grow text-black pl-[15.5rem] pr-8 z-30'>
        {children}
    </div>
  )
}

export default Pagewrapper