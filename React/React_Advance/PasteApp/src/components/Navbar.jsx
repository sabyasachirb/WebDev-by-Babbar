import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex flex-row gap-4 place-content-start p-2 text-2xl font-bold mt-8 mb-2 mx-10'>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/pastes"}>Pastes</NavLink>
    </div>
  )
}

export default Navbar
