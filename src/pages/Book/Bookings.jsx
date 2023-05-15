import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../providers/AuthProvider'
import BookingCard from './BookingCard';
import swal from 'sweetalert';

const Bookings = () => {

    const {user} = useContext(AuthContext);
    const [bookings, setBookings] = useState([])
   
    
    const url = `http://localhost:5000/bookings?email=${user?.email}`;

    useEffect(()=>{
       fetch(url)
       .then(res => res.json())
       .then(data => {
        setBookings(data)
       
      })
    },[])

    
    

    const handleDelete = (id) =>{

        swal({
            title: "Are you sure?",
            text: "Are you sure that you want to delete the booking?",
            icon: "warning",
            dangerMode: true,
          })
          .then(willDelete => {
            if (willDelete) {
                
                fetch(`http://localhost:5000/bookings/${id}`,{
                    method:"DELETE"
                })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount > 0){
                        swal("Deleted!", "Your service has been deleted!", "success");
                         const remaining = bookings.filter(el => el._id !== id)
                         setBookings(remaining)
                    }
                })

             
            }
          }); 
    }


    const handleConfirm = id =>{
        fetch(`http://localhost:5000/bookings/${id}`,{
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status: 'confirm' })
           

        })
        .then(res =>res.json())
        .then(data =>
            {
                
                if (data.modifiedCount > 0) {
                    // update state
                    const remaining = bookings.filter(booking => booking._id !== id);
                    const updated = bookings.find(booking => booking._id === id);
                    updated.status = 'confirm'
                    const newBookings = [updated, ...remaining];
                    setBookings(newBookings);
                }
            }
            )
        
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
    
    {bookings.map(tr => <BookingCard key={tr._id} data={tr} handleDelete={handleDelete} handleConfirm={handleConfirm}></BookingCard>)}
    
     
    </tbody>   
  </table>
</div>    
        
    </div>
  )
}

export default Bookings