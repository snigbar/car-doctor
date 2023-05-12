import React from 'react'
import banner1 from "../../assets/images/banner/1.jpg"
import banner2 from "../../assets/images/banner/2.jpg"
import banner3 from "../../assets/images/banner/3.jpg"
import banner4 from "../../assets/images/banner/4.jpg"
import banner6 from "../../assets/images/banner/6.jpg"

const Banner = () => {
  return (
    <div className="carousel w-full h-[550px]">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={banner1} className="w-full object-cover rounded-xl" />
    <div className="absolute flex flex-col justify-center gap-4 text-white w-1/2 h-full bg-gradient-to-r from-[#141414] to-[rgba(1,1,1,0)] px-6">
      <h1 className="text-7xl font-bold ">Affordable Price for Car Servicing</h1>
      <p className='text-lg'>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <div className="flex gap-4">
      <button className="btn btn-primary">Latest Project</button>
      <button className="hover:bg-red-500 bg-red-600 font-semibold text-white py-2 px-4 rounded">Discover More</button>
      </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-4">
      <a href="#slide6" className="btn btn-circle bg-red-600 border-none hover:bg-red-700">❮</a> 
      <a href="#slide2" className="btn btn-circle bg-red-600 border-none hover:bg-red-700">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={banner2} className="w-full object-cover rounded-xl" />
    <div className="absolute flex flex-col justify-center gap-4 text-white w-1/2 h-full bg-gradient-to-r from-[#141414] to-[rgba(1,1,1,0)] px-6">
      <h1 className="text-7xl font-bold ">Affordable Price for Car Servicing</h1>
      <p className='text-lg'>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <div className="flex gap-4">
      <button className="btn btn-primary">Latest Project</button>
      <button className="hover:bg-red-500 bg-red-600 font-semibold text-white py-2 px-4 rounded">Discover More</button>
      </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-4">
      <a href="#slide2" className="btn btn-circle bg-red-600 border-none hover:bg-red-700">❮</a> 
      <a href="#slide3" className="btn btn-circle bg-red-600 border-none hover:bg-red-700">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={banner3} className="w-full object-cover rounded-xl" />
    <div className="absolute flex flex-col justify-center gap-4 text-white w-1/2 h-full bg-gradient-to-r from-[#141414] to-[rgba(1,1,1,0)] px-6">
      <h1 className="text-7xl font-bold ">Affordable Price for Car Servicing</h1>
      <p className='text-lg'>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <div className="flex gap-4">
      <button className="btn btn-primary">Latest Project</button>
      <button className="hover:bg-red-500 bg-red-600 font-semibold text-white py-2 px-4 rounded">Discover More</button>
      </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-4">
      <a href="#slide3" className="btn btn-circle bg-red-600 border-none hover:bg-red-700">❮</a> 
      <a href="#slide4" className="btn btn-circle bg-red-600 border-none hover:bg-red-700">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src={banner4} className="w-full object-cover rounded-xl" />
    <div className="absolute flex flex-col justify-center gap-4 text-white w-1/2 h-full bg-gradient-to-r from-[#141414] to-[rgba(1,1,1,0)] px-6">
      <h1 className="text-7xl font-bold ">Affordable Price for Car Servicing</h1>
      <p className='text-lg'>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <div className="flex gap-4">
      <button className="btn btn-primary">Latest Project</button>
      <button className="hover:bg-red-500 bg-red-600 font-semibold text-white py-2 px-4 rounded">Discover More</button>
      </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-4">
      <a href="#slide4" className="btn btn-circle bg-red-600 border-none hover:bg-red-700">❮</a> 
      <a href="#slide6" className="btn btn-circle bg-red-600 border-none hover:bg-red-700">❯</a>
    </div>
  </div>
  
  <div id="slide6" className="carousel-item relative w-full">
    <img src={banner6} className="w-full object-cover rounded-xl" />
    <div className="absolute flex flex-col justify-center gap-4 text-white w-1/2 h-full bg-gradient-to-r from-[#141414] to-[rgba(1,1,1,0)] px-6">
      <h1 className="text-7xl font-bold ">Affordable Price for Car Servicing</h1>
      <p className='text-lg'>Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <div className="flex gap-4">
      <button className="btn btn-primary">Latest Project</button>
      <button className="hover:bg-red-500 bg-red-600 font-semibold text-white py-2 px-4 rounded">Discover More</button>
      </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0 gap-4">
      <a href="#slide6" className="btn btn-circle bg-red-600 border-none hover:bg-red-700">❮</a> 
      <a href="#slide1" className="btn btn-circle bg-red-600 border-none hover:bg-red-700">❯</a>
    </div>
  </div>
</div>
  )
}

export default Banner