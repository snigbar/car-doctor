import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../providers/AuthProvider'
import BookingCard from './BookingCard';
import swal from 'sweetalert';
import { useLocation, useNavigate } from 'react-router-dom';

const Bookings = () => {

    const {user,token} = useContext(AuthContext);
    const [bookings, setBookings] = useState([])
    const navigate = useNavigate();

    

    useEffect(()=>{

      const url = `https://car-doc-server-chi.vercel.app/bookings?email=${user?.email}`;
      
      const fetchData =async() =>{
       
       const response =await fetch(url,{
        method:"GET",
        headers:{
          'authorization': `Bearer ${localStorage.getItem('car-doc-token')}`
        }
       })
       const data = await response.json()
      
      if(!data.error) {
        setBookings(data)
        
      }
      }
      
      fetchData()
      

    },[token,user,navigate])

    
    

    const handleDelete = (id) =>{

        swal({
            title: "Are you sure?",
            text: "Are you sure that you want to delete the booking?",
            icon: "warning",
            dangerMode: true,
          })
          .then(willDelete => {
            if (willDelete) {
                
                fetch(`https://car-doc-server-chi.vercel.app/bookings/${id}`,{
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

        fetch(`https://car-doc-server-chi.vercel.app/bookings/${id}`,{
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
    <div className='my-10'>

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

// https://car-doc-server-chi.vercel.app/bookings?email=${user?.email}