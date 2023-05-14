import React from 'react'
import Iframe from 'react-iframe';

const ServiceLeft = ({data}) => {

    const {title,img,price,description,facility} =data;
  return (
    <div className='flex flex-col gap-6 w-4/5 md:w-3/5'>
        <img src={img} className='rounded-lg w-full object-cover'/>
        <h1 className='text-3xl md:text-5xl font-semibold text-zinc-800'>{title}</h1>
        <p className='text-lg text-center md:text-left'>{description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-items-center my-4">
        {
            facility.map((el,idx) =>(
                <div className='border-t-4 border-red-600 px-6 py-8 rounded-lg bg-gray-100' key={`idx${idx}`}>
                    <h1 className='text-center text-2xl mb-4'>{el.name}</h1>
                    <p className='text-center text-lg'>{el.details}</p>
                </div>
            ))
        }
        </div>

        <h1 className='text-3xl md:text-5xl font-semibold text-zinc-800'>3 simple steps to process</h1>
        <p className='text-lg text-center md:text-left'>Auscipit accusamus aspernatur nam nemo! Voluptate repellendus explicabo eos saepe, est expedita doloribus vel perferendis facere fugiat incidunt ipsam in impedit soluta. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit error quas aliquid, a nulla consequuntur cumque, perspiciatis cupiditate dolores itaque molestiae nesciunt architecto, libero placeat atque distinctio quis rem quidem!</p>
        {/* setps */}

            <div className="container grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-x-4 md:gap-y-10 mt-8 md:mt-10 mx-auto">

            <div className="card card-compact w-full bg-base-100 shadow-xl">
            <div className='mx-auto text-3xl font-bold flex flex-col justify-center items-center bg-red-500 rounded-[50%] w-14 h-14'><p className='text-center text-white'>1</p></div>
            <div className="card-body py-4 justify-center items-center gap-2">

                <h2 className="card-title">Step One</h2>
                <p className='text-xl text-zinc-700 text-center leading-8'>It uses a dictionary of over 200 </p>
                
            </div>
            
            </div>

            <div className="card card-compact w-full bg-base-100 shadow-xl">
            <div className='mx-auto text-3xl font-bold flex flex-col justify-center items-center bg-red-500 rounded-[50%] w-14 h-14'><p className='text-center text-white'>2</p></div>
            <div className="card-body py-4 justify-center items-center gap-2">

                <h2 className="card-title">Step Two</h2>
                <p className='text-xl text-zinc-700 text-center leading-8'>It uses a dictionary of over 200 </p>
                
            </div>
            
            </div>

            <div className="card card-compact w-full bg-base-100 shadow-xl">
            <div className='mx-auto text-3xl font-bold flex flex-col justify-center items-center bg-red-500 rounded-[50%] w-14 h-14'><p className='text-center text-white'>3</p></div>
            <div className="card-body py-4 justify-center items-center gap-2">

                <h2 className="card-title">Step Three</h2>
                <p className='text-xl text-zinc-700 text-center leading-8'>It uses a dictionary of over 200 </p>
                
            </div>
            
            </div>

        </div>

        <Iframe url="https://www.youtube.com/embed/09zIjp0qBRhttps://www.youtube.com/embed/ZMMJyFkyPbM"
        width="100%"
        height="350px"
        id=""
        className=""
        display="block"
        position="relative"
        styles={{
            margin:"50px 0"
        }}
        />
    </div>
  )
}

export default ServiceLeft