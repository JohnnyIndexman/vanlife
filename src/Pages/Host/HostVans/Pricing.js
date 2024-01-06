import React from 'react'
import { useOutletContext } from 'react-router-dom'

function Pricing() {
  const { van } = useOutletContext()
  return (
    <div className='pricing'>
        <h3>{van.price}</h3>
    </div>
  )
}

export default Pricing