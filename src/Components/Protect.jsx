import React, { useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { authentication } from './authentication'
import Login from '../Pages/Login'



function Protect() {

  // useEffect(() => {
  //   handleAuthentication();
  // }, []);

  return (
    <div>
       {authentication ? <Outlet /> : <Navigate to={<Login/>}/>}
    </div>
  )
}

export default Protect