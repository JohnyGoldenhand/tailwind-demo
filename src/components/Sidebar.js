import React from 'react'
import SidebarElement from './SidebarElement'

function Sidebar() {
  return (
    <div className='fixed top-0 left-0 h-screen bg-gray-800 w-[10%] text-gray-500 space-y-7'>
        <SidebarElement number='1' />
        <SidebarElement number='2' />
        <SidebarElement number='3' />
        <SidebarElement number='4' />
        <SidebarElement number='5' />
    </div>
  )
}

export default Sidebar