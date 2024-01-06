import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
  const history = useNavigate()
  const handleClick = () =>{
    history('/vans')
  }
  return (
    <div className='home'>
      <h1 className='home-h1'>
        You got the travel<br/> 
        plans, we got the travel vans.
      </h1>
      <p className='home-p'>
      Add adventure to your life by joining the<br/>
       #vanlife movement. Rent the perfect van to <br/>
       make your perfect road trip.</p>
       <button onClick={handleClick}>
        Find your van</button>
    </div>
  )
}

export default Home