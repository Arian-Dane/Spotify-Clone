import React from 'react'
import "./SidebarOption.css"

function SidebarOption({title, Icon}) {
  return (
    <div className='sidebarOption'>
        
        //if title has an icon then render it as a h4
       {Icon? <h4>{title}</h4> : <p>{title}</p>}
      
    </div>
  )
}

export default SidebarOption
