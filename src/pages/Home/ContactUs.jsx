import React from 'react'
import calender from '../../assets/images/contact/calender.png'
import call from '../../assets/images/contact/call.png'
import location from '../../assets/images/contact/location.png'

const ContactUs = () => {
  return (
    <div className="container bg-zinc-800 w-full flex flex-col gap-12 md:flex-row justify-center items-center py-20 my-10 md:my-20">

      <div className="flex gap-3 items-center">
        <img src={calender} className='h-12'/>
        <div>
          <p className='text-lg text-white mb-3'>We are open monday-friday</p>
          <h1 className='text-white text-2xl font-semibold'>7:00 am - 9:00 pm</h1>
        </div>
      </div>

      <div className="flex gap-3 items-center">
        <img src={call} className='h-12'/>
        <div>
          <p className='text-lg text-white mb-3'>Need a repair? our address</p>
          <h1 className='text-white text-2xl font-semibold'>Liza Street, New York</h1>
        </div>
      </div>
      <div className="flex gap-3 items-center">
        <img src={location} className='h-12'/>
        <div>
          <p className='text-lg text-white mb-3'>We are open monday-friday</p>
          <h1 className='text-white text-2xl font-semibold'>7:00 am - 9:00 pm</h1>
        </div>
      </div>

    </div>
  )
}

export default ContactUs