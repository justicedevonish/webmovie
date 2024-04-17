import React from 'react'
import './button.css'

function Button({icon,name,color='#ffffff',backgroundColor ='#ff3700'}) {
  return (
    <a href="#" className="mainButton" style={{color: color, background: backgroundColor}}>
        {icon}{name}</a>
  )
}

export default Button