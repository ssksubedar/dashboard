import { cn } from '@/libs/utils';
import React from 'react'

type props = {
    showSidebar: boolean;
  };

const Bottombar = ({showSidebar}:props) => {

  return (
    <div className={cn("fixed z-50 bottom-0 right-0 bg-red-100",showSidebar ? "w-[calc(100%-14rem)]":"w-[calc(100%-2rem)]")}>
        <div className='flex items-center justify-between py-3 px-4'>
            
            <div>Start</div>
            <div>End</div>
        </div>
      
    </div>
  )
}

export default Bottombar
