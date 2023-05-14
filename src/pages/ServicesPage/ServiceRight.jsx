import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { IoDocuments } from "react-icons/io5";
import { FiArrowRight } from "react-icons/fi";
import logo from '../../assets/logo-white.png'

const ServiceRight = ({data}) => {

    const {_id, price} = data;
    const [serviceData, SetServiceData] = useState([]);
    
    useEffect(()=>{
        fetch('http://localhost:5000/services').then(res => res.json()).then(data => SetServiceData(data))
    },[])

  return (
    <div className='py-4 px-2 flex flex-col gap-6 items-center w-full md:w-2/5'>
        {/* services section */}
     <div className='border-t-4 border-red-600 px-6 py-8 rounded-lg bg-gray-100 w-full'>
        <h1 className='text-3xl'>Services</h1>
        <div className="flex flex-col gap-4 my-6 justify-center">
        {serviceData.map((el,idx) =>(
            <NavLink to={`/services/${el._id}`} className=" bg-white w-full p-4 rounded-lg" key={idx}>
                <p className='text-lg'>{el.title}</p>     
            </NavLink>

        ))}
        </div> 
        
     </div>


    {/* download section */}
        
    <div className='bg-zinc-800 px-6 py-8 rounded-lg w-full'>
    <h1 className='text-3xl text-white'>Services</h1>


    <div className="flex flex-col gap-4 my-6 justify-center">
        <div className="flex gap-4 items-center">
            <IoDocuments className='text-4xl text-red-500'/>
            <div className='text-white'>
                <h1 className='font-semibold text-2xl'>Our Broucher</h1>
                <p className='text-gray-400'>Download</p>
            </div>
            <button className="btn btn-error text-white bg-red-600 hover:bg-red-500 border-none text-lg font-bold rounded-full ms-auto"><FiArrowRight/></button>
        </div>
    </div>

    <div className="flex flex-col gap-4 my-6 justify-center">
        <div className="flex gap-2 items-center">
            <IoDocuments className='text-4xl text-red-500'/>
            <div className='text-white'>
                <h1 className='font-semibold text-2xl'>Company Details</h1>
                <p className='text-gray-400'>Download</p>
            </div>
            <button className="btn btn-error text-white bg-red-600 hover:bg-red-500 border-none text-lg font-bold rounded-full ms-auto"><FiArrowRight/></button>
        </div>
    </div>
    </div>


{/* save offer */}

    <div className='bg-zinc-800 px-6 py-8 rounded-lg w-full flex flex-col items-center justify-center gap-6 text-white'>
    <h1 className='text-3xl'>Services</h1>
    <img src={logo}/>
    <Link className='text-xl text-center'>Need Help? We Are Here
    To Help You
    </Link>

    <div className='bg-white text-gray-800 p-4 cursor-pointer'>
                <h1 className='font-semibold text-2xl text-center mb-3'><span className='text-red-600'>Car Doctor </span>Special</h1>
                <p className='text-center text-xl'>Save up to <span className='text-red-600'>60% off</span></p>
    </div>

    </div>

{/* price section */}

    <h1 className='text-5xl text-zinc-800 font-semibold self-start'>Price: ${price}</h1>  
    <Link className='w-full'><button className="btn btn-error text-white bg-red-600 hover:bg-red-500 border-none text-lg font-bold rounded-xl w-full">Proceed Checkout</button></Link>
    </div>
  )
}

export default ServiceRight