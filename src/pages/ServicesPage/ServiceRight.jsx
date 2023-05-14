import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

const ServiceRight = () => {
    const [serviceData, SetServiceData] = useState([]);
    
    useEffect(()=>{
        fetch('http://localhost:5000/services').then(res => res.json()).then(data => SetServiceData(data))
    },[])

  return (
    <div className='py-4 px-2 flex flex-col items-center w-full md:w-2/5'>

     <div className='border-t-4 border-red-600 px-6 py-8 rounded-lg bg-gray-100 w-full'>
        <h1 className='text-3xl'>Services</h1>
        <div className="flex flex-col gap-4 my-6 justify-center">
        {serviceData.map(el =>(
            <NavLink to={`/services/${el._id}`} className=" bg-white w-full p-4 rounded-lg">
                <p className='text-lg'>{el.title}</p>     
            </NavLink>

        ))}
        </div> 
        
     </div>
    </div>
  )
}

export default ServiceRight