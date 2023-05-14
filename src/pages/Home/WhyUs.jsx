import React from 'react'
import img1 from '../../assets/images/whyChoose/1.png'
import img2 from '../../assets/images/whyChoose/2.png'
import img3 from '../../assets/images/whyChoose/3.png'
import img4 from '../../assets/images/whyChoose/4.png'
import img5 from '../../assets/images/whyChoose/5.png'
import img6 from '../../assets/images/whyChoose/6.png'

const WhyUs = () => {
  return (
    <section className='my-8'>
    <div className='text-center w-3/4 mx-auto space-y-4 py-6'>
        <p className="text-2xl font-semibold text-red-600">Core Features</p>
        <h1 className='text-5xl font-bold'>Why Choose Us</h1>
        <p className='leading-8 tracking-[1px] text-lg'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-6 md:grid-cols-3 items-center gap-3 justify-items-center mx-4">
        <div className="p-4 border border-gray-300 rounded-xl flex flex-col justify-center items-center w-3/5 md:w-4/5 lg:w-full">
            <img src={img1}/>
            <p className='text-zinc-700 font-semibold my-2 text-center'>Expert Team</p>
        </div>
        <div className="p-4 border border-gray-300 rounded-xl flex flex-col justify-center items-center w-3/5 md:w-4/5 lg:w-full bg-red-600">
            <img src={img2}/>
            <p className='text-lg font-semibold my-2 text-white'>Exact Delivery Time</p>
        </div>
        <div className="p-4 border border-gray-300 rounded-xl flex flex-col justify-center items-center w-3/5 md:w-4/5 lg:w-full">
            <img src={img3}/>
            <p className='text-zinc-700 font-semibold my-2 text-center'>24/7 Support</p>
        </div>
        <div className="p-4 border border-gray-300 rounded-xl flex flex-col justify-center items-center w-3/5 md:w-4/5 lg:w-full">
            <img src={img4}/>
            <p className='text-zinc-700 font-semibold my-2 text-center'>Best Equipment</p>
        </div>
        <div className="p-4 border border-gray-300 rounded-xl flex flex-col justify-center items-center w-3/5 md:w-4/5 lg:w-full">
            <img src={img5}/>
            <p className='text-zinc-700 font-semibold my-2 text-center'>100% Gurantee</p>
        </div>
        <div className="p-4 border border-gray-300 rounded-xl flex flex-col justify-center items-center w-3/5 md:w-4/5 lg:w-full">
            <img src={img6}/>
            <p className='text-zinc-700 font-semibold my-2 text-center'>Fast Delivery</p>
        </div>
    </div>
    </section>
  )
}

export default WhyUs