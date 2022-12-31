import React from 'react'
import './Input.css'

function Input(props) {
    const {size="small", placeholder,...rest} = props
  return (
    <div>
        <label>input: </label>

      <input type="text" placeholder={placeholder} className={`input ${size}`} {...rest}/>
    </div>
  )
}

export default Input
