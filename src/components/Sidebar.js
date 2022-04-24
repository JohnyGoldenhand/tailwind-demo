import React from 'react'
import SidebarElement from './SidebarElement'
import {HomeIcon, HeartIcon, AnnotationIcon, CogIcon} from '@heroicons/react/outline'

function Sidebar() {
  return (
    <div className='fixed top-0 left-0 h-screen m-0
    bg-gray-800 w-32 text-gray-500 
    space-y-7  flex flex-col'>
        <SidebarElement icon={<HomeIcon className='w-14 h-14  '/>} text='HOME'/>
        <SidebarElement icon={<HeartIcon className='w-14 h-14'/>} text='FAVOURITES'/>
        <SidebarElement icon={<AnnotationIcon className='w-14 h-14'/>} text='CHAT'/>
        <SidebarElement icon={<CogIcon className='w-14 h-14 '/>} text='SETTINGS'/>
    </div>
  )
}

export default Sidebar
