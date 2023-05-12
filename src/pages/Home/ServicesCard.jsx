import React from 'react'
import { FiArrowRight } from "react-icons/fi";

const ServicesCard = ({services}) => {
    const {img, title, price} = services;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure><img src={img} className='h-64' /></figure>
  <div className="card-body py-4">
    <h2 className="card-title">{title}</h2>
   
    <div className="card-actions justify-between items-center">
    <p className='text-xl text-red-600'>Price: ${price}</p>
      <button className="btn btn-error btn-outline text-lg my-4btn btn-primary rounded-full"><FiArrowRight/></button>
    </div>
  </div>
</div>
  )
}

export default ServicesCard