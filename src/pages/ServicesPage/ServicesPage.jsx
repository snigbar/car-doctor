import React from 'react'
import ServicesBanner from '../../components/ServicesBanner'
import { useLoaderData } from 'react-router-dom'
import ServiceLeft from './ServiceLeft'
import ServiceRight from './ServiceRight'

const ServicesPage = () => {
//  const {title,img,price,description,facility,price} = useLoaderData();
const data = useLoaderData()
  return (
    <>
    <section className='my-10'>
    <ServicesBanner></ServicesBanner>
    <div className='flex flex-col items-center md:items-start md:flex-row gap-5 my-10'>
    <ServiceLeft data={data}></ServiceLeft>
    <ServiceRight data={data}></ServiceRight>
    </div>
    </section>
    </>
  )
}

export default ServicesPage