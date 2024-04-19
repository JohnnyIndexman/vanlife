import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'


function Hostlayout() {
    const styleNav = {
        fontWeight: 'bold',
        textDecoration: 'underline',
        color: '#161616'
      }


    return (
        <div className='host-layout'>
            <nav>
                <NavLink
                 to='.'
                 end
                 style={({ isActive }) => isActive ? styleNav : null}
                 >
                    Dashboard
                 </NavLink>
                <NavLink
                 to='/host/reviews'
                 style={({ isActive }) => isActive ? styleNav : null}
                 >
                    Reviews
                 </NavLink>
                <NavLink
                 to='/host/income'
                 style={({ isActive }) => isActive ? styleNav : null}
                 >
                 Income
                 </NavLink>
                 <NavLink
                 to='/host/hostvan'
                 style={({ isActive }) => isActive ? styleNav : null}
                 >
                 Host
                 </NavLink>
            </nav>
            <Outlet />
        </div>
    )
}

export default Hostlayout