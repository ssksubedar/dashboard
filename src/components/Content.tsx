"use client"
import { cn } from '@/libs/utils';
import React from 'react'

type props = {
    showSidebar: boolean;
  };

const Content = ({showSidebar}:props) => {
  return (
    <div className={cn('py-14 pr-4 w-full bg-gray-400 h-screen overflow-y-auto', showSidebar ? "pl-60":"pl-12")}>
        <div className='h-64 bg-yellow-100 flex items-start justify-between'>
        <div>
            left
        </div>
        <div>
            Right
        </div>
        </div>
        <div className='h-64 bg-yellow-100 flex items-start justify-between'>
        <div>
            left
        </div>
        <div>
            Right
        </div>
        </div>
        <div className='h-64 bg-yellow-100 flex items-start justify-between'>
        <div>
            left
        </div>
        <div>
            Right
        </div>
        </div>
        
    </div>
  )
}

export default Content;
