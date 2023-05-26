import React from 'react'

const BookingCard = ({data,handleDelete,handleConfirm}) => {

    const {_id,img,service,customerName,date,price,status} =data;
   
    
  return (
    <tr>
    <th>
      <label>
        
    { status? <></>: <button className="btn btn-circle btn-error btn-outline" onClick={()=> handleDelete(_id)}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
    </button>
    }
      </label>
    </th>
    <td>
      
        <div className="avatar">
          <div className="avatar w-28 rounded">
            <img src={img} />
          </div>
        </div>
       
    </td>
    <td className="text-xl font-semibold">
    {customerName}
    </td>
    <td>
     {service}
    </td>
    <td>{date}</td>
    <th>
     ${price}
    </th>
    <th>
    {status?
    <button className="btn btn-primary">confirmed</button>
    :<button className="btn btn-error btn-outline" onClick={()=> handleConfirm(_id)}>confirm</button>
    }
    
    </th>
  </tr>
  )
}

export default BookingCard