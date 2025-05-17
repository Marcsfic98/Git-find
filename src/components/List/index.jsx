import React from 'react'
import './style.css'
const ItenList = ({title , description,link}) => {
  return (
    <div className='item-list'>
      <strong>{title}</strong>
      <br/>
      <br/>
      <a target='blank' href={link}>{link}</a>
      <p>{description}</p>
      <hr/>
    </div>
  )
}

export {ItenList}