import React from 'react'

import team1 from '../../assets/images/team/1.jpg'
import team2 from '../../assets/images/team/2.jpg'
import team3 from '../../assets/images/team/3.jpg'

import { FaGooglePlay,FaFacebookF,FaInstagram,FaYoutube } from "react-icons/fa";
const OurTeam = () => {

    const teamenerator =(img,name,designation) =>{

    return <div className="card card-compact w-96 bg-base-100 shadow-xl md:w-80 lg:w-96">
   <figure><img src={img} className='h-64' /></figure>
   <div className="card-body py-4 justify-center items-center gap-2">
     <h2 className="card-title">{name}</h2>
     <p className='text-xl text-zinc-700'>{designation}</p>
     <div className='text-2xl text-red-600 flex gap-4 items-center my-4'>
        <FaFacebookF className='text-2xl text-red-600'/>
        <FaGooglePlay className='text-2xl text-red-600'/>
        <FaInstagram className='text-2xl text-red-600'/>
        <FaYoutube className='text-2xl text-red-600'/>
        </div>
   </div>
 </div>
    }
  return (
    <section className='my-10 md:my-16 bg-gray-50 px-4 pb-10 md:pb-20'>

    <div className='text-center w-3/4 mx-auto space-y-4 py-6'>
        <p className="text-2xl font-semibold text-red-600">Team</p>
        <h1 className='text-5xl font-bold'>Meet Our Tean</h1>
        <p className='leading-8 tracking-[1px] text-lg'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
    </div>

    <div className="container grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 md:gap-x-4 md:gap-y-10 mt-8 md:mt-10 mx-auto">
        {teamenerator(team1,"Alex Marty","Chief Engineer")}
        {teamenerator(team2,"Jonah Byrde","Mechanical Expert")}
        {teamenerator(team3,"Peter Odell","Service Manager")}
    </div>
    </section>
  )
}

export default OurTeam