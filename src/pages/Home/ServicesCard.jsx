import React from 'react'
import { FiArrowRight } from "react-icons/fi";
import { Link } from 'react-router-dom';

const ServicesCard = ({services}) => {
    const {_id,img, title, price} = services;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl md:w-80 lg:w-96">
  <figure><img src={img} className='h-64' /></figure>
  <div className="card-body py-4">
    <h2 className="card-title">{title}</h2>
   
    <div className="card-actions justify-between items-center">
    <p className='text-xl text-red-600'>Price: ${price}</p>
    <Link to={`/services/${_id}`}>
      <button className="btn btn-error text-white bg-red-600 hover:bg-red-500 border-none text-lg font-bold rounded-full"><FiArrowRight/></button>
    </Link>
    </div>
  </div>
</div>
  )
}

export default ServicesCard