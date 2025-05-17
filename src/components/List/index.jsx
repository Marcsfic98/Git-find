import React from 'react'
import './style.css'
const ItenList = ({title , description}) => {
  return (
    <div className='item-list'>
      <strong>{title}</strong>
      <p>{description}</p>
      <hr/>
    </div>
  )
}

export {ItenList}