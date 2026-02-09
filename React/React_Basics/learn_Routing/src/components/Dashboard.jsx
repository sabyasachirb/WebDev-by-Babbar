import React from 'react'
import { NavLink, Outlet } from 'react-router'
const Dashboard = () => {
  return (
    <div>
      Dashboard Page
      <ul>
        <li>
           <NavLink to={'/dashboard/courses'}>Courses</NavLink> 
        </li>
        <li>
           <NavLink to={'/dashboard/mocktest'}>Mocktest</NavLink> 
        </li>
        <li>
           <NavLink to={'/dashboard/reports'}>Reports</NavLink> 
        </li>
      </ul>
      <Outlet/>
    </div>
  )
}

export default Dashboard
