import React from 'react'
import { Link, useLoaderData, redirect } from 'react-router-dom'
import VanInfo from '../VanInfo'
import { authentication } from '../../Components/authentication'



const vans = VanInfo().vanshost

export async function loader(){
    try{
        await authentication()
        return vans
    }catch(error){
        console.log(error, 'errors')
    return redirect('/login')
    }
    
}


function HostVans() {
    const vans = useLoaderData()
    const vanes = vans.filter(van => van.hostId)


    const vanHosts = vanes.map(van => (
        <Link key={van.hostId} to={`/host/hostvan/${van.hostId}`}>
        <div className='class1' key={van.hostId}>
           
                <img
                    src={van.image}
                    alt='Van'
    />
                <div className='van-t'>
                    <h3>{van.title}</h3>
                    <p> {van.price}</p>
                </div>
           
        </div>
        </Link>

    ))

    return (

        <div className='host-vans'>

            {vanHosts}
        </div>
    )
}

export default HostVans