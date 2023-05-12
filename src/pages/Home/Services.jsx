import React, { useEffect, useState } from 'react'
import ServicesCard from './ServicesCard';

export const Services = () => {

    const [serviceData, SetServiceData] = useState([]);
    
    useEffect(()=>{
        fetch('services.json').then(res => res.json()).then(data => SetServiceData(data))
    },[])
    
  return (
    <section className='my-8'>
        <div className='text-center w-3/4 mx-auto space-y-4 py-6'>
            <p className="text-2xl font-semibold text-red-600">Services</p>
            <h1 className='text-5xl font-bold'>Our Service Area</h1>
            <p className='leading-8 tracking-[1px] text-lg'>Regular Maintenance is essential for keeping your vehicle up and running as it should and skipping scheduled maintenance can lead to problems that should be easy to fix becoming problems that cost hundreds of dollars to repair</p>
        </div>

        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-y-10 mt-8 md:mt-10">
           { serviceData.map(el => <ServicesCard key={el._id} services={el}></ServicesCard>)}
        </div>
        
    </section>
  )
}
