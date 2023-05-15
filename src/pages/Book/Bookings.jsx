import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../providers/AuthProvider'
import BookingCard from './BookingCard';

const Bookings = () => {

    const {user} = useContext(AuthContext);
    const [bookings, setBookings] = useState([])
    
    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    useEffect(()=>{
       fetch(url)
       .then(res => res.json())
       .then(data => setBookings(data))
    },[])

    

    const handleDelete = (id) =>{
        fetch(`http://localhost:5000/bookings/${id}`,{
            method:"DELETE"
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }

  return (
    <div>

    <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th className='bg-red-500 text-white'>
          
        </th>
        <th className='bg-red-500 text-white'>Image</th>
        <th className='bg-red-500 text-white'>Name</th>
        <th className='bg-red-500 text-white'>Serivce</th>
        <th className='bg-red-500 text-white'>Date</th>
        <th className='bg-red-500 text-white'>Price</th>
        <th className='bg-red-500 text-white'>Status</th>
      </tr>
    </thead>
    <tbody>
      {/* row */}

        {bookings.map(tr => <BookingCard key={tr._id} data={bookings} handleDelete={handleDelete}></BookingCard>)}
  
     
    </tbody>   
  </table>
</div>    
        
    </div>
  )
}

export default Bookings