import React from 'react'
import { Link, useLoaderData, useParams, redirect } from 'react-router-dom'
import VanInfo from './VanInfo'
import { authentication } from '../Components/authentication'


const vans = VanInfo().vans
export async function loader() {
  try{
    await authentication()
  return vans
  }catch(error){
    console.log(error, 'errors')
    return redirect('/login')
  }
}

function Vandetails() {
  const vans = useLoaderData()
  const { id } = useParams()
  const vanes = vans.filter(van => van.id === Number(id))

  const vanDetails = vanes.map(van => (
    <div key={van.id} className='div-details'>
      <img src={van.image} alt='Simple and Rugged vans'/>
      <h3>{van.title}</h3>
      <p className='price'>{van.price}</p>
      <p id='describe'>{van.description}</p>
    </div>
  ))

  const style = {
    color: '#000',
    marginBottom: '20px',
    fontFamily: 'Verdana, Geneva, Tahoma, sans-serif'
  }

  return (
    <div className='van-details'>
      <Link
        to='..'
        relative='path'
        style={style}
      >
        Go back
      </Link>
      <div className='van-contain'>
        {/*<img src={image} alt='van'/>
      <h3>Dispatch and Distribution Van</h3>
      <p className='price'>$80/day</p>
      <p id='describe'>Designed for maneuverability
        in congested areas, these vans navigate tight
        spaces while ensuring secure and timely delivery of parcels.
  </p>*/}
        {vanDetails}
        <button>Rent this Van</button>
      </div>

    </div>
  )
}

export default Vandetails