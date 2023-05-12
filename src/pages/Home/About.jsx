import React from 'react'
import person from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'

export const About = () => {
  return (
            <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row w-full">
           
           <div className='relative lg:w-1/2'>
            <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
            <img src={parts} className="w-3/5 shadow-2xl absolute top-1/2 right-5 border-8 border-white rounded-xl" />
            </div>
            <div className='w-full lg:w-1/2 flex flex-col gap-6 items-start px-2'>
            <h1 className="text-2xl font-semibold text-red-600">About Us</h1>
            <h1 className="text-5xl font-bold w-11/12">We're Qualified & Of Experience In This Field</h1>
            <p>
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. 
                In deleniti eaque aut repudiandae et a id nisi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam, sunt dolorem laborum neque reprehenderit at placeat, quisquam numquam doloremque id quas mollitia libero totam officiis nobis voluptates consectetur fugit quae!
                
            </p>
            <p>
                Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. 
                In deleniti eaque aut repudiandae et a id nisi. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam
                
            </p>
            <button className="btn btn-error text-white bg-red-600 hover:bg-red-500 text-lg my-4">Get More Info</button>
            </div>
        </div>
        </div>
  )
}
