import React from 'react'
import './Bar.scss'

export default function Bar({width, color}) {

  const barStyle = {
    width: width || '0%',
    backgroundColor: color || 'yellow'
  }

  if (parseInt(width) < 20) {
    barStyle.backgroundColor = 'red'
  }

  return <div className="bar-wrapper">

  <div style={barStyle} className="bar"></div>
  </div>
}
