import React from 'react'

function SidebarElement(props) {
  return (
    <div className='hover:text-white first: mt-7 cursor-pointer'>
        {props.number}
    </div>
  )
}

export default SidebarElement