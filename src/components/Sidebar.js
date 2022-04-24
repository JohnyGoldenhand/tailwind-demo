import React from 'react'
import SidebarElement from './SidebarElement'
import {HomeIcon, HeartIcon, AnnotationIcon, CogIcon} from '@heroicons/react/outline'

function Sidebar() {
  return (
    <div className='fixed top-0 left-0 h-screen bg-gray-800 w-[10%] text-gray-500 space-y-7  flex-column'>
        <SidebarElement icon={<HomeIcon className='w-14 '/>} />
        <SidebarElement icon={<HeartIcon className='w-14'/>} />
        <SidebarElement icon={<AnnotationIcon className='w-14'/>} />
        <SidebarElement icon={<CogIcon className='w-14'/>} />
    </div>
  )
}

export default Sidebar
