import React from 'react'
import logo from '../assets/logo.svg'

const Navbar = () => {

    const navLinks = <>
         <li><a>Item 3</a></li>
         <li><a>Item 3</a></li>
    </>
  return (
    <div className="navbar bg-base-100 h-28 mb-5">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
       {navLinks}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case h-max"><img src={logo} className='w-full'/></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {navLinks}
    </ul>
  </div>
  <div className="navbar-end">
  <button className="btn btn-error text-white bg-red-600 hover:bg-red-500 text-lg my-4">Appointment</button>
  </div>
</div>
  )
}

export default Navbar