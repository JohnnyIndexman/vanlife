import { Link, useLoaderData, useSearchParams, redirect, useNavigate} from 'react-router-dom'
import VanInfo from './VanInfo'
import { authentication } from '../Components/authentication'
import { useEffect } from 'react';


const vans = VanInfo().vans

export async function loader(){
  try{
    await authentication()
    console.log('Data loaded successfully');
    return vans
  }catch( error ){
  console.log(error, 'errors')
  return redirect('/login')
  }
}




function Vans() {

  
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const typeFilter = searchParams.get('type');

  const vansData = useLoaderData();
  const vans = vansData || [];

  useEffect(() => {
    const handleAuthentication = async () => {
      try {
        await authentication();
      } catch (error) {
        console.log(error, 'errors');
        navigate('/login');
      }
    };

    handleAuthentication();
  }, [navigate]);

  const displayVans = typeFilter
    ? vans.filter(van => van.type.toLowerCase() === typeFilter.toLowerCase())
    : vans;

  const display = vans && vans.length > 0 ? (
    displayVans.map(van => (
      <div className='van-title' key={van.id}>
        <Link to={`/vans/${van.id}`}>
          <img src={van.image} alt='van'/>
          <div className='van-info'>
            <h3>{van.title}</h3>
            <p>{van.price}</p>
          </div>
          <i className={`van-type ${van.type} selected`}
            style={{
              backgroundColor: van.type === 'Rugged' ? 'rgb(247, 147, 32)' : 'green',
              boxSizing: 'border-box',
              padding: '5px 20px 5px 20px',
              borderRadius: '5px',
              color: '#fff',
              fontFamily: 'Verdana, Geneva, Tahoma, sans-serif'
            }}>
            {van.type}
          </i>
        </Link>
      </div>
    ))
  ) : (
    <div>No available data.</div>
  );

  return (
    <div className='vans'>
      <h1>Explore our van options</h1>
      <div className='vans-btn-contain'>
        <button
          onClick={() => setSearchParams({ type: 'rugged' })}
          className='vans-rugged'
        >
          Rugged
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
  );
}

export default Vans;