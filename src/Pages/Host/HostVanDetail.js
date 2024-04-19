import React from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import VanInfo from '../VanInfo';


function HostVanDetail() {
  const { id } = useParams();
  const vans = VanInfo().vanshost.filter(van => van.hostId === Number(id));

  

  const styleNav = {
    fontWeight: 'bold',
    textDecoration: 'underline',
    color: '#161616'
  };

  return (
    <div className='hostvan-details'>
      <NavLink
        to='..'
        relative='path'
        style={({ isActive }) => (isActive ? styleNav : null)}
      >
        Back to all view.
      </NavLink>

      {vans.map(van => (
        <div className='display-detail' key={van.hostId}>
          <img src={van.image} alt='van' />
          <div className='van-t'>
            <i
              className={`van-type ${van.type} selected`}
              style={{
                backgroundColor:
                  van.type === 'Rugged' ? 'rgb(247, 147, 32)' : 'green',
                boxSizing: 'border-box',
                padding: '5px 20px 5px 20px',
                borderRadius: '5px',
                color: '#fff',
                fontFamily: 'Verdana, Geneva, Tahoma, sans-serif'
              }}
            >
              {van.type}
            </i>
            <h3>{van.title}</h3>
            <p className='price'>{van.price}</p>
          </div>
          <nav>
            <NavLink
              to='.'
              end
              style={({ isActive }) => (isActive ? styleNav : null)}
            >
              Details
            </NavLink>
            <NavLink
              to={`/host/hostvan/${id}/pricing`}
              style={({ isActive }) => (isActive ? styleNav : null)}
            >
              Pricing
            </NavLink>
          </nav>
          <Outlet context={{ van }} />
        </div>
      ))}
    </div>
  );
}

export default HostVanDetail;
