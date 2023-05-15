import React, { useEffect } from 'react'
import ServicesBanner from '../../components/ServicesBanner'
import { useLoaderData } from 'react-router-dom'
import ServiceLeft from './ServiceLeft'
import ServiceRight from './ServiceRight'
import { animateScroll as scroll } from "react-scroll";

const ServicesPage = () => {

const data = useLoaderData()

useEffect(()=>{
  scroll.scrollToTop();
},[])



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