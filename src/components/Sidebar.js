import React, { useState } from 'react'
import SidebarElement from './SidebarElement'
import {HomeIcon, HeartIcon, AnnotationIcon, CogIcon} from '@heroicons/react/outline'


function Sidebar() {
  
  const [appState, setAppState] = useState({
    activeObject: null ,
    icons:[
      {icon:<HomeIcon className='h-12 w-12' />,
        id: 1,
        text:'HOME'},
      {icon:<HeartIcon className='h-12 w-12'/>,
        id: 2,
        text:'Favourites'},
      {icon:<AnnotationIcon className='h-12 w-12'/>,
        id: 3,
        text:'Messages'},
      {icon:<CogIcon className='h-12 w-12'/>,
        id: 4,
        text:'Settings'}]
  })

  const displayAcitve = (objectId) => {
    setAppState(appState.activeObject = objectId)
    console.log(appState.activeObject)
  }

  return (
    <div className='flex h-screen m-0
    bg-gray-800 w-32 text-gray-500 
    space-y-7  flex-col'
    >
      {appState.icons.map(({id, ...otherIconProps}, )=> (
        <SidebarElement  key={id} {...otherIconProps} />
      ))}
    </div>

  )
}

export default Sidebar
