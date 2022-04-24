import React from 'react'

function SidebarElement({icon, text}) {
  return (
    <button className='sidebar-element group'>
        {icon}

        <span className='sidebar-tooltip group-hover:scale-100'>
          {text}
        </span>
    </button>
  )
}

export default SidebarElement