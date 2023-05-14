import React from 'react'
import Banner from './Banner'
import { About } from './About'

import Footer from '../../components/Footer'
import ContactUs from './ContactUs'
import Products from './Products'
import OurTeam from './OurTeam'
import WhyUs from './WhyUs'
import { ServicesSection } from './ServicesSection'


const Home = () => {
  return (
    <>
    <Banner></Banner>
    <About></About>
    <ServicesSection></ServicesSection>
    <ContactUs></ContactUs>
    <Products></Products>
    <OurTeam></OurTeam>
    <WhyUs></WhyUs>
    <Footer></Footer>
    </>
    
  )
}

export default Home