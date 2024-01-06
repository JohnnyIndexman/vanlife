import React from 'react'
import { Outlet } from 'react-router-dom'

function Dashboard() {
    return (
        <div>
            <Outlet />
            <h1>Dashboard go here.</h1>
        </div>
    )
}

export default Dashboard