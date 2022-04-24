import React from 'react'

function SidebarElement(props) {
  return (
    <div className='hover:text-white first: mt-7 cursor-pointer last:border-b-2 border-gray-500 last:pb-16 flex justify-center'>
        {props.icon}
    </div>
  )
}

export default SidebarElement