import React from 'react'
import banner from '../assets/images/banner/4.jpg'

const ServicesBanner = () => {
  return (
    <div className="carousel-item relative w-full h-[30vw] md:h-[20vw]">
    <img src={banner} className="w-full object-cover rounded-xl" />
    <div className="absolute flex flex-col justify-center gap-4 text-white  w-full md:w-1/2 h-full bg-gradient-to-r from-[#141414] to-[rgba(1,1,1,0)] px-6">
      <h1 className="text-3xl text-center md:text-left md:text-6xl font-bold ">Service Details</h1>
    </div>

    <div 
    className="absolute w-64 md:w-80 p-2 md:p-3 bottom-0 bg-red-600 left-1/2 -translate-x-1/2 mt-4"
    style={{clipPath: "polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%)"}}
    >
      <h1 className="text-xl md:text-2xl font-bold text-white text-center">Service Details</h1>
    </div>
    
  </div> 
  )
}

export default ServicesBanner