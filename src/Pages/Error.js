import React from 'react'
import { useNavigate } from 'react-router-dom'

function Error() {
const navigate = useNavigate()
 const handleSubmit = () =>{
    navigate('/')
 }
  return (
    <div className='error-page'>
        <h1>Sorry, the page you are looking for was not found.</h1>
        <button onClick={handleSubmit}>Return to Home</button>
    </div>
  )
}

export default Error