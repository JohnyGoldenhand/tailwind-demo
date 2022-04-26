import React, { useState } from 'react'
import SidebarElement from './SidebarElement'
import {HomeIcon, HeartIcon, AnnotationIcon, CogIcon} from '@heroicons/react/outline'



function Sidebar() {
  const [active, setActive] = useState(null);



  const icons = [
  {icon:<HomeIcon/>,
    id: 1,
    text:'HOME'},
  {icon:<HeartIcon/>,
    id: 2,
    text:'Favourites'},
  {icon:<AnnotationIcon/>,
    id: 3,
    text:'Messages'},
  {icon:<CogIcon/>,
    id: 4,
    text:'Settings'}]


  return (
    <div className='fixed top-0 left-0 h-screen m-0
    bg-gray-800 w-32 text-gray-500 
    space-y-7  flex flex-col'
    >
      {icons.map(({id, ...otherIconProps}, )=> (
        <SidebarElement key={id} {...otherIconProps} className='w-6 h-6'/>
      ))}
    </div>
  )
}

export default Sidebar
