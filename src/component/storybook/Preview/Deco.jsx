import React from 'react'
import './Deco.css'
function Deco(props) {
  return (
    <div className='center'>
      {props.children}
    </div>
  )
}

export default Deco
