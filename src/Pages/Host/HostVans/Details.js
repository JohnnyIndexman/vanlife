import React from 'react'
import { useOutletContext } from 'react-router-dom'

function Details() {
  const {van} = useOutletContext()
  return (
    <div className='details1'>
        <h3><span>Name: </span> {van.title}</h3>
        <br/>
        <h3><span>Category: </span> {van.type}</h3>
        <br/>
        <h3><span>Description: </span> {van.description}</h3>
        <br/>
        <h3><span>Visibility: </span>Public</h3>
    </div>
  )
}

export default Details