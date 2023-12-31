import { Link, useLoaderData, useSearchParams } from 'react-router-dom'
import VanInfo from './VanInfo'



const vans = VanInfo().vans

export function loader(){
  return vans
}

function Vans() {
  const vans = useLoaderData()



  const [searchParams, setSearchParams] = useSearchParams()
  const typeFilter = searchParams.get('type')
  const displayVans = typeFilter
    ? vans.filter(van => van.type.toLowerCase() === typeFilter.toLowerCase())
    : vans


  const display = displayVans.map(van => (
    <div className='van-title' key={van.id}>
      <Link to={`/vans/${van.id}`}>
        <img src={van.image} alt='van'/>
        <div className='van-info'>
          <h3>{van.title}</h3>
          <p>{van.price}</p>
        </div>
        <i className={`van-type ${van.type} selected`}
          style={
            {
              backgroundColor: van.type === 'Rugged' ? 'rgb(247, 147, 32)' : 'green',
              boxSizing: 'border-box',
              padding: '5px 20px 5px 20px',
              borderRadius: '5px',
              color: '#fff',
              fontFamily: 'Verdana, Geneva, Tahoma, sans-serif'
            }
          }>
          {van.type}
        </i>
      </Link>
    </div>
  ))

  return (
    <div className='vans'>

      
      <h1>Explore our van options</h1>
      <div className='vans-btn-contain'>
        <button
          onClick={() => setSearchParams({ type: 'rugged' })}
          className='vans-rugged'
        >Rugged
        </button>
        <button
          onClick={() => setSearchParams({ type: 'simple' })}
          className='vans-simple'
        >
          Simple
        </button>


        {typeFilter ? (
          <button
            onClick={() => setSearchParams({})}
            className='vans-all'
          >
            All
          </button>
        ) : null}
      </div>
      <div className='van-list'>
        {display}
      </div>

    </div>
  )
}

export default Vans