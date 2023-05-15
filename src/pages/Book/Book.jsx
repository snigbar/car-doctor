import React, { useContext } from 'react'
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import moment from 'moment/moment';

const Book = () => {

const {title,price,img,_id} = useLoaderData();
const {user}= useContext(AuthContext);
const dateToday = moment().format('LL');


const handleBookService = event =>{
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;
    const booking = {
        customerName: name, 
        email, 
        img,
        date, 
        service: title,
        service_id: _id, 
        price: price
    }
    fetch('http://localhost:5000/book',{

        method:"POST",
        headers:{
            "content-type":"application/json"
        },
        body: JSON.stringify(booking)
    }).then(res => res.json()).then(data => {
        if(data.insertedId) alert("service booked")
       
    })
    }
  return (
    <div className="p-8 rounded border border-gray-200">    
    <h1 className="font-medium text-4xl">Book your Service</h1>    
    <p className="text-gray-600 mt-6 text-2xl">{title}</p> 

    <form onSubmit={handleBookService}>      
    <div className="mt-8 grid lg:grid-cols-2 gap-4">        
    <div>
    <label htmlFor="name" className="text-sm text-gray-700 block mb-1 font-medium">Name</label>
    <input type="text" name="name" id="name" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="Enter your name" required/>       
    </div>
    <div>         
    <label htmlFor="email" className="text-sm text-gray-700 block mb-1 font-medium">Email Adress</label>        
    <input type="email" name="email" id="email" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="yourmail@provider.com" defaultValue={user?.email} required/>        
    </div>
     <div><label htmlFor="job" className="text-sm text-gray-700 block mb-1 font-medium">Price</label>         
    <input type="text" name="job" id="job" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" placeholder="(ex. developer)" defaultValue={price} readOnly/>        
    </div>        
    <div><label htmlFor="brithday" className="text-sm text-gray-700 block mb-1 font-medium">Date</label>          
    <input name="date" id="brithday" className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full" value={dateToday} placeholder={dateToday} type="text" readOnly/>        
    </div></div>  
    <div className="space-x-4 mt-8"> 
    <button className="btn text-white bg-red-600 hover:bg-red-500 text-lg my-4 rounded-xl border-none" type='submit'>Submit</button>
    <button className="btn text-lg bg-white border border-gray-200 text-gray-600 rounded hover:bg-gray-100 active:bg-gray-200 disabled:opacity-50">Cancel</button>      
    </div>    
    </form> 
    </div>
  )
}

export default Book