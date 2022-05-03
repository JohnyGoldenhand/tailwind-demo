import React from 'react'
import {useState} from 'react'

function SidebarElement({icon, text}) {
  const [isActive, setActive] = useState(false);
  const toogleClass = () => {
    setActive(!isActive);
  }

  return (
    <div>
    <button className={isActive ? `active sidebar-element` :  `sidebar-element group activeHover `} onClick={toogleClass}>
        {icon}
        <span className='sidebar-tooltip group-hover:scale-100'>
          {text}
        </span>
    </button>
    </div>
  )
}

export default SidebarElement