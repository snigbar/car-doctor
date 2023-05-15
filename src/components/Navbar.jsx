import React, { useContext } from 'react'
import logo from '../assets/logo.svg'
import { AuthContext } from '../providers/AuthProvider'

import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import { Link } from 'react-router-dom';

const Navbar = () => {

  const {user,logOut} = useContext(AuthContext);

 
    const navLinks = <>
         <li><Link to="/">Home</Link></li>
         
         <li>
         <ScrollLink activeClass="active" to="products" spy={true} smooth={true}offset={-50}duration={1000}>
        Products
        </ScrollLink>
         </li>
         <li>
         <ScrollLink activeClass="active" to="services" spy={true} smooth={true}offset={-50}duration={1000}>
        Services
        </ScrollLink>
         </li>
         
         <li><Link to="/services/bookings">My Bookings</Link></li>
         <li><Link to="/signup">Register</Link></li>
        
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
  { user?.email?
        <button className="btn btn-error text-white bg-red-600 hover:bg-red-500 text-lg my-4" onClick={()=>logOut()}>Logout</button>
          :<Link to='/login'><button className="btn btn-primary">Sign In</button></Link>}
  </div>
</div>
  )
}

export default Navbar