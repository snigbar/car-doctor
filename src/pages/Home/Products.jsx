import React, { useState } from 'react'
import { FiArrowRight } from 'react-icons/fi'
import img1 from '../../assets/images/products/1.png'
import img2 from '../../assets/images/products/2.png'
import img3 from '../../assets/images/products/3.png'
import img4 from '../../assets/images/products/4.png'
import img5 from '../../assets/images/products/5.png'
import img6 from '../../assets/images/products/6.png'

function Products() {

    const [more,setMore] = useState(true)

    const productGenerator =(img,title,price) =>{

       return <div className="card card-compact w-96 bg-base-100 shadow-xl md:w-80 lg:w-96">
  <figure><img src={img} className='h-64' /></figure>
  <div className="card-body py-4">
    <h2 className="card-title">{title}</h2>
   
    <div className="card-actions justify-between items-center">
    <p className='text-xl text-red-600'>Price: ${price}</p>
      <button className="btn text-white bg-red-600 hover:bg-red-500 text-lg my-4 rounded-xl border-none">Details <FiArrowRight/></button>
    </div>
  </div>
</div>
 }


  return (
    <section className='my-8' id="products">
    <div className='text-center w-3/4 mx-auto space-y-4 py-6'>
        <p className="text-2xl font-semibold text-red-600">Products</p>
        <h1 className='text-5xl font-bold'>Browse Our Products</h1>
        <p className='leading-8 tracking-[1px] text-lg'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
    </div>

    <div className="container grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-x-4 md:gap-y-10 mt-8 md:mt-10 mx-auto">
      {productGenerator(img6,'Car Engine Plug',20.00)}
      {productGenerator(img3,'Car Air Filter',59.55)}
      {productGenerator(img1,'Car Piston Brake',350.00)}
      {productGenerator(img2,'Hydrolic Brake',250.00)}
      {productGenerator(img5,'Heavy Duty Tyres',120.00)}
      {productGenerator(img4,'18 cells Battery',260.00)}
    </div>
    <div className="flex justify-center my-8">
    {more?<button className="btn text-white bg-red-600 hover:bg-red-500 text-lg my-4 rounded-xl border-none mx-auto" onClick={()=>setMore(false)}>More Products<FiArrowRight/></button>:<p className="text-2xl font-semibold text-red-600">No more products found</p>}
    </div>
</section>
  )
}

export default Products